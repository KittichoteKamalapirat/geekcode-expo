import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useStore } from "../../lib/store";
import { cn } from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import MyText from "../MyTexts/MyText";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

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
        style={cn("bg-black rounded-lg p-4 mt-4")}
        data={lessons}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />} // so the last item displayed fully
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleNavigate(item.slug)}>
              <View style={cn("flex flex-row justify-between")}>
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
                <MyText className="text-foreground text-sm">
                  {item.level}
                </MyText>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LessonList;
