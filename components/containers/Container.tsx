import clsx from "clsx";
import { ReactNode } from "react";
import { View } from "react-native";
import tw, { cn } from "../../lib/tailwind";

interface Props {
  children: ReactNode;
  style?: string;
}

export const Container = ({ children, style }: Props) => {
  return <View style={cn("py-2 px-4", style)}>{children}</View>;
};

export default Container;
