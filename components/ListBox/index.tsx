import React, { Children, ReactElement, cloneElement } from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import { ListItemProps } from "./ListItem";

interface ListBoxProps {
  children: Array<ReactElement<ListItemProps>>;
  style?: string;
}

const ListBox = ({ children: items, style = "" }: ListBoxProps) => {
  return (
    <View style={tw`bg-white rounded-lg mt-2 ${style}`}>
      {Children.map(items, (item, index) => cloneElement(item, { index }))}
    </View>
  );
};

export default ListBox;
