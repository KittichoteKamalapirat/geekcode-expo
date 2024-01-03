import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import logo from "../assets/images/logo.png";
import MyText from "../components/MyTexts/MyText";
import Register from "../components/Register";
import ScreenLayout from "../components/layouts/ScreenLayout";
import { BRAND_NAME, BRAND_ONE_LINER } from "../constants";
import tw from "../lib/tailwind";
import { useIsAuth } from "../util/useIsAuth";

const AuthScreen = () => {
  useIsAuth(); // !IMPORTTANT need this to set cookie when meQuery changes

  return (
    <ScreenLayout justifyContent="justify-start">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={tw`flex  items-center my-8 justify-center`}>
          <Image source={logo} style={tw`w-20 h-20 mx-auto`} />
          <MyText className="mt-2 font-bold text-lg text-primary text-center">
            {BRAND_NAME}
          </MyText>
          <MyText className="text-md text-center">{BRAND_ONE_LINER}</MyText>
        </View>

        <View>
          <Text style={tw`text-center my-4 text-grey-500`}>Or</Text>
        </View>

        <View>
          <Register className="mx-auto w-11/12" />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default AuthScreen;
