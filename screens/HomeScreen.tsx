import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, View } from "react-native";
import Button from "../components/Buttons/Button";
import LessonList from "../components/LessonList/LessonList";
import MyText from "../components/MyTexts/MyText";
import { Container } from "../components/containers/Container";
import ViewWithFooter from "../components/containers/ViewWithFooter";
import { LessonOverview, lessonOverviews } from "../constants/lessons.db";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";
import { HomeStackParamList } from "../navigations/HomeStackScreen";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Home">;

const HomeScreen = () => {
  const { set: setStudy, history } = useStore((state) => state.study);
  const { navigate } = useNavigation<NavigationProp>();

  const handleStudyManyQuestion = () => {
    const sortedHistory = [...history].sort(
      (a, b) =>
        new Date(a.isoDueDate).valueOf() - new Date(b.isoDueDate).valueOf() ||
        a.superMemoItem.efactor - a.superMemoItem.efactor
    );

    const studiedQuestions = sortedHistory.map((h) =>
      lessonOverviews.find((o) => o.slug === h.slug)
    ) as LessonOverview[];
    const toStudyQuestions = lessonOverviews.filter(
      (o) => !history.some((h) => h.slug === o.slug)
    );

    const sortedToStudyQuestions = [...toStudyQuestions].sort(
      (a, b) => a.level - b.level
    );

    const slugs = [...toStudyQuestions, ...studiedQuestions].map((q) => q.slug);

    setStudy({ questions: slugs });
    navigate("StudyQuestion");
  };

  return (
    <SafeAreaView style={cn`h-full bg-background-primary flex`}>
      <ViewWithFooter
        className="h-full bg-black"
        footer={
          <View
            style={cn("flex flex-row items-center gap-4 mx-auto mt-4 mx-4")}
          >
            <Button
              label="Study cards"
              className="w-full"
              onPress={handleStudyManyQuestion}
            />
          </View>
        }
      >
        <View style={cn("mt-4")}>
          <MyText className="text-white text-center text-xl">
            Practice DSA everyday
          </MyText>
        </View>

        {/* Lessons */}

        <Container>
          <LessonList />
        </Container>
      </ViewWithFooter>
    </SafeAreaView>
  );
};

export default HomeScreen;
