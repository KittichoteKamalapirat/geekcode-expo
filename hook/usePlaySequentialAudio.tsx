import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";
import {
  FIXED_PAUSE_DURATION,
  PAUSE_DURATION_PER_WORD,
  PAUSE_LABEL,
} from "../constants";
import { configureAudioSession } from "./usePlayRemoteAudio";

export interface AudioFile {
  url: string;
  content: string;
}
interface Props {
  filePaths: AudioFile[];
}

const usePlaySequentialAudio = ({ filePaths }: Props) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [soundObject, setSoundObject] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUnloading, setIsUnloading] = useState<boolean>(false);

  const loadAndPlayAudio = async () => {
    configureAudioSession();
    setIsPlaying(true);
    const playbackObject = new Audio.Sound();

    const audioFile = filePaths[currentAudioIndex];

    console.log("111", audioFile.url);
    await playbackObject.loadAsync({
      uri: audioFile.url,
    });
    console.log("222");
    await playbackObject.replayAsync();
    playbackObject?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setSoundObject(playbackObject);
  };

  const pause = async () => {
    try {
      if (!soundObject) return;
      await soundObject.stopAsync();
    } catch (error) {
      console.error("error pause", error);
    }
  };

  const unloadAudio = async () => {
    console.log("unload audio");

    console.log("soundObject", soundObject ? "true" : "false");
    try {
      if (!soundObject) return;
      setIsUnloading(true);

      // await soundObject.stopAsync();
      await soundObject.unloadAsync();
      setSoundObject(null);
      setIsUnloading(false);
    } catch (error) {
      console.error("error unloadAudio", error);
    }
    console.log("unloaded audio");
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.didJustFinish) {
      setCurrentAudioIndex((prevIndex) => prevIndex + 1);
    }
  };

  // just change curent audio index and let use effect do the work
  const playAllFromIndex = async (index: number) => {
    try {
      await unloadAudio();

      setCurrentAudioIndex(index);
    } catch (error) {
      console.log("error in playAllFromIndex", error);
    }
  };
  const playAllAudios = async () => {
    console.log("play audio index: ", currentAudioIndex, "/", filePaths.length);

    // setCurrentAudioIndex((prevIndex) => prevIndex + 1);

    // If there are more audio files, load and play the next one
    if (currentAudioIndex < filePaths.length) {
      try {
        const isPause = filePaths[currentAudioIndex].content === PAUSE_LABEL;

        if (isPause) {
          const prevMessageWordsNum =
            currentAudioIndex > 0
              ? filePaths[currentAudioIndex - 1].content.split(" ").length
              : 0;

          const extraPauseDuration =
            prevMessageWordsNum * PAUSE_DURATION_PER_WORD;
          const pauseDuration = FIXED_PAUSE_DURATION + extraPauseDuration;
          setTimeout(async () => {
            console.log("just pause ", pauseDuration, " ms");
            setCurrentAudioIndex((prevIndex) => prevIndex + 1);
          }, pauseDuration);
        } else {
          setTimeout(async () => {
            await unloadAudio();
            await loadAndPlayAudio();
            // setCurrentAudioIndex((prevIndex) => prevIndex + 1);
          }, 1000);
        }
      } catch (error) {
        console.error("error playing audio", error);
      }
    } else {
      // All audio files have been played
      // Perform any necessary action or reset the state as needed
    }
  };

  // const playOneAudio = async (index: string) => {
  //   try {
  //     setTimeout(async () => {
  //       await unloadAudio();
  //       await loadAndPlayAudio();
  //     }, 2000);
  //   } catch (error) {
  //     console.error("error playing audio", error);
  //   }
  // };

  const shutUp = async () => {
    // await unloadAudio();
    await pause();

    setIsPlaying(false);
  };
  // play audio until no more
  useEffect(() => {
    // don't play on initial render
    // if (currentAudioIndex === 0) return;
    if (currentAudioIndex < filePaths.length) {
      playAllAudios();
    } else {
      setIsPlaying(false);
    }
  }, [currentAudioIndex]);

  // stop if unmount
  // useEffect(() => {
  //   return () => {
  //     unloadAudio();
  //   };
  // });
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

  return {
    playAllAudios,
    // playOneAudio,
    isPlaying,
    shutUp,
    currentAudioIndex,
    playAllFromIndex,
    isUnloading,
  };
};

export default usePlaySequentialAudio;
