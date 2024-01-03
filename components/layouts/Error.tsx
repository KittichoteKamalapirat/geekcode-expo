import React from "react";

import MyText from "../MyTexts/MyText";
import ScreenLayout from "./ScreenLayout";

interface Props {
  message: string;
  isFullScreen?: boolean;
}
const Error = ({ message, isFullScreen }: Props) => {
  if (isFullScreen)
    return (
      <ScreenLayout>
        <MyText className="items-center justify-center">{message}</MyText>
      </ScreenLayout>
    );

  return <MyText className="items-center justify-center">{message}</MyText>;
};

export default Error;
