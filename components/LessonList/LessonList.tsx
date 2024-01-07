import { FontAwesome5 } from "@expo/vector-icons";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useStore } from "../../lib/store";
import { cn } from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import MyText from "../MyTexts/MyText";
import clsx from "clsx";
import { Level, lessonOverviews } from "../../constants/lessons.db";

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

const LessonList = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const { height } = Dimensions.get("window");

  // const { completedLessons } = useStore((state) => state.action);
  const { history, set } = useStore((state) => state.study);
  console.log("history", history);

  const handleStudyOneQuestion = (slug: string) => {
    set({ questions: [slug] });
    navigate("StudyQuestion");
  };

  return (
    <View style={{ height: height * 0.7 }}>
      <FlatList
        style={cn("mt-2")}
        data={lessonOverviews}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />} // so the last item displayed fully
        renderItem={({ item }) => {
          const isComplete = history.find((his) => his.slug === item.slug);
          const didWell = isComplete && isComplete?.superMemoItem.efactor > 2.5;

          console.log("isComplete", isComplete);
          return (
            <TouchableOpacity onPress={() => handleStudyOneQuestion(item.slug)}>
              <View
                style={cn(
                  "flex flex-row justify-between bg-background-secondary pl-2 pr-4 py-4 rounded-lg"
                )}
              >
                <View style={cn("flex flex-row justify-start gap-2")}>
                  <FontAwesome5
                    name={didWell ? "check-circle" : "redo-alt"}
                    size={20}
                    color={didWell ? "teal" : "orange"}
                    style={cn(isComplete ? "block" : "opacity-0")}
                  />

                  <MyText className="text-foreground-primary font-bold">
                    {item.title}
                  </MyText>
                </View>

                <View
                  style={cn(
                    "px-2 py-[2px] rounded-full",
                    levelColors[item.level]
                  )}
                >
                  <MyText
                    className={clsx(
                      levelColors[item.level],
                      "text-xs font-semibold"
                    )}
                  >
                    {levelToLabel[item.level]}
                  </MyText>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LessonList;
