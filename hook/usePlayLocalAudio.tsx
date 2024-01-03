import { Audio } from "expo-av";
import { useEffect, useState } from "react";

import { Sound } from "expo-av/build/Audio";
import { heavyImpact } from "../util/haptics";

interface Props {
  url: number;
}

const configureAudioSession = async () => {
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true, // need this for ios
    allowsRecordingIOS: false, // ref: https://github.com/expo/expo/issues/19220
  });
};

// just for playing a sound, not recording
const usePlayLocalAudio = ({ url }: Props) => {
  const [playbackObject, setPlaybackObject] = useState<Sound | null>(null);

  const play = async () => {
    configureAudioSession();
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    heavyImpact();
    if (!playbackObject) return;

    await playbackObject.replayAsync(); // cal; playAsync only works for the first time
  };

  const loadAudio = async (url: number) => {
    const playbackObject = new Audio.Sound();
    await playbackObject?.loadAsync(url);
    setPlaybackObject(playbackObject);
  };

  useEffect(() => {
    loadAudio(url);
  }, [url]);

  return { play };
};

export default usePlayLocalAudio;
