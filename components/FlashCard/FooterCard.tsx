import React, { ReactNode, useEffect, useRef } from "react";
import { Animated, Dimensions, View } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";
import { cn } from "../../lib/tailwind";
import MyText from "../MyTexts/MyText";

type Props = {
  children: ReactNode;
};

const FooterCard: React.FC<Props> = ({ children }) => {
  const screenW = Dimensions.get("window").width;
  const screenH = Dimensions.get("window").height;

  const swipeAnimate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Function to start the animation
    const startAnimation = () => {
      // Reset the animation value to 0
      swipeAnimate.setValue(0);

      // Start the animation
      Animated.timing(swipeAnimate, {
        toValue: 1,
        duration: 1000, // Duration of the animation
        useNativeDriver: true, // Use native driver for better performance
      }).start(() => startAnimation()); // Loop the animation
    };

    startAnimation();
  }, [swipeAnimate]);

  // Interpolate the animated value to calculate the translateX
  const moveX = swipeAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -20],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 100,
        width: "100%",
        paddingLeft: FLASHCARD_MARGIN * 2,
      }}
    >
      <View style={cn("flex flex-row items-center justify-between")}>
        <MyText className="text-xl font-semibold">
          Rate your understanding
        </MyText>
      </View>

      <View
        style={{
          width: screenW - FLASHCARD_MARGIN * 2,
          height: screenH * 0.75,
          // justifyContent: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default FooterCard;
