import React, { ReactNode } from "react";
import { Text } from "react-native";
import { cn } from "../../lib/tailwind";
import { ClassValue } from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

const MyText = ({ children, className = "" }: Props) => {
  return (
    <Text style={cn`text-neutral-200 text-md ${className} `}>{children}</Text>
  );
};

export default MyText;
