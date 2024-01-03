import clsx from "clsx";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MyMessagesWithLessonQuery } from "../graphql/generated/graphql";
import usePlayRemoteAudio from "../hook/usePlayRemoteAudio";
import { cn } from "../lib/tailwind";
import MyText from "./MyTexts/MyText";

type MessageQueryMessage =
  MyMessagesWithLessonQuery["myMessagesWithLesson"]["messages"][number];

interface Props {
  message: MessageQueryMessage;
  isSpeakingFromParent: boolean;
  className?: string;
  onPress: () => void;
}
const MessageLog = ({
  message,
  isSpeakingFromParent,
  onPress,
  className,
}: Props) => {
  // const { loadAndPlayAudio, isSpeaking, shutUp } = usePlayRemoteAudio({
  //   isAutoPlay: false,
  // });

  // const handlePlayOrPauseAudio = () => {
  //   if (isSpeaking) shutUp();
  //   else loadAndPlayAudio({ url: message.audUrl, isManualPlay: true });
  // };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={cn(
          "rounded-md px-4 py-2",
          message.role === "system"
            ? "text-white bg-orange text-center"
            : message.role === "assistant"
            ? "bg-orange-50 mr-auto"
            : "bg-gray-100 ml-auto",
          "border-[1px]",
          isSpeakingFromParent ? "border-black" : "border-transparent",
          className
        )}
      >
        <MyText
          className={clsx(
            message.role === "system"
              ? "text-white "
              : message.role === "assistant"
              ? "text-brown"
              : "text-brown"
          )}
        >
          {message.content}
        </MyText>
      </View>
    </TouchableOpacity>
  );
};

export default MessageLog;
