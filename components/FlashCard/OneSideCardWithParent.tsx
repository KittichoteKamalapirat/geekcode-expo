import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useEffect, useRef } from "react";
import { Dimensions, View, Animated } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";
import MyText from "../MyTexts/MyText";
import { cn } from "../../lib/tailwind";

type Props = {
  children: ReactNode;
  hasPaddingLeft?: boolean;
  hasPaddingRight?: boolean;
  isFirstLaunch?: boolean;
  isHeader?: boolean; // if not header => it is footer
};

const OneSideCardWithParent: React.FC<Props> = ({
  hasPaddingLeft = false,
  hasPaddingRight = false,
  isHeader = true,
  isFirstLaunch = false,
  children,
}) => {
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
        paddingLeft: hasPaddingLeft ? FLASHCARD_MARGIN * 2 : 0,
        paddingRight: hasPaddingRight ? FLASHCARD_MARGIN * 2 : 0,
      }}
    >
      <View style={cn("flex flex-row items-center justify-between")}>
        <MyText className="text-xl font-semibold">
          {isHeader ? "Problem" : "Rate your understanding"}
        </MyText>

        {isFirstLaunch && isHeader && (
          <View style={cn("flex flex-col items-center justify-between")}>
            <Animated.View
              style={{
                transform: [{ translateX: moveX }],
              }}
            >
              <MaterialCommunityIcons
                name="gesture-swipe-left"
                size={20}
                color="white"
              />
            </Animated.View>

            <MyText className="text-xs">Swipe Left</MyText>
          </View>
        )}
      </View>

      <View
        style={{
          width: screenW - FLASHCARD_MARGIN * 2,
          height: screenH * 0.75,
          padding: 16,
          justifyContent: "center",
          backgroundColor: "black",
          //   borderColor: "gray",
          //   borderWidth: 0.5,
          borderRadius: 12,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default OneSideCardWithParent;
