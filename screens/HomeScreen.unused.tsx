// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { SafeAreaView, View } from "react-native";
// import MyText from "../components/MyTexts/MyText";
// import { Container } from "../components/containers/Container";

// import LessonList from "../components/LessonList/LessonList";
// import { cn } from "../lib/tailwind";
// import { HomeStackParamList } from "../navigations/HomeStackScreen";

// type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

// const HomeScreen = () => {
//   // const { navigate } = useNavigation<NavigationProp>();

//   // const {
//   //   countryCode,
//   //   pronoun,
//   //   set: setUser,
//   //   id: userId,
//   // } = useStore((state) => state.user);

//   // const { data, loading, error, refetch } = useLessonsWithMyStatusQuery({
//   //   variables: { userId },
//   // });

//   // const { completedLessons, set: setAction } = useStore(
//   //   (state) => state.action
//   // );

//   // const lessons = data?.lessonsWithMyStatus;

//   // const didFirstLesson = completedLessons.length > 0;
//   // const clearAndRedirect = () => {
//   //   setUser({ countryCode: "", pronoun: "", id: "" });
//   //   setAction({ completedLessons: [] });
//   //   navigate("Begin");
//   // };

//   // if (loading) return <Loader isFullScreen />;
//   // if (error)
//   //   return (
//   //     <Error isFullScreen message="Could not fetch lessons. Please retry." />
//   //   );

//   return (
//     <SafeAreaView style={cn`h-full bg-cream flex`}>
//       <View
//         style={cn(
//           "bg-primary w-[600px] -left-[50px] h-[600px] -top-[100px] absolute rounded-full"
//         )}
//       />
//       <View style={cn("mt-12")}>
//         <MyText className="text-white text-center text-xl">
//           Begin your language
//         </MyText>
//         <MyText className="text-white text-center text-xl">journey now.</MyText>
//       </View>

//       {/* Lessons */}
//       <View>
//         <Container>
//           <LessonList />
//         </Container>
//       </View>

//       {/* <MyText className="font-bold text-white">
//             {didFirstLesson ? "CONTINUE WHERE YOU LEFT OFF" : "TRY FREE LESSON"}
//           </MyText> */}

//       {/* <TouchableOpacity
//             style={cn("px-6 py-8 mt-2")}
//             onPress={handleNextLesson}
//           >
//             <View style={cn("relative")}>
//               <View
//                 style={cn("flex flex-row gap-4 items-center top-0 left-0 z-20")}
//               >
//                 <Image
//                   source={lessonThumbnail}
//                   style={cn`flex-1 w-24 h-24 mx-auto rounded-lg`}
//                 />
//                 <View style={cn("flex-1")}>
//                   <MyText className="font-bold text-lg text-brown">
//                     {nextLesson?.title}
//                   </MyText>
//                   <MyText className="text-brown">
//                     {nextLesson?.description}
//                   </MyText>
//                 </View>
//               </View>

//               <View
//                 style={cn(
//                   "bg-white rounded-xl absolute w-3/4 h-7/5 -top-4 right-0 z-10"
//                 )}
//               >
//                 <MyText className="opacity-0">xx</MyText>
//               </View>
//             </View>
//           </TouchableOpacity> */}

//       {/* <TouchableOpacity
//             style={cn("px-6 py-8 mt-2")}
//             onPress={handleNextLesson}
//           >
//             <View style={cn("flex flex-row gap-4 items-center relative")}>
//               <Image
//                 source={lessonThumbnail}
//                 style={cn`flex-1 w-24 h-24 mx-auto rounded-lg`}
//               />
//               <View style={cn("flex-1")}>
//                 <MyText className="font-bold text-lg">
//                   {nextLesson?.title}
//                 </MyText>
//                 <MyText>{nextLesson?.description}</MyText>
//               </View>

//               <View
//                 style={cn(
//                   "bg-white rounded-xl absolute w-3/4 h-full top-0 right-0 -z-10"
//                 )}
//               >
//                 <MyText className="opacity-0">xx</MyText>
//               </View>
//             </View>
//           </TouchableOpacity> */}

//       {/* <Button
//             label="Past Lessons"
//             onPress={() => navigate("Lessons")}
//             size="SMALL"
//             variant="NAKED"
//             className="mt-4 ml-auto px-4"
//             rightIcon={
//               <Entypo
//                 name="arrow-right"
//                 size={ICON_SIZE - 4}
//                 color={primaryColor}
//               />
//             }
//           /> */}
//       {/* <ScrollView style={tw`h-full`} showsVerticalScrollIndicator={false}>
//         <Container>
//           <View style={cn("border-2 rounded-md p-4 my-4 bg-white")}>
//             <MyText className="font-bold text-lg">For Admin</MyText>

//             <MyText className="text-xs">User ID: {userId}</MyText>
//             <MyText className="text-xs">Country: {countryCode}</MyText>
//             <MyText className="text-xs">Pronoun: {pronoun}</MyText>
//             <MyText className="text-xs font-bold">Completed lessons</MyText>
//             {completedLessons.map((lesson, index) => (
//               <MyText key={`lesson-${index}`} className="text-xs">
//                 {lesson}
//               </MyText>
//             ))}

//             <Button
//               label="Clear User Info"
//               onPress={clearAndRedirect}
//               size="SMALL"
//               className="mt-4"
//             />
//           </View>
//         </Container>
//       </ScrollView> */}
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
