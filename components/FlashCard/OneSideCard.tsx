import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";
import MyText from "../MyTexts/MyText";

type Props = {
  title: string;
  onPress: () => void;
};

const OneSideCard: React.FC<Props> = ({ title, onPress }) => {
  const screenW = Dimensions.get("window").width;
  const screenH = Dimensions.get("window").height;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: screenW - FLASHCARD_MARGIN * 2,
          height: screenH * 0.7,
          marginVertical: "auto",
          paddingTop: 16,
          paddingHorizontal: 8,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          borderRadius: 12,
        }}
      >
        <MyText>{title}</MyText>
      </View>
    </TouchableOpacity>
  );
};

export default OneSideCard;
