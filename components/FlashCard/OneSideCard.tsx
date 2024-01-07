import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";
import MyText from "../MyTexts/MyText";
import { backgroundPrimary, backgroundSecondary } from "../../theme/style";

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
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: backgroundSecondary,
          borderRadius: 12,
          marginBottom: 35,
        }}
      >
        <MyText className="text-xl">{title}</MyText>
      </View>
    </TouchableOpacity>
  );
};

export default OneSideCard;
