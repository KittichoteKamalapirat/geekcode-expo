import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Dimensions, View, Animated, Text, ScrollView } from "react-native";
import { FLASHCARD_MARGIN } from "../../constants";
import MyText from "../MyTexts/MyText";
import { cn } from "../../lib/tailwind";
import { backgroundSecondary, foregroundPrimary } from "../../theme/style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorage } from "../../lib/localStorage";

type Props = {
  children: ReactNode;
  title: string;
};

const HeaderCard: React.FC<Props> = ({ title, children }) => {
  const [hasSwipedCard, setHasSwipedCard] = useState(false);
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
        duration: 2000, // Duration of the animation
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

  useEffect(() => {
    async function shouldHideSwipeIndicator() {
      const hasSwipedCard = await AsyncStorage.getItem(
        LocalStorage.hasSwipedCard
      );
      if (hasSwipedCard === "true") {
        setHasSwipedCard(true);
      }
    }
    shouldHideSwipeIndicator();
  }, []);
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
        {/* <MyText className="text-lg font-semibold">{title}</MyText> */}
        <Text
          style={{
            fontSize: 24,
            color: foregroundPrimary,
            fontWeight: "500",
            marginBottom: 12,
            maxWidth: screenW,
          }}
        >
          {title}
        </Text>

        {!hasSwipedCard && (
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

            <MyText className="text-xs">Swipe</MyText>
          </View>
        )}
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            height: screenH * 0.7,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              padding: 16,
              paddingBottom: 24,
            }}
            style={{
              width: screenW - FLASHCARD_MARGIN * 2,
              backgroundColor: backgroundSecondary,
              borderRadius: 12,
            }}
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HeaderCard;
