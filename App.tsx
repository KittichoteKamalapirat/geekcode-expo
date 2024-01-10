import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";

import { ApolloProvider } from "@apollo/client";
import { default as React, useEffect, useState } from "react";
import { EventProvider } from "react-native-outside-press";
import AppWithoutApollo from "./AppWithoutApollo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { apolloClient } from "./lib/apollo";
import TabNavigator from "./navigations/TabNavigator";
import { useIsFirstLaunch } from "./util/useIsFirstLaunch";
import { LocalStorage } from "./lib/localStorage";
import { StudyHistory, useStore } from "./lib/store";
import Loader from "./components/Loader";

export default function App() {
  const [routeName, setRouteName] = useState("");
  const ref = createNavigationContainerRef();
  const isFirstLaunch = useIsFirstLaunch();
  const { set: setStudy, history } = useStore((state) => state.study);
  const { set: setApp, appIsReady } = useStore((state) => state.app);

  useEffect(() => {
    async function prepare() {
      try {
        // load dictioanry database
        if (isFirstLaunch) {
          console.log(
            "is first launch",
            process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL
          );
        }

        const historyStr = await AsyncStorage.getItem(
          LocalStorage.studyHistory
        );

        if (historyStr) {
          const history = JSON.parse(historyStr) as StudyHistory[];
          if (history && history?.length > 0) {
            setStudy({ history });
          }
        } else {
          setStudy({ history: [] });
        }

        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setApp({ appIsReady: true });
      }
    }

    prepare();
  }, [appIsReady]);

  console.log("appIsReady", appIsReady);
  console.log("history", history);

  if (!appIsReady || !history) {
    console.log("null");
    return null; // Splashscreen is shown
  }

  console.log("ready");
  return (
    <EventProvider>
      <ErrorBoundary>
        <NavigationContainer
          ref={ref}
          onReady={() => {
            const routeName =
              ref.getCurrentRoute && ref.getCurrentRoute()?.name;
            setRouteName(routeName || "");
          }}
          onStateChange={async () => {
            const currentRouteName =
              ref.getCurrentRoute && ref.getCurrentRoute()?.name;

            setRouteName(currentRouteName || "");
          }}
        >
          <ApolloProvider client={apolloClient}>
            <AppWithoutApollo />
            <TabNavigator routeName={routeName} />
          </ApolloProvider>
        </NavigationContainer>
      </ErrorBoundary>
    </EventProvider>
  );
}
