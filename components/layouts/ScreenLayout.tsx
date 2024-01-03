import React, { ReactNode, useEffect } from "react";
import { LogBox, SafeAreaView } from "react-native";
import tw from "../../lib/tailwind";

interface Props {
  children: ReactNode;
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  alignItems?:
    | ""
    | "items-start"
    | "items-end"
    | "items-center"
    | "items-baseline"
    | "items-stretch";
  className?: string;
}
const ScreenLayout = ({
  children,
  justifyContent = "justify-center",
  alignItems = "",
  className = "px-4",
}: Props) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <SafeAreaView
      // style={tw`flex-1 h-full w-full bg-grey-50  ${justifyContent} ${alignItems} ${className}`}
      style={tw`h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto bg-[#f3f3f3]  ${justifyContent} ${alignItems} ${className}`}
    >
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;
