import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";

import ProfileScreen from "../screens/ProfileScreen";
import StudyQuestionScreen from "../screens/StudyQuestionScreen";
import {
  backgroundPrimary,
  headerBgColor,
  headerTextColor,
} from "../theme/style";
import { ObjectValues } from "../types";
import { useIsFirstLaunch } from "../util/useIsFirstLaunch";

const HomeStack = createNativeStackNavigator();

const HOME_STACK_SCREENS = {
  HOME: "Home",
  LESSON: "Lesson",
  AUTH: "Auth",
  LOGIN: "Login",
  REGISTER: "Register",
  ONBOARDING: "Onboarding",
  STUDY_QUESTION: "StudyQuestion",
  // LESSONS: "Lessons",
} as const;

type HomeStackScreens = ObjectValues<typeof HOME_STACK_SCREENS>;

export type HomeStackParamList = {
  Home: undefined;
  Auth: undefined;
  Profile: undefined;

  Lesson: { id: string };
  StudyQuestion: undefined; // get slug from global store
  Lessons: undefined;

  Login: undefined | { next?: HomeStackScreens };
  Register: undefined | { next?: HomeStackScreens };
  Onboarding: undefined;
};

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Home">;

const HomeStackScreen = () => {
  const isFirstLaunch = useIsFirstLaunch();

  const navigation = useNavigation<NavigationProp>();

  // clearAsyncStorage();

  return (
    <HomeStack.Navigator
      screenOptions={{
        // headerShown: false,
        headerTitleAlign: "left", // todo not working
        headerTintColor: headerTextColor,
        headerStyle: { backgroundColor: headerBgColor },
      }}
    >
      {/* {isFirstLaunch ? (
        <HomeStack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      ) : null} */}
      {/* 
      {!currentUser ? (
        <HomeStack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      ) : null} */}

      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "left",
          headerShown: false,
          headerTitle: "Home",
          headerTintColor: "white",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: backgroundPrimary,
            // shadowColor: "transparent",
            // opacity: 0,
          },
          // headerRight: ({}) => (
          //   <IconButton
          //     icon={
          //       <MaterialIcons name="account-circle" size={28} color="white" />
          //     }
          //     variant="TEXT"
          //     onPress={() => navigation.navigate("Profile")}
          //   />
          // ),
        }}
      />
      {/* <HomeStack.Screen
        name="Lessons"
        component={LessonsScreen}
        options={{
          headerTitleAlign: "left",
          headerTintColor: "white",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: secondaryColor,
          },
          headerBackVisible: true,
        }}
      /> */}

      {/* <HomeStack.Screen
        name="Lesson"
        component={LessonScreen}
        options={{
          headerTitleAlign: "left",
          headerTintColor: "white",
          headerShadowVisible: false, // hide the bottom border
          headerStyle: {
            backgroundColor: "black",
          },
          headerBackVisible: true,
        }}
      /> */}
      <HomeStack.Screen
        name="StudyQuestion"
        component={StudyQuestionScreen}
        options={{
          headerTitleAlign: "left",
          headerTintColor: "white",
          headerShadowVisible: false, // hide the bottom border
          headerStyle: {
            backgroundColor: backgroundPrimary,
          },
          headerBackVisible: true,
          title: "Study",
        }}
      />

      <HomeStack.Screen name="Profile" component={ProfileScreen} />

      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        // options={() => ({
        //   headerLeft: () => (
        //     <IconButton
        //       onPress={() => navigation.navigate("Auth")}
        //       icon={
        //         <Ionicons
        //           name="chevron-back"
        //           size={24}
        //           color={headerTextColor}
        //         />
        //       }
        //       variant="TEXT"
        //     />
        //   ),
        // })}
      />
      <HomeStack.Screen
        name="Register"
        component={RegisterScreen}
        // options={() => ({
        //   headerLeft: () => (
        //     <IconButton
        //       onPress={() => navigation.navigate("Auth")}
        //       icon={
        //         <Ionicons
        //           name="chevron-back"
        //           size={24}
        //           color={headerTextColor}
        //         />
        //       }
        //       variant="TEXT"
        //     />
        //   ),
        // })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
