import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { useEffect, useRef, useState } from "react";
import {
  BETWEEN_MESSAGE_PAUSE_DURATION,
  FIXED_PAUSE_DURATION,
  PAUSE_DURATION_PER_WORD,
  PAUSE_LABEL,
} from "../constants";
import { configureAudioSession } from "./usePlayRemoteAudio";

const DO_NOT_PRESS_ANYTHING_DURATION = 1000;
export interface AudioFile {
  url: string;
  content: string;
}
interface Props {
  filePaths: AudioFile[];
}

const usePlaySequentialAudioSavePrev = ({ filePaths }: Props) => {
  const [currAudioIndex, setCurrAudioIndex] = useState(0);
  const [soundObjects, setSoundObjects] = useState<(Sound | null)[]>([]);
  const disableActionButtonsRef = useRef(false);

  const [disableAllButtons, setDisableAllButtons] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUnloading, setIsUnloading] = useState<boolean>(false);

  const playAudio = async () => {
    await pause();
    // await pause();
    configureAudioSession();
    setIsPlaying(true);

    const currSound = soundObjects[currAudioIndex];

    if (currSound) {
      await currSound.replayAsync();
      currSound?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

      return;
    }
    // load current sound (index is 0)
    const playbackObject = new Audio.Sound();
    const audioFile = filePaths[currAudioIndex];

    await playbackObject.loadAsync({
      uri: audioFile.url,
    });

    await playbackObject.replayAsync();

    playbackObject?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    // const newSounds = [...soundObjects, playbackObject];
    // setSoundObjects(newSounds);

    // load next sound
    const nextPlaybackObject = new Audio.Sound();
    const nextAudioFile = filePaths[currAudioIndex + 1];

    await nextPlaybackObject.loadAsync({
      uri: nextAudioFile.url,
    });

    const withNextSounds = [
      ...soundObjects,
      playbackObject,
      nextPlaybackObject,
    ];
    setSoundObjects(withNextSounds);
  };

  const disableNextUiButton =
    currAudioIndex >= filePaths.length - 1 || disableAllButtons; // for ui

  const disablePrevUiButton = currAudioIndex <= 0 || disableAllButtons; // for ui

  const playPrev = async () => {
    if (disableActionButtonsRef.current) return;

    await pause();

    const prevItem = filePaths[currAudioIndex - 1];
    const prevNonPauseItemIndex =
      prevItem.content === PAUSE_LABEL
        ? currAudioIndex - 2
        : currAudioIndex - 1;

    setCurrAudioIndex(prevNonPauseItemIndex);
  };

  const playNext = async () => {
    if (disableActionButtonsRef.current) return;

    await pause();
    setCurrAudioIndex(currAudioIndex + 1);
  };

  const pause = async () => {
    console.log("pause");
    // setDisableAllButtons(true);
    try {
      await soundObjects[currAudioIndex - 2]?.stopAsync();
      await soundObjects[currAudioIndex - 1]?.stopAsync();
      await soundObjects[currAudioIndex]?.stopAsync();
      await soundObjects[currAudioIndex + 1]?.stopAsync();
      await soundObjects[currAudioIndex + 2]?.stopAsync();
    } catch (error) {
      console.error("error pause", error);
    }
    // setDisableAllButtons(false);
  };

  const unloadAudio = async () => {
    try {
      if (!soundObjects || soundObjects.length === 0) return;
      setIsUnloading(true);

      const unloadAll = Promise.all(
        soundObjects.map((sound) => sound?.unloadAsync())
      );
      // await soundObject.stopAsync();
      await unloadAll;
      setIsUnloading(false);
    } catch (error) {
      console.error("error unloadAudio", error);
    }
    console.error("unloaded audio");
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.didJustFinish) {
      if (currAudioIndex < filePaths.length - 1) {
        setCurrAudioIndex((prevIndex) => prevIndex + 1);
      } else {
        // setCurrAudioIndex(0);
        setIsPlaying(false); // last index
      }
    }
  };

  // just change curent audio index and let use effect do the work
  const playAllFromIndex = async (index: number) => {
    try {
      await pause();

      setCurrAudioIndex(index);
    } catch (error) {
      console.error("error in playAllFromIndex", error);
    }
  };
  const playAllAudios = async () => {
    console.log("play audio index: ", currAudioIndex, "/", filePaths.length);

    // setCurrAudioIndex((prevIndex) => prevIndex + 1);

    // If there are more audio files, load and play the next one
    if (currAudioIndex < filePaths.length) {
      try {
        const isPause = filePaths[currAudioIndex].content === PAUSE_LABEL;

        if (isPause) {
          const prevMessageWordsNum =
            currAudioIndex > 0
              ? filePaths[currAudioIndex - 1].content.split(" ").length
              : 0;

          const extraPauseDuration =
            prevMessageWordsNum * PAUSE_DURATION_PER_WORD;
          const pauseDuration = FIXED_PAUSE_DURATION + extraPauseDuration;
          setTimeout(async () => {
            console.log("just pause ", pauseDuration, " ms");
            setCurrAudioIndex((prevIndex) => prevIndex + 1);
          }, pauseDuration);
        } else {
          setTimeout(async () => {
            // await unloadAudio();
            await playAudio();
          }, BETWEEN_MESSAGE_PAUSE_DURATION);
        }
      } catch (error) {
        console.error("error playing audio", error);
      }
    } else {
      // All audio files have been played
      // Perform any necessary action or reset the state as needed
    }
  };

  const shutUp = async () => {
    // await unloadAudio();
    await pause();

    setIsPlaying(false);
  };

  useEffect(() => {
    // ref: https://github.com/expo/expo/issues/19220
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    return () => {
      unloadAudio();
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
    };
  }, []);

  // pause when unmount
  useEffect(() => {
    return () => {
      soundObjects[currAudioIndex - 1]?.stopAsync();
      soundObjects[currAudioIndex]?.stopAsync();
      soundObjects[currAudioIndex + 1]?.stopAsync();
    };
  }, [soundObjects, currAudioIndex]);

  useEffect(() => {
    if (currAudioIndex < filePaths.length) {
      setDisableAllButtons(true); // for ui (async)
      disableActionButtonsRef.current = true; // for real logic (synchronous)
      const id = setTimeout(() => {
        setDisableAllButtons(false); // for ui (async)
        disableActionButtonsRef.current = false; // for real logic (synchronous)
      }, DO_NOT_PRESS_ANYTHING_DURATION);

      playAllAudios();

      return () => clearInterval(id);
    } else {
      setIsPlaying(false);
    }
  }, [filePaths, currAudioIndex]);

  return {
    playAllAudios,
    playPrev,
    // playOneAudio,
    disableAllButtons,
    isPlaying,
    playNext,
    shutUp,
    currAudioIndex,
    playAllFromIndex,
    disableNextUiButton,
    disablePrevUiButton,
    isUnloading,
  };
};

export default usePlaySequentialAudioSavePrev;
