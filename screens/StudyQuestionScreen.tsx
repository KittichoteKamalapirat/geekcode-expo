import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../navigations/HomeStackScreen";

import { useEffect, useRef, useState } from "react";

import { SuperMemoGrade, SuperMemoItem } from "supermemo";
import FlashCard from "../components/FlashCard/FlashCard";
import OneSideCardWithParent from "../components/FlashCard/OneSideCardWithParent";
import MyText from "../components/MyTexts/MyText";
import { FLASHCARD_MARGIN } from "../constants";
import { Drill, Lesson, lessons } from "../constants/lessons.db";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";
import { practiceSr } from "../util/spaceRep";
import Loader from "../components/Loader";
import { SafeAreaView } from "react-native-safe-area-context";

const SCROLL_OFFSET_MESSAGE_NUM = 3;

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Lesson">;

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

  const ref = useRef();
  const screenW = Dimensions.get("window").width;
  const screenH = Dimensions.get("window").height;
  const flatListRef = useRef<FlatList>(null);
  const [lessonIsComplete, setLessonIsComplete] = useState<boolean>(false);

  const route: RouteProp<{ params: { sheetTab: string; id: string } }> =
    useRoute();
  const { set: setAction, completedLessons } = useStore(
    (state) => state.action
  );

  const {
    set: setStudy,
    history,
    questions,
  } = useStore((state) => state.study);

  const { id: userId } = useStore((state) => state.user);

  const lessonSlug = questions.length && questions[0];

  console.log("questions", questions);
  console.log("lessonSlug", lessonSlug);

  const { height } = Dimensions.get("window");

  const lesson = lessons.find((lesson) => lesson.overview.slug === lessonSlug);

  const handleViewableItemsChanged = (x: any) => {
    console.log("Visible items are", x);
    console.log("Changed in this iteration");
  };

  const flashcard: SuperMemoItem = {
    interval: 0,
    repetition: 0,
    efactor: 2.5,
  };

  const handlePractice = (slug: string, grade: SuperMemoGrade) => {
    // 1. update history
    // 2. pop the item from questions list
    const { superMemoItem, isoDueDate } = practiceSr(flashcard, grade);

    const index = history.findIndex(
      (item) => item.slug === lesson?.overview.slug
    );
    const copy = [...history];
    const newItem = {
      slug: slug,
      superMemoItem,
      isoDueDate,
    };
    if (index !== -1) {
      copy[index] = newItem;
    } else {
      copy.push(newItem);
    }
    const newQuestions = [...questions];
    newQuestions.shift(); // remove first item
    setStudy({ history: copy, questions: newQuestions });
    if (newQuestions.length === 0) {
      navigate("Home");
    } else {
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 }); // scroll to header
    }
  };

  if (questions.length === 0) navigate("Home");
  if (!lesson) return <Loader />;

  useEffect(() => {
    setOptions({ title: lesson.overview.title });
  }, [lesson]);

  return (
    <SafeAreaView style={cn("bg-neutral-900")}>
      <FlatList
        style={{
          height: height * 1,
        }}
        // onViewableItemsChanged={handleViewableItemsChanged}
        // viewabilityConfig={{
        //   // itemVisiblePercentThreshold: 100,
        //   viewAreaCoveragePercentThreshold: 100,
        // }}

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
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 16,
              paddingRight: FLASHCARD_MARGIN * 2,
            }}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        ref={flatListRef}
        renderItem={({ item, index }) => {
          return (
            <FlashCard
              front={`${index + 1}.${item.question}`}
              back={item.answer}
            />
          );
        }}
        ListHeaderComponent={() => (
          <OneSideCardWithParent hasPaddingRight>
            <View style={cn("flex flex-col-reverse")}>
              <MyText>{lesson.description}</MyText>
            </View>
          </OneSideCardWithParent>
        )}
        ListFooterComponent={() => (
          <OneSideCardWithParent hasPaddingLeft isHeader={false}>
            <View style={cn("flex flex-col-reverse gap-2")}>
              {grades.map((grade) => (
                <TouchableOpacity
                  onPress={() =>
                    handlePractice(lesson.overview.slug, grade.score)
                  }
                >
                  <View style={cn("bg-neutral-800 rounded-md p-4")}>
                    <MyText className="text-center">
                      {grade.emoji} {grade.text}
                    </MyText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </OneSideCardWithParent>
        )}
      />
    </SafeAreaView>
  );
};

export default StudyQuestionScreen;
