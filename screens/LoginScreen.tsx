import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  UseFormSetError,
  useForm,
} from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import Button from "../components/Buttons/Button";
import MyText from "../components/MyTexts/MyText";
import ScreenLayout from "../components/layouts/ScreenLayout";

import {
  MeDocument,
  MeQuery,
  useGuestLoginMutation,
  useLoginMutation,
  useMeQuery,
} from "../graphql/generated/graphql";
import tw from "../lib/tailwind";
import { HomeStackParamList } from "../navigations/HomeStackScreen";
import { grey300 } from "../theme/style";
import handleGraphqlErrors from "../util/handleGraphqlErrors";
import Loader from "../components/Loader";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Login">;

enum FormNames {
  USERNAME_OR_EMAIL_OR_PHONE_NUMBER = "email",
  PASSWORD = "password",
}

interface FormValues {
  email: string;
  password: string;
}

const defaultValues: FormValues = {
  email: "",
  password: "",
};
const Login = () => {
  const { data: meData, loading: loading } = useMeQuery();
  const { navigate } = useNavigation<NavigationProp>();
  const [guestLogin] = useGuestLoginMutation();
  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const [, setGenericErrorMessage] = useState("");
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const route: RouteProp<{ params: { next: string | null } }> = useRoute();

  const [login] = useLoginMutation();

  const togglepasswordIsShown = () => {
    setPasswordIsShown(!passwordIsShown);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await login({
        variables: { input: data },
        update: (cache, { data }) => {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data?.login.user,
            },
          });
        },
      });

      // └ has to match what defined in graphqlmutation

      if (response) {
        const gqlErrors = response.data?.login.errors;

        const resultUserErrors = handleGraphqlErrors(
          data,
          gqlErrors,
          setError as unknown as UseFormSetError<FieldValues>,
          setGenericErrorMessage
        );

        const userId = response.data?.login.user?.id;
        if (resultUserErrors.length === 0 && userId) {
          navigate("Home");
        }
      }
    } catch (error) {
      console.error("⛔ catch block", JSON.stringify(error));
    }
  };

  // manuall set user in context
  // useEffect(() => {
  //   if (meData?.me && setCurrentUser) setCurrentUser(meData.me as User);
  // }, [meData?.me, setCurrentUser]);

  // useEffect(() => {
  //   // redirect if already logged in
  //   if (currentUser) {
  //     const nextScreen = route.params?.next;
  //     if (nextScreen) {
  //       navigate(nextScreen as "Login");
  //     } else {
  //       navigate("Home");
  //     }
  //   }
  // }, [currentUser]);

  const handleGuestLogin = async () => {
    try {
      const response = await guestLogin({
        update: (cache, { data }) => {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data?.guestLogin.user,
            },
          });
        },
      });
      // └ has to match what defined in graphqlmutation

      if (response) {
        const userId = response.data?.guestLogin.user?.id;
        if (userId) {
          navigate("Home");
        }
      }
    } catch (error) {
      console.error("⛔  error registering in AuthScreen", error);
    }
  };

  if (loading) {
    return <Loader isFullScreen />;
  }

  return (
    <ScreenLayout alignItems="items-center">
      <View style={tw`w-full`}>
        <MyText className="mb-4 text-2xl font-bold text-grey-900">
          Log in
        </MyText>

        <View style={tw`mt-2`}>
          <Text style={tw`text-md text-grey-800`}>Email or Username</Text>
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
                placeholder="Email or Username"
                placeholderTextColor={grey300}
                style={tw`text-grey-800 text-md bg-white w-full h-12  p-2 rounded-md my-2`}
              />
            )}
            name={FormNames.USERNAME_OR_EMAIL_OR_PHONE_NUMBER}
          />
          {errors.email ? (
            <Text style={tw`text-red`}>This is required.</Text>
          ) : null}
        </View>

        <View style={tw`mt-2`}>
          <Text style={tw`text-md text-grey-800`}>Password</Text>

          <View style={tw`relative items-end`}>
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
                  placeholderTextColor={grey300}
                  secureTextEntry={!passwordIsShown}
                  style={tw`text-grey-800 text-md bg-white w-full h-12  p-2 rounded-md my-2`}
                />
              )}
              name={FormNames.PASSWORD}
            />
            {/* <View style={tw`absolute top-5 right-4`}>
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
            </View> */}
          </View>

          {errors.password && <Text>This is required.</Text>}
        </View>

        <Button
          label="Login"
          className="mt-2"
          onPress={handleSubmit(onSubmit)}
        />

        <View style={tw`w-full flex items-center mt-4`}>
          <Button
            label="Log in as Guest"
            variant="TEXT"
            onPress={handleGuestLogin}
          />
        </View>

        <View style={tw`flex-row items-center justify-center mt-2`}>
          <Text>Don't have an account yet? </Text>

          <Button
            label="Create account"
            size="SMALL"
            variant="TEXT"
            onPress={() => navigate("Register")}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Login;
