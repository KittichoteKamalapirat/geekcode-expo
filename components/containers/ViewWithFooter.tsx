import React, { ReactNode } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { cn } from "../../lib/tailwind";

interface Props {
  children: ReactNode;
  footer: ReactNode;
  className?: string;
}
const ViewWithFooter = ({ children, footer, className }: Props) => {
  return (
    <SafeAreaView style={cn("flex-1", className)}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View>{children}</View>
      </ScrollView>
      <View style={cn("mb-4")}>{footer}</View>
    </SafeAreaView>
  );
};

export default ViewWithFooter;
