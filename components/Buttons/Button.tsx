import React, { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import tw, { cn } from "../../lib/tailwind";
import { ObjectValues } from "../../types";
import clsx from "clsx";

export const BUTTON_VARIANT = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  OUTLINED: "OUTLINED",
  TEXT: "TEXT",
  NAKED: "NAKED",
} as const;

export type ButtonVariantValues = ObjectValues<typeof BUTTON_VARIANT>;

interface Props {
  onPress?: () => void;
  label: string;
  variant?: ButtonVariantValues;
  size?: ButtonSizeValues;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

interface ClassProps {
  variant: ButtonVariantValues;
  size: ButtonSizeValues;
}

export const BUTTON_SIZE = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;

export type ButtonSizeValues = ObjectValues<typeof BUTTON_SIZE>;

const getButtonStyle = ({ variant }: ClassProps) => {
  const commonStyle = "rounded-full";
  switch (variant) {
    case "OUTLINED":
      return `${commonStyle} border-solid text-primary border-1 border-primary`;

    case "SECONDARY":
      return `${commonStyle} bg-grey-0 hover:bg-grey-50 text-bg-color`;

    case "NAKED":
      return `${commonStyle}`;

    case "TEXT":
      return `text-grey-900`;

    case "PRIMARY":
    default:
      return `${commonStyle} text-white bg-primary hover:bg-primary-hovered`;
  }
};

const SIZE_STYLE: Record<ButtonSizeValues, string> = {
  SMALL: "text-sm py-3",
  MEDIUM: "text-md py-4",
  LARGE: "text-lg py-4",
};

const TEXT_COLOR: Record<ButtonVariantValues, string> = {
  PRIMARY: "text-black",
  SECONDARY: "text-primary",
  OUTLINED: "text-primary",
  TEXT: "text-black",
  NAKED: "text-brown",
};

const getSize = ({ variant, size }: ClassProps) => {
  const sizeStyle = SIZE_STYLE[size];

  const commonStyle = `${sizeStyle} text-center`;

  switch (variant) {
    case "OUTLINED":
      return `${commonStyle}`;

    case "SECONDARY":
      return `${commonStyle}`;

    case "TEXT":
      return `underline`;

    case "NAKED":
      return `${commonStyle}`;

    case "PRIMARY":
    default:
      return `${commonStyle}`;
  }
};

const Button = ({
  label,
  variant = "PRIMARY",
  onPress,
  size = "MEDIUM",
  leftIcon,
  rightIcon,
  className = "",
}: Props) => {
  const buttonVariant = getButtonStyle({ variant, size });
  const buttonSize = getSize({ variant, size });
  const textColor = TEXT_COLOR[variant];

  return (
    <TouchableOpacity
      style={cn(
        leftIcon || (rightIcon && "flex flex-row gap-2 items-center"),
        buttonVariant,
        className
      )}
      onPress={onPress}
    >
      {leftIcon}
      <Text style={tw`${buttonSize} ${textColor}`}>{label}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export default Button;
