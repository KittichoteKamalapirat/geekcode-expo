import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import clsx from "clsx";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Home">;

const HomecreenHeader = () => {
  const { navigate } = useNavigation<NavigationProp>();
  const route: RouteProp<HomeStackParamList> = useRoute();

  const currentScreenName = route.name;

  const handleNavigate = (screen: "Home") => {
    navigate(screen);
  };

  const activeClassName = "font-bold text-grey-900";
  const inactiveClassName = "opacity-70";
  return (
    <SafeAreaView style={tw` flex flex-row  bg-grey-0`}>
      <TouchableOpacity
        style={tw`${clsx("rounded-full  flex-1")}`}
        onPress={() => handleNavigate("Home")}
      >
        <Text
          style={tw`${clsx(
            "text-lg py-4 text-center text-grey-900",
            currentScreenName === "Home" ? activeClassName : inactiveClassName
          )}`}
        >
          Words
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`${clsx(
          "rounded-full flex-1",
          currentScreenName === "Home" ? activeClassName : inactiveClassName
        )}`}
        onPress={() => handleNavigate("Home")}
      >
        <Text
          style={tw`${clsx(
            "text-lg py-4 text-center text-grey-900",
            currentScreenName === "Home" ? activeClassName : inactiveClassName
          )}`}
        >
          Search
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomecreenHeader;
