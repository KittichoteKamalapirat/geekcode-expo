import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useStore } from "../../lib/store";
import { cn } from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import MyText from "../MyTexts/MyText";
import clsx from "clsx";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

const levelColors = {
  easy: "bg-teal-50 text-teal-600",
  medium: "bg-amber-50 text-amber-600",
  hard: "bg-rose-50 text-rose-500",
};
export type Level = "easy" | "medium" | "hard";
export type LessonOverview = {
  slug: string;
  title: string;
  level: Level;
  isComplete: boolean;
};
const LessonList = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const { height } = Dimensions.get("window");

  const { completedLessons } = useStore((state) => state.action);

  const handleNavigate = (id: string) => navigate("Lesson", { id });

  const lessons: LessonOverview[] = [
    {
      slug: "two_sum",
      title: "Two Sum",
      level: "easy",
      isComplete: completedLessons.includes("two_sum"),
    },
    {
      slug: "contains_duplicate",
      title: "Contains Duplicate",
      level: "easy",
      isComplete: completedLessons.includes("contains_duplicate"),
    },
    {
      slug: "valid_sudoku",
      title: "Valiud Sudoku",
      level: "medium",
      isComplete: completedLessons.includes("valid_sudoku"),
    },
    {
      slug: "minimum_windom_substring",
      title: "Minimum Window Substring",
      level: "hard",
      isComplete: completedLessons.includes("minimum_windom_substring"),
    },
  ];

  return (
    <View style={{ height: height * 0.7 }}>
      <FlatList
        style={cn("bg-neutral-900 mt-2")}
        data={lessons}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />} // so the last item displayed fully
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleNavigate(item.slug)}>
              <View
                style={cn(
                  "flex flex-row justify-between bg-neutral-800 p-4 rounded-lg"
                )}
              >
                {item.isComplete && (
                  <View
                    style={cn(
                      "w-2 h-2 rounded-full bg-orange-400 absolute top-2 -left-3"
                    )}
                  />
                )}

                <MyText className="text-foreground font-bold">
                  {item.title}
                </MyText>

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
                    {item.level}
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
