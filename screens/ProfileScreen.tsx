import React from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";
import Button from "../components/Buttons/Button";
import MyText from "../components/MyTexts/MyText";
import ScreenLayout from "../components/layouts/ScreenLayout";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";
import { HomeStackParamList } from "../navigations/HomeStackScreen";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Profile">;

const ProfileScreen = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const {
    countryDisplay,
    pronoun,
    set: setUser,
  } = useStore((state) => state.user);

  const clearAndRedirect = () => {
    setUser({ countryCode: "", pronoun: "", id: "" });

    navigate("Begin");
  };
  return (
    <ScreenLayout justifyContent="justify-start">
      <View style={cn("rounded-md p-4 my-4 bg-white")}>
        <MyText className="font-bold text-lg mb-2">Profile</MyText>
        <MyText className="text-xs mb-1">Country: {countryDisplay}</MyText>
        <MyText className="text-xs">Pronoun: {pronoun}</MyText>

        <Button
          label="Clear User Info"
          onPress={clearAndRedirect}
          size="SMALL"
          className="mt-4"
        />
      </View>
    </ScreenLayout>
  );
};

export default ProfileScreen;
