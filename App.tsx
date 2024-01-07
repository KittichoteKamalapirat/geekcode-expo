import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";

import { ApolloProvider } from "@apollo/client";
import { default as React, useState } from "react";
import { EventProvider } from "react-native-outside-press";
import AppWithoutApollo from "./AppWithoutApollo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { apolloClient } from "./lib/apollo";
import TabNavigator from "./navigations/TabNavigator";

export default function App() {
  const [routeName, setRouteName] = useState("");
  const ref = createNavigationContainerRef();

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
