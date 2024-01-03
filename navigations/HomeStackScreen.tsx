import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";
import BeginScreen from "../screens/BeginScreen";
import CountryFormScreen from "../screens/CountryFormScreen";
import LessonScreen from "../screens/LessonScreen";
import PronounFormScreen from "../screens/PronounFormScreen";
import TellUsScreen from "../screens/TellUsScreen";
import { headerBgColor, headerTextColor, secondaryColor } from "../theme/style";
import { ObjectValues } from "../types";
import { useIsFirstLaunch } from "../util/useIsFirstLaunch";
import IconButton from "../components/Buttons/IconButton";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStack = createNativeStackNavigator();

const HOME_STACK_SCREENS = {
  HOME: "Home",
  BEGIN: "Begin",
  TELL_US: "TellUs",
  PRONOUN_FORM: "PronounForm",
  NATIONALITY_FORM: "NationalityForm",
  LESSON: "Lesson",
  AUTH: "Auth",
  LOGIN: "Login",
  REGISTER: "Register",
  ONBOARDING: "Onboarding",
  // LESSONS: "Lessons",
} as const;

type HomeStackScreens = ObjectValues<typeof HOME_STACK_SCREENS>;

export type HomeStackParamList = {
  Home: undefined;
  Auth: undefined;
  Begin: undefined;
  TellUs: undefined;
  PronounForm: undefined;
  NationalityForm: undefined;
  Profile: undefined;

  Lesson: { sheetTab: string; id: string };
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
        name="Begin"
        component={BeginScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TellUs"
        component={TellUsScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="PronounForm"
        component={PronounFormScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="NationalityForm"
        component={CountryFormScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "left",
          headerTitle: "",
          headerBackVisible: false,

          headerStyle: {
            backgroundColor: "transparent",
            // shadowColor: "transparent",
            // opacity: 0,
          },
          headerRight: ({}) => (
            <IconButton
              icon={
                <MaterialIcons name="account-circle" size={28} color="white" />
              }
              variant="TEXT"
              onPress={() => navigation.navigate("Profile")}
            />
          ),
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

      <HomeStack.Screen
        name="Lesson"
        component={LessonScreen}
        options={{
          headerTitleAlign: "left",
          headerTintColor: "white",
          headerShadowVisible: false, // hide the bottom border
          headerStyle: {
            backgroundColor: secondaryColor,
          },
          headerBackVisible: true,
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
