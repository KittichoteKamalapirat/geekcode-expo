import { useNavigation } from "@react-navigation/native";

import { Dimensions, Image, Text, View, StyleSheet } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import { OnboardingInfo } from "../../screens/OnboardingScreen";
import { grey0 } from "../../theme/style";
import {
  MeDocument,
  MeQuery,
  useGuestLoginMutation,
} from "../../graphql/generated/graphql";
import { useIsAuth } from "../../util/useIsAuth";
import MyText from "../MyTexts/MyText";
import Button from "../Buttons/Button";
import tw from "../../lib/tailwind";

type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "Onboarding"
>;

interface SlideProps {
  item: OnboardingInfo;
}

const { width } = Dimensions.get("window");

const OnboardingSlide = ({ item }: SlideProps) => {
  useIsAuth(); // !IMPORTTANT need this to set cookie when meQuery changes
  const [guestLogin] = useGuestLoginMutation();
  const { navigate } = useNavigation<NavigationProp>();

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
      console.error("⛔  error registering", error);
    }
  };

  if (item.id === "4")
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width,
            height: "50%",
          }}
        >
          <Image source={item.image} style={tw`w-20 h-20`} />
          <MyText className="text-primary font-serif text-3xl">Jocky</MyText>
          <Text style={styles.title}>{item?.title}</Text>
        </View>

        <View
          style={{
            width: "80%",
          }}
        >
          <Button label="Sign up free" onPress={() => navigate("Register")} />
          <Button
            label="Log in"
            variant="OUTLINED"
            onPress={() => navigate("Login", { next: "Onboarding" })}
          />

          <View style={tw`w-full flex items-center mt-4`}>
            <Button
              label="Log in as Guest"
              variant="TEXT"
              onPress={handleGuestLogin}
            />
          </View>

          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    );
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "85%", width, resizeMode: "cover" }}
      />
      <View style={tw`w-5/6`}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: grey0,
    maxWidth: "100%",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "left",
    overflowWrap: "normal",
  },
  subtitle: {
    color: grey0,
    fontSize: 14, // can't be larger than this for now
    marginTop: 10,
    textAlign: "left",
  },
});

export default OnboardingSlide;
