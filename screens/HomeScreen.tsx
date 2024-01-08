import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import Button from "../components/Buttons/Button";
import LessonList from "../components/LessonList/LessonList";
import MyText from "../components/MyTexts/MyText";
import { Container } from "../components/containers/Container";
import { LessonOverview, lessonOverviews } from "../constants/lessons.db";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";
import { HomeStackParamList } from "../navigations/HomeStackScreen";
import MyView from "../components/MyView";
import LessonItem from "../components/LessonList/LessonItem";

const HomeScreen = () => {
  const { set: setStudy, history } = useStore((state) => state.study);

  // const handleStudyManyQuestion = () => {
  //   const sortedHistory = [...history].sort(
  //     (a, b) =>
  //       new Date(a.isoDueDate).valueOf() - new Date(b.isoDueDate).valueOf() ||
  //       a.superMemoItem.efactor - a.superMemoItem.efactor
  //   );

  //   const studiedQuestions = sortedHistory.map((h) =>
  //     lessonOverviews.find((o) => o.slug === h.slug)
  //   ) as LessonOverview[];
  //   const toStudyQuestions = lessonOverviews.filter(
  //     (o) => !history.some((h) => h.slug === o.slug)
  //   );

  //   const sortedToStudyQuestions = [...toStudyQuestions].sort(
  //     (a, b) => a.level - b.level
  //   );

  //   const slugs = [...sortedToStudyQuestions, ...studiedQuestions].map(
  //     (q) => q.slug
  //   );

  //   setStudy({ questions: slugs });

  //   navigate("StudyQuestion");
  // };

  return (
    <SafeAreaView style={cn`h-full bg-background-primary flex`}>
      <Container>
        <View style={cn("mt-2")}>
          <MyText className="text-foreground-primary text-center text-lg font-semibold mb-2">
            Practice DSA everyday 🔥
          </MyText>
        </View>

        {/* Lessons */}
        <LessonList />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
