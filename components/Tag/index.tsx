import React, { ReactNode } from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";
import { ObjectValues } from "../../types";

export const TAG_SIZE = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;

export type TagSizeValues = ObjectValues<typeof TAG_SIZE>;

const SIZES: Record<TagSizeValues, string> = {
  SMALL: "px-1 py-[2px] text-xs ",
  MEDIUM: "px-1.5 py-0.5 text-sm ",
  LARGE: "px-2 py-1 text-md ",
};

interface Props {
  content: ReactNode;
  extraClass?: string;
  size?: TagSizeValues;
}

const Tag = ({ content, size = "MEDIUM", extraClass = "" }: Props) => {
  return (
    <Text
      aria-label="tag-icon"
      style={tw`border-1 border-primary border-solid text-primary rounded-md ${SIZES[size]} ${extraClass}`}
    >
      {content}
    </Text>
  );
};
export default Tag;
