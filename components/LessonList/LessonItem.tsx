import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import clsx from "clsx";
import { LessonOverview, Level } from "../../constants/lessons.db";
import { useStore } from "../../lib/store";
import { cn } from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import MyText from "../MyTexts/MyText";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

const levelToLabel: Record<Level, string> = {
  0: "Easy",
  1: "Medium",
  2: "Hard",
} as const;

const levelColors: Record<Level, string> = {
  0: "bg-teal-50 text-teal-600",
  1: "bg-amber-50 text-amber-600",
  2: "bg-rose-50 text-rose-500",
};

interface Props {
  lessonOverview: LessonOverview;
}
const LessonItem = ({ lessonOverview }: Props) => {
  const { navigate } = useNavigation<NavigationProp>();

  const { history, set } = useStore((state) => state.study);

  const handleStudyOneQuestion = (slug: string) => {
    set({ questions: [slug] });
    navigate("StudyQuestion");
  };

  const isComplete = history?.find((his) => his.slug === lessonOverview.slug);
  const didWell = isComplete && isComplete?.superMemoItem.efactor > 2.5;

  return (
    <TouchableOpacity
      onPress={() => handleStudyOneQuestion(lessonOverview.slug)}
    >
      <View
        style={cn(
          "flex flex-row justify-between items-start gap-4 bg-background-secondary pl-2 pr-4 py-4 rounded-lg"
        )}
      >
        {/* style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexShrink: 1,
                  }} */}
        <View style={cn("flex flex-row justify-start gap-2 flex-1")}>
          <FontAwesome5
            name={didWell ? "check-circle" : "redo-alt"}
            size={didWell ? 20 : 16}
            color={didWell ? "teal" : "orange"}
            style={cn(isComplete ? "" : "opacity-0")}
          />

          <MyText className="text-foreground-primary font-semibold flex-1">
            {lessonOverview.title}
          </MyText>
        </View>

        <View
          style={cn(
            "px-2 py-[2px] rounded-full",
            levelColors[lessonOverview.level]
          )}
        >
          <MyText
            className={clsx(
              levelColors[lessonOverview.level],
              "text-xs font-semibold"
            )}
          >
            {levelToLabel[lessonOverview.level]}
          </MyText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LessonItem;
