import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NavigationScreenProp } from "react-navigation";

export const useIsAuth = () => {
  const navigation: NavigationScreenProp<any, any> = useNavigation();

  const route: RouteProp<{ params: { next: string | null } }> = useRoute();

  // manuall set user in context
  // useEffect(() => {
  //   if (meData?.me && setCurrentUser) setCurrentUser(meData.me as User);
  // }, [meData, setCurrentUser]);

  // // redirect if already logged in
  // useEffect(() => {
  //   if (currentUser) {
  //     const nextScreen = route.params?.next;

  //     if (typeof nextScreen === "string") {
  //       navigation.navigate(nextScreen, {
  //         from: "Login",
  //       });
  //     } else {
  //       navigation.navigate("HomeStack", {
  //         screen: "Auth",
  //       });
  //     }
  //   }
  // }, [currentUser]);
};
