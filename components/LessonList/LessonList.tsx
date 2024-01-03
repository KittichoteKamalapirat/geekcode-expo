import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useLessonsWithMyStatusQuery } from "../../graphql/generated/graphql";
import { useCreateLesson } from "../../hook/useCreateLesson";
import { useStore } from "../../lib/store";
import { cn } from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import Loader from "../Loader";
import MyText from "../MyTexts/MyText";
import Error from "../layouts/Error";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

const LessonList = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const { height } = Dimensions.get("window");

  const { countryCode, pronoun, id: userId } = useStore((state) => state.user);
  const { data, loading, error } = useLessonsWithMyStatusQuery({
    variables: { userId },
  });

  const lessons = data?.lessonsWithMyStatus;
  // const [isCreatingLesson, setIsCreatingLesson] = useState<boolean>(false);
  const { createLesson, isCreatingLesson } = useCreateLesson(userId);

  const handleCreateLesson = async (lessonTab: string) => {
    try {
      await createLesson({
        userId,
        tabName: lessonTab,
        pronoun,
        country: countryCode,
      });

      // navigate inside the callback
    } catch (error) {}
  };

  const handleNavigate = (id: string, sheetTab: string) =>
    navigate("Lesson", { sheetTab, id });
  if (isCreatingLesson) return <Loader label="Preparing your lesson" />;
  if (loading) return <Loader />;
  if (error)
    return (
      <Error isFullScreen message="Could not fetch lessons. Please retry." />
    );

  return (
    <View style={{ height: height * 0.7 }}>
      <FlatList
        style={cn("bg-white rounded-lg p-4 mt-4")}
        data={data?.lessonsWithMyStatus}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />} // so the last item displayed fully
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                item.isCreated
                  ? () => handleNavigate(item.id || "", item.tab)
                  : () => handleCreateLesson(item.tab)
              }
            >
              <View>
                {item.isCreated && (
                  <View
                    style={cn(
                      "w-2 h-2 rounded-full bg-primary absolute top-2 -left-3"
                    )}
                  />
                )}

                <MyText className="text-foreground font-bold">
                  {item.title}
                </MyText>
                <MyText className="text-foreground text-sm">
                  {item.description}
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
