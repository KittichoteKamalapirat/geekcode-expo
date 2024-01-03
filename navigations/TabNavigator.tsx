import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { bgColor, grey300, primaryColor } from "../theme/style";
import HomeStackScreen from "./HomeStackScreen";

const Tabs = createBottomTabNavigator();

interface Props {
  routeName: string;
}

const TabNavigator = ({ routeName }: Props) => {
  const hideBottomTab =
    routeName === "Onboarding" ||
    routeName === "Auth" ||
    routeName === "Login" ||
    routeName === "Lessons" ||
    routeName === "Lesson" ||
    routeName === "Profile" ||
    routeName === "Home" ||
    routeName === "Register"; // hide if onboarding

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: bgColor,
          display: hideBottomTab ? "none" : "flex",
          height: 48,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },

        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: grey300,
      }}
    >
      <Tabs.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          // tabBarShowLabel: false,
          // tabBarStyle: { display: hideBottomTab ? "none" : "flex" },

          // tabBarIcon: ({ focused }) => (
          //   <MaterialIcons
          //     name="account-circle"
          //     size={28}
          //     color={focused ? primaryColor : grey300}
          //   />
          // ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
