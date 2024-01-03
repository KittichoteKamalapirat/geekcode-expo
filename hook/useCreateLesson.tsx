import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

import { HomeStackParamList } from "../navigations/HomeStackScreen";
import {
  useCreateLessonMutation,
  useLessonsWithMyStatusQuery,
} from "../graphql/generated/graphql";

interface Props {
  tabName: string;
  userId: string;
  pronoun: string;
  country: string;
}

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Register">;

export const useCreateLesson = (userId: string) => {
  const [isCreatingLesson, setIsCreatingLesson] = useState<boolean>(false);
  const { navigate } = useNavigation<NavigationProp>();
  const [createLessonMessages] = useCreateLessonMutation();
  const { refetch } = useLessonsWithMyStatusQuery({
    variables: { userId },
  });

  const createLesson = async ({ userId, tabName, pronoun, country }: Props) => {
    setIsCreatingLesson(true);
    try {
      const result = await createLessonMessages({
        variables: {
          input: {
            tabName,
            userId,
            pronoun,
            country: country,
          },
        },
      });

      if (
        result.data?.createLesson.errors &&
        result.data?.createLesson.errors.length > 0
      ) {
        console.log("error creating lesson");
        setIsCreatingLesson(false);
        return;
      }
      setIsCreatingLesson(false);
      refetch();
      navigate("Lesson", {
        id: result.data?.createLesson.lesson?.id || "",
        sheetTab: tabName,
      });
    } catch (error) {
      setIsCreatingLesson(false);
    }
  };

  return { isCreatingLesson, createLesson };
};
