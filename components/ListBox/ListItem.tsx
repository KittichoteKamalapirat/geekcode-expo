import clsx from "clsx";
import React, { ReactNode } from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";

export interface ListItemProps {
  children: ReactNode;
  index?: number; // passed from ListBox
}
const ListItem = ({ children, index }: ListItemProps) => {
  return (
    <View style={tw`${clsx("p-4", index! > 0 && "border-t border-grey-100 ")}`}>
      {children}
    </View>
  );
};

export default ListItem;
