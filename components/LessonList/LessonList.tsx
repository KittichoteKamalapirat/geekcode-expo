import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { StudyHistory, useStore } from "../../lib/store";
import { LessonOverview, lessonOverviews } from "../../constants/lessons.db";
import { cn } from "../../lib/tailwind";
import LessonItem from "./LessonItem";
import MyView from "../MyView";
import MyText from "../MyTexts/MyText";
import Button from "../Buttons/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Mark } from "../../screens/StudyQuestionScreen";
import { DAILY_GOAL_KEY_DATE_FORMAT } from "../../constants";
import { LocalStorage } from "../../lib/localStorage";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Home">;

const LessonList = () => {
  const {
    set: setStudy,
    history,
    isCompleteTodayGoal,
  } = useStore((state) => state.study);
  const isFocused = useIsFocused();
  console.log("isFocused", isFocused);
  const { height } = Dimensions.get("window");
  const [dailyLessons, setDailyLessons] = useState<LessonOverview[]>([]);
  const [dailyMarks, setDailyMarks] = useState<Mark[]>([]);

  const { navigate } = useNavigation<NavigationProp>();

  const getTodayLessons = (history: StudyHistory[]) => {
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

    const overviews = [...sortedToStudyQuestions, ...studiedQuestions];

    const easyQuestions = overviews.filter((o) => o.level === 0).slice(0, 1);
    const mediumQuestions = overviews.filter((o) => o.level === 1).slice(0, 2);
    const hardQuestions = overviews.filter((o) => o.level === 2).slice(0, 1);

    return [...easyQuestions, ...mediumQuestions, ...hardQuestions];
  };

  const handleStudyDailyGoal = () => {
    // select only questions that are not done
    const slugs = dailyLessons
      .filter(
        (d) => dailyMarks.find((mark) => mark.slug === d.slug)?.grade == -1
      )
      .map((o) => o.slug);

    setStudy({ questions: slugs });

    navigate("StudyQuestion");
  };

  const clearStorage = async () => {
    const today = dayjs().format(DAILY_GOAL_KEY_DATE_FORMAT);

    await AsyncStorage.setItem(today, "");
    await AsyncStorage.setItem(LocalStorage.studyHistory, "");
    await AsyncStorage.setItem(LocalStorage.dailyGoals, "");
    const test = await AsyncStorage.getItem(today);
  };
  // set today's goal
  useEffect(() => {
    const setGoal = async (history: StudyHistory[]) => {
      const todayLessons = getTodayLessons(history);
      const today = dayjs().format(DAILY_GOAL_KEY_DATE_FORMAT);

      const dailyGoalStr = await AsyncStorage.getItem(today);
      // already exist, do nothing

      if (dailyGoalStr) {
        const questions: Mark[] = JSON.parse(dailyGoalStr) as Mark[];
        setDailyMarks(questions);

        if (!questions || questions.every((q) => q.grade > -1)) {
          setStudy({ isCompleteTodayGoal: true });
          return;
        }

        const dailyLessons = questions
          .map((q) => lessonOverviews.find((o) => o.slug === q.slug))
          .filter((item) => Boolean(item)) as LessonOverview[];

        setDailyLessons(dailyLessons);

        return;
      }

      const questions: Mark[] = todayLessons.map((o) => ({
        slug: o.slug,
        grade: -1,
      }));
      setDailyMarks(questions);

      AsyncStorage.setItem(today, JSON.stringify(questions));

      const dailyLessons = questions
        .map((q) => lessonOverviews.find((o) => o.slug === q.slug))
        .filter((item) => Boolean(item)) as LessonOverview[];

      if (dailyLessons) setDailyLessons(dailyLessons);
    };

    if (!history) return;

    setGoal(history);
  }, [isFocused]);

  // useEffect(() => {
  //   clearStorage();
  // }, []);
  return (
    <View style={{ height: height * 0.8 }}>
      <FlatList
        style={cn("mt-2")}
        data={lessonOverviews}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />} // so the last item displayed fully
        renderItem={({ item, index }) => (
          <LessonItem lessonOverview={item} key={`${item.slug}-${index}`} />
        )}
        ListHeaderComponent={
          isCompleteTodayGoal ? (
            <MyView className="flex gap-2 bg-accent-primary p-2 rounded-md mb-6">
              <MyText className="text-foreground-primary text-center font-semibold">
                You have completed today's goal 🎯
              </MyText>
            </MyView>
          ) : (
            () => (
              <View>
                <MyView className="flex gap-2 my-2 bg-accent-primary px-4 pt-4 pb-4 rounded-md mb-6">
                  <MyText className="text-foreground-primary text-center text-lg font-semibold mb-2">
                    Complete Daily Goal 🎯
                  </MyText>
                  {dailyLessons.map((overview) => (
                    <LessonItem key={overview.slug} lessonOverview={overview} />
                  ))}

                  <Button
                    label="Clear"
                    className="w-full"
                    onPress={clearStorage}
                  />
                  <View style={cn("mt-2 flex flex-row")}>
                    <Button
                      label="Study 📚"
                      className="w-full"
                      onPress={handleStudyDailyGoal}
                    />
                  </View>
                </MyView>
                <MyText className="text-foreground-primary text-center text-lg font-semibold mb-4">
                  Browse Questions
                </MyText>
              </View>
            )
          )
        }
      />
    </View>
  );
};

export default LessonList;
