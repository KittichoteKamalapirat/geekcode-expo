import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

const usePlaySequential2Audio = ({ filePaths }: Props) => {
  const [currAudioIndex, setCurrAudioIndex] = useState(0);
  const [prevSoundObject, setPrevSoundObject] = useState<Sound | null>(null);
  const [currSoundObject, setCurrSoundObject] = useState<Sound | null>(null);
  const [nextSoundObject, setNextSoundObject] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUnloading, setIsUnloading] = useState<boolean>(false);

  console.log("currAudioIndex", currAudioIndex);
  const playAudio = async () => {
    configureAudioSession();
    setIsPlaying(true);

    // say i = 2
    // play i = 2 (prev: 1, current: 2, next: 3)
    // after done i = 3 (prev: 2, current: 3, nexst: 4)
    try {
      // for first time when index === 0
      if (!currSoundObject) {
        console.log("no sound so load");
        const audio = await loadAndSetAudio(currAudioIndex, setCurrSoundObject);
        audio.replayAsync();
        audio.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        setPrevSoundObject(audio);
      } else {
        console.log("yes sound so play");
        currSoundObject?.replayAsync();
        currSoundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

        setPrevSoundObject(currSoundObject);
      }
      // if (nextSoundObject) setCurrSoundObject(nextSoundObject);
      // else await loadAndSetAudio(currAudioIndex + 1, setCurrSoundObject);
      await loadAndSetAudio(currAudioIndex + 1, setCurrSoundObject);
      await loadAndSetAudio(currAudioIndex + 2, setNextSoundObject);
    } catch (error) {
      console.error("error in playAudio");
    }

    //  set2AndLoad1Audio(toPlayObj, nextSoundObject);
  };

  // used when playing sequentially after finish playing current audio

  const loadAndSetAudio = async (
    index: number,
    set: Dispatch<SetStateAction<Sound | null>>
  ) => {
    console.log("load", index);
    const playbackObject = new Audio.Sound();
    const audioFile = filePaths[index];
    await playbackObject.loadAsync({
      uri: audioFile.url,
    });
    // await playbackObject.replayAsync();
    // playbackObject?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    set(playbackObject);
    return playbackObject;
  };
  const set2AndLoad1Audio = async (curr: Sound, next: Sound) => {
    // set prev
    setPrevSoundObject(curr);

    // set current
    setCurrSoundObject(next);

    // load next
    const nextPlaybackObject = new Audio.Sound();
    const nextAudioFile = filePaths[currAudioIndex + 1];
    await nextPlaybackObject.loadAsync({
      uri: nextAudioFile.url,
    });
    setNextSoundObject(nextPlaybackObject);
  };

  const pause = async () => {
    try {
      currSoundObject?.stopAsync();
      prevSoundObject?.stopAsync();
      nextSoundObject?.stopAsync();

      // set curr back

      console.log("set back");
      setNextSoundObject(currSoundObject);
      setCurrSoundObject(prevSoundObject);

      if (currAudioIndex > 0) {
        const prevSound = await loadAndSetAudio(
          currAudioIndex - 1,
          setPrevSoundObject
        );
        setPrevSoundObject(prevSound);
      }
    } catch (error) {
      console.error("error pause", error);
    }
  };

  const unloadAudio = async () => {
    console.log("unload audio");

    console.log("soundObject", currSoundObject ? "true" : "false");
    try {
      if (!currSoundObject) return;
      setIsUnloading(true);

      // await soundObject.stopAsync();
      await currSoundObject.unloadAsync();
      setCurrSoundObject(null);
      setIsUnloading(false);
    } catch (error) {
      console.error("error unloadAudio", error);
    }
    console.log("unloaded audio");
  };

  const clearAllAudio = async () => {
    setIsUnloading(true);
    try {
      // curr
      if (currSoundObject) {
        await currSoundObject.stopAsync();
        await currSoundObject.unloadAsync();
        setCurrSoundObject(null);
      }
      // prev
      if (prevSoundObject) {
        await prevSoundObject.unloadAsync();
        setPrevSoundObject(null);
      }
      if (nextSoundObject) {
        await nextSoundObject.unloadAsync();
        setNextSoundObject(null);
      }
      // next

      // await soundObject.stopAsync();

      setIsUnloading(false);
    } catch (error) {
      console.error("error unloadAudio", error);
    }
    console.log("unloaded audio");
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.didJustFinish) {
      setCurrAudioIndex((prevIndex) => prevIndex + 1);
    }
  };

  const playNext = async () => {
    // play next
    await currSoundObject?.stopAsync();
    // setCurrAudioIndex(currAudioIndex + 1);

    // setPrevSoundObject(soundObject);
    // setCurrSoundObject(nextSoundObject);
    // await loadAndSetAudio(currAudioIndex + 2, setNextSoundObject);
    // setNextSoundObject(nextSoundObject);
    // await soundObject?.stopAsync();
    // nextSoundObject?.replayAsync();

    // load cur, prev, next
  };

  // just change curent audio index and let use effect do the work
  const playAllFromIndex = async (index: number) => {
    try {
      // clear all
      await clearAllAudio();

      setCurrAudioIndex(index); // no need to replay since use effect will do it

      await loadAndSetAudio(index, setNextSoundObject);
      await loadAndSetAudio(index + 1, setNextSoundObject);
      await loadAndSetAudio(index + 2, setNextSoundObject);
    } catch (error) {
      console.log("error in playAllFromIndex", error);
    }
  };
  const playAllAudios = async () => {
    console.log("play audio index: ", currAudioIndex, "/", filePaths.length);

    // setCurrAudioIndex((prevIndex) => prevIndex + 1);

    // If there are more audio files, load and play the next one
    if (currAudioIndex < filePaths.length) {
      try {
        console.log("1");
        const isPause = filePaths[currAudioIndex].content === PAUSE_LABEL;
        console.log("2");
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
            console.log("play audio in play all");
            // await unloadAudio();
            await playAudio();
            // setCurrAudioIndex((prevIndex) => prevIndex + 1);
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
  // play audio until no more
  useEffect(() => {
    // don't play on initial render
    // if (currAudioIndex === 0) return;
    if (currAudioIndex < filePaths.length) {
      playAllAudios();
    } else {
      setIsPlaying(false);
    }
  }, [currAudioIndex]);

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
    currAudioIndex,
    playAllFromIndex,
    playNext,
    isUnloading,
  };
};

export default usePlaySequential2Audio;
