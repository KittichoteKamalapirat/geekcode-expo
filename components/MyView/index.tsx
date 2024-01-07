import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { cn } from "../../lib/tailwind";

interface Props extends ViewProps {
  children: ReactNode;
  className?: string;
}

const MyView = ({ children, className = "", ...rest }: Props) => {
  return (
    <View style={cn(className)} {...rest}>
      {children}
    </View>
  );
};

export default MyView;
