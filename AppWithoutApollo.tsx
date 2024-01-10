import Toast from "react-native-toast-message";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { View } from "react-native";
import { useStore } from "./lib/store";
import { useIsFirstLaunch } from "./util/useIsFirstLaunch";
// import { clearAsyncStorage } from "./util/clearAsyncStorage";
// clearAsyncStorage();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AppWithoutApollo = () => {
  // HOOKS

  const { appIsReady } = useStore((state) => state.app);
  const isFirstLaunch = useIsFirstLaunch();

  // for hiding tab in onboarding screen

  const onLayoutRootView = useCallback(async () => {
    // ref: https://docs.expo.dev/versions/latest/sdk/splash-screen/
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // USE_EFFECTS
  // load and cache resources

  return (
    <View>
      <View onLayout={onLayoutRootView}></View>

      <StatusBar style="light" />

      <Toast />
    </View>
  );
};

export default AppWithoutApollo;
