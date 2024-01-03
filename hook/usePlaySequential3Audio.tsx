import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { useEffect, useRef, useState } from "react";
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

const usePlaySequential3Audio = ({ filePaths }: Props) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [prevSoundObject, setPrevSoundObject] = useState<Sound | null>(null);
  // const [currSoundObject, setCurrSoundObject] = useState<Sound | null>(null);
  const currSoundObjectRef = useRef<Sound | null>(null);
  const [nextSoundObject, setNextSoundObject] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUnloading, setIsUnloading] = useState<boolean>(false);

  const playAudio = async () => {
    console.log("play audio");
    configureAudioSession();
    setIsPlaying(true);

    await currSoundObjectRef.current?.replayAsync();
    currSoundObjectRef.current?.setOnPlaybackStatusUpdate(
      onPlaybackStatusUpdate
    );

    // load next one
    // cur => prev
    setPrevSoundObject(currSoundObjectRef.current);
    // next => curr
    currSoundObjectRef.current = nextSoundObject;

    // load next
    const nextPlaybackObject = new Audio.Sound();
    const audioFile = filePaths[currentAudioIndex + 1];

    await nextPlaybackObject.loadAsync({
      uri: audioFile.url,
    });
    setNextSoundObject(nextPlaybackObject);
  };

  const pause = async () => {
    try {
      if (!currSoundObjectRef.current) return;
      console.log("stop", currSoundObjectRef.current ? "yes" : "no");

      await currSoundObjectRef.current.stopAsync();
    } catch (error) {
      console.error("error pause", error);
    }
  };

  const unloadAllAudio = async () => {
    console.log("unload audio");

    try {
      setIsUnloading(true);
      // curr
      if (currSoundObjectRef.current) {
        await currSoundObjectRef.current.unloadAsync();
        currSoundObjectRef.current = null;
      }

      // prev
      if (prevSoundObject) {
        await prevSoundObject.unloadAsync();
        setPrevSoundObject(null);
      }

      // next
      if (nextSoundObject) {
        await nextSoundObject.unloadAsync();
        setNextSoundObject(null);
      }

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
      // await unloadAudio();

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
            // await unloadAudio();
            await playAudio();
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

  console.log("out siddeeeeeee", currSoundObjectRef.current ? "yes" : "no");

  // first load
  useEffect(() => {
    configureAudioSession();
    if (filePaths.length === 0) return;
    const loadAudios = async () => {
      try {
        console.log("lengthhhhhhhhhh", filePaths.length);
        // load current
        const currPbObject = new Audio.Sound();
        const currAudFile = filePaths[0];

        console.log("1");
        console.log("currAudioFile", currAudFile.url);
        console.log("2");

        await currPbObject.loadAsync({
          uri: currAudFile.url,
        });

        // await currPbObject.replayAsync();
        currPbObject?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        console.log("settttttttt");
        currSoundObjectRef.current = currPbObject;

        // no load prev

        // load next
        // const nextPbObject = new Audio.Sound();
        // const nextAudFile = filePaths[1];

        // await nextPbObject.loadAsync({
        //   uri: nextAudFile?.url,
        // });
        // setNextSoundObject(nextPbObject);
      } catch (error) {
        console.error("error loadAndPlayAudio", error);
      }
    };

    loadAudios();
  }, [filePaths]);
  // play audio until no more
  // useEffect(() => {
  //   // don't play on initial render
  //   // if (currentAudioIndex === 0) return;

  //   if (currentAudioIndex < filePaths.length) {
  //     playAllAudios();
  //   } else {
  //     setIsPlaying(false);
  //   }
  // }, [currentAudioIndex]);

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
      console.log("unload alllll");
      unloadAllAudio();
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

export default usePlaySequential3Audio;
