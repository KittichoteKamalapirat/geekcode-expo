import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import tw, { cn } from "../../lib/tailwind";

import { ButtonVariantValues } from "./Button";

interface Props {
  onPress?: () => void;
  icon: ReactNode;
  variant?: ButtonVariantValues;
  fontColor?: string;
  bgColor?: string;
  className?: string;
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

const IconButton = ({
  icon,
  variant = "PRIMARY",
  onPress,
  fontColor = "",
  bgColor = "bg-primary",
  className = "",
  disabled = false,
}: Props) => {
  const buttonStyle = getButtonStyle({ variant, fontColor, bgColor });
  // const textStyle = useTextStyle({ variant, fontColor, bgColor });

  const disalbedStyle = disabled ? "opacity-50" : "";
  return (
    <TouchableOpacity
      disabled={disabled}
      style={cn`mx-auto ${buttonStyle} ${disalbedStyle} ${className}`}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
