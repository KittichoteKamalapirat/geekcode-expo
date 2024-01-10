import { AntDesign } from "@expo/vector-icons";

import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  View,
} from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../navigations/HomeStackScreen";

import { useEffect, useMemo, useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { SuperMemoGrade, SuperMemoItem } from "supermemo";
import FlashCard from "../components/FlashCard/FlashCard";
import FooterCard from "../components/FlashCard/FooterCard";
import Loader from "../components/Loader";
import MyModal from "../components/Modal";
import MyText from "../components/MyTexts/MyText";
import MyView from "../components/MyView";
import ProgressBar from "../components/ProgressBar";
import { DAILY_GOAL_KEY_DATE_FORMAT, FLASHCARD_MARGIN } from "../constants";
import { Drill, lessons } from "../constants/lessons.db";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";
import { practiceSr } from "../util/spaceRep";
import { useIsFirstLaunch } from "../util/useIsFirstLaunch";
import HeaderCard from "../components/FlashCard/HeaderCard";
import { LocalStorage } from "../lib/localStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { set } from "react-hook-form";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Lesson">;

export interface Mark {
  slug: string;
  grade: number;
}
interface GradeDisplay {
  score: SuperMemoGrade;
  emoji: string;
  text: string;
}

const grades: GradeDisplay[] = [
  {
    score: 0,
    emoji: "🚫",
    text: "Didn't understand",
  },
  {
    score: 1,
    emoji: "🤔",
    text: "Barely understood",
  },
  {
    score: 2,
    emoji: "🤨",
    text: "Struggled to understand",
  },
  {
    score: 3,
    emoji: "😕",
    text: "Somewhat understood",
  },
  {
    score: 4,
    emoji: "👍",
    text: "Understood well",
  },
  {
    score: 5,
    emoji: "🌟",
    text: "Understood perfectly",
  },
];
const StudyQuestionScreen = () => {
  const { navigate, setOptions } = useNavigation<NavigationProp>();
  const isFirstLaunch = useIsFirstLaunch();

  const [isDrill, setIsDrill] = useState<boolean>(false);

  const screenW = Dimensions.get("window").width;

  const flatListRef = useRef<FlatList>(null);

  const route: RouteProp<{ params: { sheetTab: string; id: string } }> =
    useRoute();

  const {
    set: setStudy,
    history,
    questions,
  } = useStore((state) => state.study);

  const lessonSlug = questions.length && questions[0];

  const { height } = Dimensions.get("window");
  const [step, setStep] = useState(0);

  const lesson = lessons.find((l) => {
    return l.overview?.slug === lessonSlug;
  });

  const flashcard: SuperMemoItem = {
    interval: 0,
    repetition: 0,
    efactor: 2.5,
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handlePractice = async (slug: string, grade: SuperMemoGrade) => {
    if (!history) return;
    // 1. update history
    // 2. pop the item from questions list
    const { superMemoItem, isoDueDate } = practiceSr(flashcard, grade);

    const index = history.findIndex(
      (item) => item.slug === lesson?.overview.slug
    );
    const newHistory = [...history];
    const newItem = {
      slug: slug,
      superMemoItem,
      isoDueDate,
    };
    if (index !== -1) {
      newHistory[index] = newItem;
    } else {
      newHistory.push(newItem);
    }
    const newQuestions = [...questions];
    newQuestions.shift(); // remove first item
    setStudy({ history: newHistory, questions: newQuestions });
    // update localstorage history

    await AsyncStorage.setItem(
      LocalStorage.studyHistory,
      JSON.stringify(newHistory)
    );
    // update localstorage history ends

    // mark daily questions
    const today = dayjs().format(DAILY_GOAL_KEY_DATE_FORMAT);
    const dailyGoalStr = await AsyncStorage.getItem(today);

    console.log("11");
    // not first question
    if (!dailyGoalStr) return;
    const dailyGoal = JSON.parse(dailyGoalStr) as Mark[];
    const matchIndex = dailyGoal.findIndex((d) => d.slug === slug);
    dailyGoal[matchIndex].grade = grade;

    console.log("22");
    await AsyncStorage.setItem(today, JSON.stringify(dailyGoal));
    console.log("33");
    // mark daily questions done

    if (newQuestions.length === 0) {
      setStudy({ isCompleteTodayGoal: true });
      navigate("Home");
    } else {
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 }); // scroll to header
    }
  };

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  useEffect(() => {
    if (!lesson) return;
    setOptions({ title: lesson.overview.title });
  }, [lesson]);

  // if (questions.length === 0) navigate("Home"); // redirect in handlePractice
  if (!lesson) return <Loader />;

  const questionsNum = lesson.drills.length;

  const handleScroll = async (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const positionX = e.nativeEvent.contentOffset.x;
    const currentStep = Math.ceil(positionX / screenW);
    AsyncStorage.setItem(LocalStorage.hasSwipedCard, "true");
    if (currentStep === 0 || currentStep > questionsNum) {
      setIsDrill(false);
    } else {
      setIsDrill(true);
    }
    setStep(currentStep);
  };

  return (
    <SafeAreaView style={cn("bg-background-primary")}>
      {step !== 0 && (
        <AntDesign
          name="questioncircleo"
          size={20}
          color="white"
          onPress={() => setModalVisible(true)}
          style={cn("absolute top-4 right-4 z-50")}
        />
      )}

      {isDrill && (
        <ProgressBar
          step={step}
          steps={questionsNum}
          height={10}
          className="mx-4"
        />
      )}

      <FlatList
        style={{
          height: height * 1,
          // flexWrap: "wrap",
        }}
        // onViewableItemsChanged={handleViewableItemsChanged}
        // viewabilityConfig={{
        //   // itemVisiblePercentThreshold: 100,
        //   viewAreaCoveragePercentThreshold: 100,
        // }}
        keyExtractor={(item, index) => `drill-${index}`}
        data={lesson?.drills as Drill[]}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: FLASHCARD_MARGIN,
          display: "flex",
        }}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={screenW}
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={screenW / 2} // random value so it's not too slow and not called too many times
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 16,
              paddingRight: FLASHCARD_MARGIN * 2,
            }}
          />
        )}
        ref={flatListRef}
        renderItem={({ item, index }: { item: Drill; index: number }) => {
          return (
            <MyView key={index}>
              <MyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              >
                <MyText className="text-lg font-semibold">
                  {lesson.overview.title}
                </MyText>
                <MyText className="mt-4">{lesson.description}</MyText>
              </MyModal>
              <FlashCard front={item.question} back={item.answer} />
            </MyView>
          );
        }}
        ListHeaderComponent={() => (
          <HeaderCard title={lesson.overview.title}>
            <View style={cn("flex flex-col-reverse")}>
              <MyText className="text-lg">{lesson.description}</MyText>
            </View>
          </HeaderCard>
        )}
        ListFooterComponent={() => (
          <FooterCard>
            <View style={cn("flex flex-col-reverse gap-2")}>
              {grades.map((grade) => (
                <TouchableOpacity
                  onPress={async () =>
                    await handlePractice(lesson.overview.slug, grade.score)
                  }
                >
                  <View style={cn("bg-background-secondary rounded-md p-4")}>
                    <MyText className="text-center">
                      {grade.emoji} {grade.text}
                    </MyText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </FooterCard>
        )}
      />
    </SafeAreaView>
  );
};

export default StudyQuestionScreen;
