import React from "react";
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { FLASHCARD_MARGIN } from "../../constants";
import { backgroundSecondary } from "../../theme/style";
import MyText from "../MyTexts/MyText";

type Props = {
  title: string;
  onPress: () => void;
};

const OneSideCard: React.FC<Props> = ({ title, onPress }) => {
  const screenW = Dimensions.get("window").width;
  const screenH = Dimensions.get("window").height;

  return (
    <TouchableWithoutFeedback>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          paddingBottom: 12,
        }}
        style={{
          width: screenW - FLASHCARD_MARGIN * 2,
          height: screenH * 0.7, // need on both styles
          padding: 16,
          backgroundColor: backgroundSecondary,
          borderRadius: 12,
          marginBottom: 35,
        }}
      >
        <TouchableOpacity onPress={onPress}>
          {/* wrap text with view so that whole card can be clicked, not only text */}
          <View
            style={{
              height: screenH * 0.5,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <MyText className="text-xl">{title}</MyText>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default OneSideCard;
