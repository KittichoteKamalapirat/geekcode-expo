import React, { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";

type Props = {
  children: ReactNode;
  hasPaddingLeft?: boolean;
  hasPaddingRight?: boolean;
};

const OneSideCardWithParent: React.FC<Props> = ({
  hasPaddingLeft = false,
  hasPaddingRight = false,
  children,
}) => {
  const screenW = Dimensions.get("window").width;
  const screenH = Dimensions.get("window").height;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%",
        paddingLeft: hasPaddingLeft ? FLASHCARD_MARGIN * 2 : 0,
        paddingRight: hasPaddingRight ? FLASHCARD_MARGIN * 2 : 0,
      }}
    >
      <View
        style={{
          width: screenW - FLASHCARD_MARGIN * 2,
          height: screenH * 0.7,
          marginTop: 0,
          paddingTop: 16,
          paddingHorizontal: 8,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "black",
          borderRadius: 12,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default OneSideCardWithParent;
