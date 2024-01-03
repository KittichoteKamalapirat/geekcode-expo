import { Feather } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { Dimensions, FlatList, View } from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MyText from "../components/MyTexts/MyText";
import { Container } from "../components/containers/Container";
import { Message, useLessonQuery } from "../graphql/generated/graphql";

import { HomeStackParamList } from "../navigations/HomeStackScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useRef, useState } from "react";
import IconButton from "../components/Buttons/IconButton";
import Loader from "../components/Loader";
import MessageLog from "../components/MessageLog";
import Error from "../components/layouts/Error";
import { ICON_SIZE, PAUSE_LABEL } from "../constants";

import clsx from "clsx";
import ViewWithFooter from "../components/containers/ViewWithFooter";
import usePlaySequentialAudioSavePrev from "../hook/usePlaySequentialAudioSavePrev";
import { LocalStorage } from "../lib/localStorage";
import { useStore } from "../lib/store";
import { cn } from "../lib/tailwind";

const SCROLL_OFFSET_MESSAGE_NUM = 3;

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Lesson">;

const LessonScreen = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const flatListRef = useRef<FlatList>(null);
  const [lessonIsComplete, setLessonIsComplete] = useState<boolean>(false);

  const route: RouteProp<{ params: { sheetTab: string; id: string } }> =
    useRoute();
  const { set: setAction, completedLessons } = useStore(
    (state) => state.action
  );

  const { id: userId } = useStore((state) => state.user);

  const sheetTab = route.params.sheetTab;
  const lessonId = route.params.id;

  const { height } = Dimensions.get("window");

  const handleCompleteLesson = () => {
    const newCompletedLessons = [...completedLessons, sheetTab];
    console.log("newCompletedLessons", newCompletedLessons);
    setAction({ completedLessons: newCompletedLessons });
    AsyncStorage.setItem(
      LocalStorage.completedLessons,
      JSON.stringify(newCompletedLessons)
    );

    navigate("Home");
  };

  const {
    data: lessonData,
    loading: lessonLoading,
    error: lessonError,
  } = useLessonQuery({
    variables: { id: lessonId },
  });

  const lesson = lessonData?.lesson;

  const audioFiles = useMemo(
    () =>
      lesson?.messages.map((message) => ({
        url: message.aud.url,
        content: message.content,
      })) || [],
    [lessonLoading]
  );

  const {
    playAllAudios,
    playAllFromIndex,
    isPlaying,
    shutUp,
    currAudioIndex,
    isUnloading,
    playPrev,
    playNext,
    disableAllButtons,
    disableNextUiButton: disableNext,
    disablePrevUiButton: disablePrev,
  } = usePlaySequentialAudioSavePrev({
    filePaths: audioFiles,
  });

  const playNextAudio = () => {
    // const prevItem = audioFiles[currAudioIndex + 1];
    // const prevNonPauseItemIndex =
    //   prevItem.content === PAUSE_LABEL
    //     ? currAudioIndex + 2 // there won't be 2 consecutive pauses
    //     : currAudioIndex + 1;
    // playAllFromIndex(prevNonPauseItemIndex);
    playNext();
  };
  // if (!signupComplete) return <MyText>Error getting user info</MyText>;

  useEffect(() => {
    if (isPlaying && currAudioIndex === audioFiles.length - 1) {
      setLessonIsComplete(true);
    }
  }, [isPlaying, currAudioIndex]);

  useEffect(() => {
    // if (currAudioIndex < SCROLL_OFFSET_MESSAGE_NUM) return;
    // flatListRef.current?.scrollToIndex({
    //   index: currAudioIndex - SCROLL_OFFSET_MESSAGE_NUM,
    //   animated: true,
    // });

    const messagesNum = lessonData?.lesson.messages.length || 0;
    // when almost last mesage => scroll a lot
    // if (messagesNum - currAudioIndex < 10) {
    //   flatListRef.current?.scrollToIndex({
    //     index: currAudioIndex,
    //     animated: true,
    //     viewPosition: 0,
    //     // viewOffset: 100,
    //   });
    // } else {
    //   flatListRef.current?.scrollToIndex({
    //     index: currAudioIndex,
    //     animated: true,
    //     viewPosition: 0.5,
    //   });
    // }
    // console.log("scrolllllllllllllllllllllllllllllllll");
    flatListRef.current?.scrollToIndex({
      index: currAudioIndex,
      animated: true,
      viewPosition: 0,
      // viewOffset: 0,
    });
  }, [currAudioIndex]);

  if (lessonLoading) return <Loader isFullScreen />;
  if (lessonError)
    return (
      <Error
        isFullScreen
        message={`Could not fetch the lesson ${sheetTab}. Please retry.`}
      />
    );

  return (
    <ViewWithFooter
      className="h-full bg-cream"
      footer={
        <View style={cn("flex flex-row items-center gap-6 mx-auto mt-4")}>
          <IconButton
            variant="NAKED"
            onPress={playPrev}
            icon={<Feather name="skip-back" size={ICON_SIZE} color="#6F3D22" />}
            disabled={isUnloading || disablePrev}
          />
          <IconButton
            variant="NAKED"
            onPress={isPlaying ? shutUp : playAllAudios}
            disabled={disableAllButtons}
            icon={
              <AntDesign
                name={isPlaying ? "pausecircle" : "play"}
                size={ICON_SIZE + 18}
                color="#FEB431"
              />
            }
          />

          <IconButton
            variant="NAKED"
            onPress={playNextAudio}
            icon={
              <Feather name="skip-forward" size={ICON_SIZE} color="#6F3D22" />
            }
            disabled={isUnloading || disableNext}
          />
        </View>
      }
    >
      <View style={cn("bg-secondary w-full h-[400px] -top-[100px] absolute")} />
      <Container>
        <MyText className="text-2xl text-white mt-4">{lesson?.title}</MyText>
        <View
          style={{
            flex: 1,
            height: height * 0.6,
          }}
        >
          <FlatList
            style={cn("bg-white rounded-lg mt-4")}
            data={
              lesson?.messages.slice(
                0,
                currAudioIndex >= 0
                  ? currAudioIndex + SCROLL_OFFSET_MESSAGE_NUM
                  : -1 // + 10 because 1 doesn't work
              ) as Message[]
            }
            // data={lesson?.messages}
            onScrollToIndexFailed={(error) => {
              flatListRef.current?.scrollToOffset({
                offset: error.averageItemLength * error.index,
                animated: true,
              });

              setTimeout(() => {
                if (
                  lesson?.messages.length !== 0 &&
                  flatListRef.current !== null
                ) {
                  flatListRef.current?.scrollToIndex({
                    index: error.index,
                    animated: true,
                  });
                }
              }, 100);
            }}
            contentContainerStyle={{ flexGrow: 1, padding: 16 }}
            // initialScrollIndex={currAudioIndex}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            keyExtractor={(item, index) => item.id}
            ref={flatListRef}
            renderItem={({ item, index }) => {
              if (item.content === PAUSE_LABEL)
                return <View style={cn("hidden")} />;
              return (
                <View
                  style={{
                    opacity: index > currAudioIndex ? 0 : 1,
                    // backgroundColor:
                    //   index > currAudioIndex ? "rgba(0,0,0,0.5)" : "",
                  }}
                >
                  <MessageLog
                    message={item}
                    isSpeakingFromParent={isPlaying && currAudioIndex === index}
                    onPress={() => playAllFromIndex(index)}
                    // className={clsx(index > currAudioIndex && "hidden")} cannot use this with scrollToIndex
                  />
                </View>
              );
            }}
          />
        </View>
      </Container>
    </ViewWithFooter>
  );
};

export default LessonScreen;
