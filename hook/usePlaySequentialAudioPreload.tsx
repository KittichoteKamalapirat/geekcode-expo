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

export interface AudioFile {
  url: string;
  content: string;
}
interface Props {
  filePaths: AudioFile[];
}

const usePlaySequentialAudio = ({ filePaths }: Props) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const soundObjects = useRef<(Sound | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUnloading, setIsUnloading] = useState<boolean>(false);

  const playAudio = async () => {
    configureAudioSession();
    setIsPlaying(true);
    const playbackObject = new Audio.Sound();

    const audioFile = filePaths[currentAudioIndex];

    await playbackObject.loadAsync({
      uri: audioFile.url,
    });
    await playbackObject.replayAsync();
    playbackObject?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  };

  const pause = async () => {
    try {
      const currentSoundObject = soundObjects.current[currentAudioIndex];

      if (!currentSoundObject) return;
      await currentSoundObject.stopAsync();
    } catch (error) {
      console.error("error pause", error);
    }
  };

  const unloadAudio = async () => {
    try {
      if (!soundObjects.current || soundObjects.current.length === 0) return;
      setIsUnloading(true);

      const unloadAll = Promise.all(
        soundObjects.current.map((sound) => sound?.unloadAsync())
      );
      // await soundObject.stopAsync();
      await unloadAll;
      setIsUnloading(false);
    } catch (error) {
      console.error("error unloadAudio", error);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.didJustFinish) {
      console.log("did just finish");
      setCurrentAudioIndex((prevIndex) => prevIndex + 1);
    }
  };

  // just change curent audio index and let use effect do the work
  const playAllFromIndex = async (index: number) => {
    try {
      await pause();

      setCurrentAudioIndex(index);
    } catch (error) {
      console.error("error in playAllFromIndex", error);
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

  // const playOneAudio = async (index: string) => {
  //   try {
  //     setTimeout(async () => {
  //       await unloadAudio();
  //       await playAudio();
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

  // preload all audio
  useEffect(() => {
    const loadedAudios = async () => {
      const audioPromise = Promise.all(
        filePaths.map(async (file) => {
          try {
            configureAudioSession();
            const playbackObject = new Audio.Sound();

            const audioFile = file;

            await playbackObject.loadAsync({
              uri: audioFile.url,
            });

            return playbackObject;
          } catch (error) {
            console.error("error");
            return null;
          }
        })
      );

      try {
        const audios = await audioPromise;
        soundObjects.current = audios;
      } catch (error) {
        console.error("error in loadedAudios");
      }
    };
    loadedAudios();
  }, [filePaths]);
  // play audio until no more
  useEffect(() => {
    // don't play on initial render
    // if (currentAudioIndex === 0) return;
    console.log("currentAudioIndex", currentAudioIndex);
    if (currentAudioIndex < filePaths.length) {
      playAllAudios();
    } else {
      console.log("play all");
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
