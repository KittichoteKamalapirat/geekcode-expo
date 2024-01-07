import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useEffect, useRef } from "react";
import { Dimensions, View, Animated } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";
import MyText from "../MyTexts/MyText";
import { cn } from "../../lib/tailwind";
import { backgroundSecondary } from "../../theme/style";

type Props = {
  children: ReactNode;
  title: string;
  isFirstLaunch?: boolean;
};

const HeaderCard: React.FC<Props> = ({
  title,
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
        paddingRight: FLASHCARD_MARGIN * 2,
      }}
    >
      <View style={cn("flex flex-row items-center justify-between")}>
        <MyText className="text-lg font-semibold">{title}</MyText>

        {isFirstLaunch && (
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
          backgroundColor: backgroundSecondary,
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

export default HeaderCard;