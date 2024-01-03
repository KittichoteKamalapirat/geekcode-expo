import React, { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";
import tw from "../../lib/tailwind";

import { ButtonVariantValues } from "./Button";

interface Props extends Omit<PressableProps, "style"> {
  icon: ReactNode;
  variant?: ButtonVariantValues;
  fontColor?: string;
  bgColor?: string;
  style?: string;
  disabled?: boolean;
}

interface ClassProps {
  variant: ButtonVariantValues;
  fontColor: string;
  bgColor: string;
}

const getButtonStyle = ({ variant, fontColor, bgColor }: ClassProps) => {
  const commonStyle = "rounded-full ";
  switch (variant) {
    case "OUTLINED":
      return `${commonStyle} mt-2 p-2 border-solid border-1 ${
        fontColor ? `border-${fontColor}` : "border-primary"
      }`;

    case "SECONDARY":
      return `${commonStyle} mt-2 p-2 bg-grey-0 hover:bg-grey-50`;

    case "NAKED":
      return `${commonStyle} text-primary`;

    case "TEXT":
      return `${commonStyle}`;

    case "PRIMARY":
    default:
      return `${commonStyle} ${bgColor} mt-2 p-2 hover:bg-primary-hovered`;
  }
};

const PressableIconButton = ({
  icon,
  variant = "PRIMARY",

  fontColor = "",
  bgColor = "bg-primary",
  style = "mx-auto",
  disabled = false,
  ...props
}: Props) => {
  const buttonStyle = getButtonStyle({ variant, fontColor, bgColor });
  // const textStyle = useTextStyle({ variant, fontColor, bgColor });

  return (
    <Pressable
      disabled={disabled}
      style={tw`${buttonStyle} ${style}`}
      {...props}
    >
      {icon}
    </Pressable>
  );
};

export default PressableIconButton;
