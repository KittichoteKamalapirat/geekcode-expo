import { Asset } from "expo-asset";
import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { LocalStorage } from "./lib/localStorage";
import { useStore } from "./lib/store";
import { HomeStackParamList } from "./navigations/HomeStackScreen";
import { useIsFirstLaunch } from "./util/useIsFirstLaunch";
// import { clearAsyncStorage } from "./util/clearAsyncStorage";
// clearAsyncStorage();

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Login">;

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AppWithoutApollo = () => {
  // HOOKS
  const { navigate } = useNavigation<NavigationProp>();
  const [appIsReady, setAppIsReady] = useState(false);
  const isFirstLaunch = useIsFirstLaunch();
  const {
    set: setUser,
    id,
    pronoun,
    countryCode,
  } = useStore((state) => state.user);

  const { set: setAction } = useStore((state) => state.action);
  const signupComplete = Boolean(id && pronoun && countryCode);

  // for hiding tab in onboarding screen

  // HANDLERS
  const cacheResources = async () => {
    const audios = [require("./assets/audio/success.mp3")];
    const cacheAudios = audios.map((audio) => {
      return Asset.fromModule(audio).downloadAsync();
    });

    return Promise.all(cacheAudios);
  };

  const onLayoutRootView = useCallback(async () => {
    // ref: https://docs.expo.dev/versions/latest/sdk/splash-screen/
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // USE_EFFECTS
  // load and cache resources
  useEffect(() => {
    async function prepare() {
      try {
        // load dictioanry database
        if (isFirstLaunch)
          console.log(
            "is first launch",
            process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL
          );

        const userId = await AsyncStorage.getItem(LocalStorage.userId);
        const countryCode = await AsyncStorage.getItem(
          LocalStorage.userCountryCode
        );
        const pronoun = await AsyncStorage.getItem(LocalStorage.userPronoun);
        const completedLessons = await AsyncStorage.getItem(
          LocalStorage.completedLessons
        );

        if (userId) {
          setUser({ id: userId });
        }
        if (countryCode) {
          setUser({ countryCode });
        }
        if (pronoun) {
          setUser({ pronoun });
        }

        if (completedLessons) {
          const lessons = JSON.parse(completedLessons) as string[];
          if (lessons && lessons?.length > 0) {
            setAction({ completedLessons: lessons });
          }
        }

        // load success sound and images
        await cacheResources();
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, [appIsReady]);

  useEffect(() => {
    if (signupComplete) navigate("Home");
  }, [signupComplete]);

  if (!appIsReady) {
    return null; // Splashscreen is shown
  }

  return (
    <View>
      <View onLayout={onLayoutRootView}></View>

      <StatusBar style="dark" />

      <Toast />
    </View>
  );
};

export default AppWithoutApollo;
