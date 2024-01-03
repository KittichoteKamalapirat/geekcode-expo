import { Entypo } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormSetError,
} from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  MeDocument,
  MeQuery,
  useMeQuery,
  useRegisterMutation,
} from "../graphql/generated/graphql";
import tw from "../lib/tailwind";
import { HomeStackParamList } from "../navigations/HomeStackScreen";
import { grey100, grey300 } from "../theme/style";
import handleGraphqlErrors from "../util/handleGraphqlErrors";
import Button from "./Buttons/Button";
import IconButton from "./Buttons/IconButton";
import ScreenLayout from "./layouts/ScreenLayout";
import MyText from "./MyTexts/MyText";
import Loading from "./Loader";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

enum FormNames {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
}

interface FormValues {
  [FormNames.EMAIL]: string;
  [FormNames.PASSWORD]: string;
  [FormNames.CONFIRM_PASSWORD]: string;
}

const defaultValues: FormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

interface RegisterProps {
  className?: string;
}
const Register = ({ className = "w-full" }: RegisterProps) => {
  // hooks

  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const { navigate } = useNavigation<NavigationProp>();
  const { data: meData, loading: loading } = useMeQuery();
  const [, setGenericErrorMessage] = useState("");
  const {
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const route: RouteProp<HomeStackParamList, "Register"> = useRoute();

  // // manuall set user in context
  // useEffect(() => {
  //   if (meData?.me && setCurrentUser) setCurrentUser(meData.me as User);
  // }, [meData?.me, setCurrentUser]);

  // useEffect(() => {
  //   // redirect if already logged in
  //   if (currentUser) {
  //     // without the following line, push to / even when there is next param
  //     const nextScreen = route.params?.next;

  //     if (nextScreen) {
  //       navigate(nextScreen as "Login" | "Register");
  //     } else {
  //       navigate("Home");
  //     }
  //   }
  // }, [currentUser]);

  // handlers
  const togglepasswordIsShown = () => {
    setPasswordIsShown(!passwordIsShown);
  };

  const [register] = useRegisterMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { email, password } = data;
      const response = await register({
        variables: {
          input: {
            email,
            password,
          },
        },
        update: (cache, { data }) => {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data?.register.user,
            },
          });
        },
      });
      // └ has to match what defined in graphqlmutation

      if (response) {
        const gqlErrors = response.data?.register.errors;

        const resultUserErrors = handleGraphqlErrors(
          data,
          gqlErrors,
          setError as unknown as UseFormSetError<FieldValues>,
          setGenericErrorMessage
        );

        const userId = response.data?.register.user?.id;
        if (resultUserErrors.length === 0 && userId) {
          navigate("Home");
        }
      }
    } catch (error) {
      console.error("⛔  error registering");
    }
  };

  if (loading) {
    return <Loader isFullScreen />;
  }

  return (
    <View style={tw`${className}`}>
      <MyText className="text-2xl font-bold mb-4">Create Account</MyText>

      <View style={tw`mt-2`}>
        <Text style={tw`text-md text-grey-850`}>Email</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              placeholderTextColor={grey100}
              style={tw`text-grey-850 text-md bg-white w-full h-12  p-2 rounded-md mt-2`}
            />
          )}
          name={FormNames.EMAIL}
        />
        {errors.email ? (
          <Text style={tw`text-grey-0`}>{errors.email?.message}</Text>
        ) : null}
      </View>

      <View style={tw`mt-2 `}>
        <Text style={tw`text-md text-grey-850`}>Password</Text>

        <View style={tw`relative`}>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                placeholder="Password"
                placeholderTextColor={grey100}
                secureTextEntry={!passwordIsShown}
                style={tw`text-grey-850 text-md bg-white w-full h-12  p-2 rounded-md mt-2`}
              />
            )}
            name={FormNames.PASSWORD}
          />

          {errors.password && (
            <Text style={tw`text-red`}>This is required.</Text>
          )}

          <View style={tw`absolute top-5 right-4`}>
            <IconButton
              variant="TEXT"
              icon={
                <Entypo
                  name={passwordIsShown ? "eye-with-line" : "eye"}
                  size={24}
                  color={grey300}
                  onPress={togglepasswordIsShown}
                />
              }
            />
          </View>
        </View>
      </View>

      <View style={tw`mt-2`}>
        <Text style={tw`text-md text-grey-850`}>Confirm Password</Text>

        <View style={tw`items-end`}>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                placeholder="Confirm Password"
                placeholderTextColor={grey100}
                secureTextEntry={!passwordIsShown}
                style={tw`text-grey-850 text-md bg-white w-full h-12  p-2 rounded-md mt-2`}
              />
            )}
            name={FormNames.CONFIRM_PASSWORD}
          />
        </View>

        {errors.confirmPassword && <MyText>Password does not match.</MyText>}
      </View>

      <View style={tw`mt-6`}>
        <Button label="Create account" onPress={handleSubmit(onSubmit)} />
      </View>

      <View style={tw`flex-row justify-center mt-2`}>
        <Text>Already have an account? </Text>

        <Button
          label="Log in"
          variant="TEXT"
          onPress={() => navigate("Login", { next: "Home" })}
          size="MEDIUM"
        />
      </View>
    </View>
  );
};

export default Register;
