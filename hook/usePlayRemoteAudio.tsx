import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

import { useEffect, useState } from "react";

export const configureAudioSession = async () => {
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true, // need this for ios
  });
};

interface Props {
  existingUrl?: string;
  isAutoPlay?: boolean;
}

interface GenerateAndPlayAudioProps {
  text: string;
  tutorMessageId?: string;
  sceneMessageId?: string;
}

interface LoadAndPlayProps {
  url?: string;
  isManualPlay?: boolean;
}
const usePlayRemoteAudio = ({ existingUrl = "", isAutoPlay = true }: Props) => {
  const [soundObject, setSoundObject] = useState<Sound | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false); // to do

  const [filePath, setFilePath] = useState<string>(existingUrl);

  // handlers
  // const playAudio = async (url: string) => {
  //   try {
  //     setFilePath(url);
  //     loadAndPlayAudio({ url });
  //   } catch (error) {
  //     console.error("error generating audio in usePlayRemoteAudio", error);
  //   }
  // };

  // for existings audio? (not confident)
  const loadAndPlayAudio = async ({
    url,
    isManualPlay = false,
  }: LoadAndPlayProps) => {
    try {
      configureAudioSession();

      const playbackObject = new Audio.Sound();

      console.log("existingUrl", existingUrl);
      console.log("filePath", filePath);
      await playbackObject.loadAsync({
        uri: existingUrl || url || filePath, // priority is existingUrl > url >  filePath
      });

      if (isManualPlay || isAutoPlay) {
        setIsSpeaking(true);

        await playbackObject.replayAsync();
        playbackObject?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }

      setSoundObject(playbackObject);
    } catch (error) {
      console.error("error loadAndPlayAudio", error);
    }
  };

  const playLoadedAudio = async () => {
    try {
      await unloadAudio();
      await loadAndPlayAudio({});
    } catch (error) {
      console.error("error playLoadedAudio", error);
    }
  };

  const unloadAudio = async () => {
    if (soundObject) {
      try {
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
        setSoundObject(null);
      } catch (error) {
        console.error("error unloadAudio", error);
      }
    }
  };

  const shutUp = async () => {
    unloadAudio();

    setIsSpeaking(false);
  };

  const onPlaybackStatusUpdate = (status: any) => {
    // TODO
    if (status.didJustFinish) {
      setIsSpeaking(false);
    }
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

  return {
    playLoadedAudio,
    isSpeaking,
    shutUp,
    loadAndPlayAudio,
  };
};

export default usePlayRemoteAudio;
