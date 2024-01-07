import { AntDesign } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
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
import BottomModal from "../components/BottomModal";
import FlashCard from "../components/FlashCard/FlashCard";
import OneSideCardWithParent from "../components/FlashCard/OneSideCardWithParent";
import Loader from "../components/Loader";
import MyText from "../components/MyTexts/MyText";
import ProgressBar from "../components/ProgressBar";
import { FLASHCARD_MARGIN } from "../constants";
import { Drill, lessons } from "../constants/lessons.db";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";
import { practiceSr } from "../util/spaceRep";
import { useIsFirstLaunch } from "../util/useIsFirstLaunch";
import BottomSheet, { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { EventProvider } from "react-native-outside-press";
import MyModal from "../components/Modal";
import MyView from "../components/MyView";

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

  const lesson = lessons.find((lesson) => lesson.overview.slug === lessonSlug);

  const flashcard: SuperMemoItem = {
    interval: 0,
    repetition: 0,
    efactor: 2.5,
  };

  const [modalVisible, setModalVisible] = useState(false);

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

  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  if (questions.length === 0) navigate("Home");
  if (!lesson) return <Loader />;

  const questionsNum = lesson.drills.length;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const positionX = e.nativeEvent.contentOffset.x;
    const currentStep = Math.ceil(positionX / screenW);
    if (currentStep === 0 || currentStep > questionsNum) {
      setIsDrill(false);
    } else {
      setIsDrill(true);
    }
    setStep(currentStep);
  };
  useEffect(() => {
    setOptions({ title: lesson.overview.title });
  }, [lesson]);

  return (
    <SafeAreaView style={cn("bg-neutral-900")}>
      <AntDesign
        name="questioncircleo"
        size={24}
        color="white"
        onPress={() => setModalVisible(true)}
        style={cn("absolute top-4 right-4 z-50")}
      />
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
        keyExtractor={(item, index) => String(index)}
        ref={flatListRef}
        renderItem={({ item, index }) => {
          return (
            <MyView>
              <MyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              >
                <MyText className="text-lg font-semibold">
                  {lesson.overview.title}
                </MyText>
                <MyText className="mt-4">{lesson.description}</MyText>
              </MyModal>
              <FlashCard
                front={`${index + 1}.${item.question}`}
                back={item.answer}
              />
            </MyView>
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
          <OneSideCardWithParent
            hasPaddingLeft
            isHeader={false}
            isFirstLaunch={isFirstLaunch}
          >
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
