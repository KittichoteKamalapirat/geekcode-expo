// import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { SafeAreaView } from "react-native-safe-area-context";
// import MyText from "../components/MyTexts/MyText";
// import { Container } from "../components/containers/Container";
// import {
//   useCreateLessonMessagesMutation,
//   useLessonsQuery,
//   useMyDynamicLessonsQuery,
// } from "../graphql/generated/graphql";
// import { cn } from "../lib/tailwind";
// import { HomeStackParamList } from "../navigations/HomeStackScreen";
// import Loader from "../components/Loader";
// import Error from "../components/layouts/Error";
// import { useStore } from "../lib/store";
// import { useState } from "react";

// type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

// const LessonsScreen = () => {
//   const { navigate } = useNavigation<NavigationProp>();

//   const { height } = Dimensions.get("window");

//   const { countryCode, pronoun, id: userId } = useStore((state) => state.user);

//   const [isCreatingLesson, setIsCreatingLesson] = useState<boolean>(false);
//   const [createLessonMessages] = useCreateLessonMessagesMutation();

//   const {
//     data: myLessonsData,
//     loading: myLessonsLoading,
//     error: meLessonsError,
//   } = useMyDynamicLessonsQuery({
//     variables: { userId },
//   });

//   const { data, loading, error } = useLessonsQuery();

//   const handleCreateLesson = async (lessonTab: string) => {
//     setIsCreatingLesson(true);
//     try {
//       const result = await createLessonMessages({
//         variables: {
//           userId,
//           input: {
//             lessonTabName: lessonTab,
//             userPronoun: pronoun,
//             userCountry: countryCode,
//           },
//         },
//       });

//       if (
//         result.data?.createLessonMessages.errors &&
//         result.data?.createLessonMessages.errors.length > 0
//       ) {
//         console.log("error creating lesson");
//         setIsCreatingLesson(false);
//         return;
//       }
//       setIsCreatingLesson(false);
//       handleNavigate(lessonTab);
//     } catch (error) {
//       setIsCreatingLesson(false);
//     }
//   };

//   console.log("error", error);
//   console.log("meLessonsError", meLessonsError);
//   const handleNavigate = (sheetTab: string) => navigate("Lesson", { sheetTab });
//   if (isCreatingLesson)
//     return <Loader isFullScreen label="Preparing your lesson" />;
//   if (loading || myLessonsLoading) return <Loader isFullScreen />;
//   if (error || meLessonsError)
//     return (
//       <Error isFullScreen message="Could not fetch lessons. Please retry." />
//     );

//   return (
//     <SafeAreaView style={cn`h-full bg-cream`}>
//       <View style={cn("bg-secondary w-full h-[400px] -top-[100px] absolute")} />
//       <Container>
//         <MyText className="text-2xl text-white">French</MyText>
//         <View style={cn({ height: height * 0.7 }, "mt-4")}>
//           <FlatList
//             style={cn("bg-white rounded-lg p-4 mt-4")}
//             data={data?.lessons}
//             keyExtractor={(item) => item.title}
//             ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
//             renderItem={({ item }) => {
//               const lessonCreated =
//                 myLessonsData?.myDynamicLessons.lessons.some(
//                   (lessonTab) => lessonTab === item.tab
//                 );

//               return (
//                 <TouchableOpacity
//                   onPress={
//                     lessonCreated
//                       ? () => handleNavigate(item.tab)
//                       : () => handleCreateLesson(item.tab)
//                   }
//                 >
//                   <View>
//                     {lessonCreated && (
//                       <View
//                         style={cn(
//                           "w-2 h-2 rounded-full bg-primary absolute top-2 -left-3"
//                         )}
//                       />
//                     )}

//                     <MyText className="text-foreground font-bold">
//                       {item.title}
//                     </MyText>
//                     <MyText className="text-foreground text-sm">
//                       {item.description}
//                     </MyText>
//                   </View>
//                 </TouchableOpacity>
//               );
//             }}
//           />
//         </View>
//       </Container>
//     </SafeAreaView>
//   );
// };

// export default LessonsScreen;
