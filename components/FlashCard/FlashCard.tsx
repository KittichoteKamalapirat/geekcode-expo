import React, { useRef, useState } from "react";
import { Animated, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import OneSideCard from "./OneSideCard";
import { cn } from "../../lib/tailwind";

interface Props {
  front: string;
  back: string;
}
const FlashCard = ({ front, back }: Props) => {
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);

  const doAFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const interpolatedValueFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const interpolatedValueBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const rotateFront = {
    transform: [
      {
        rotateY: interpolatedValueFront,
      },
    ],
  };

  const rotateBack = {
    transform: [
      {
        rotateY: interpolatedValueBack,
      },
    ],
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={cn("xxxxx")}>
        <Animated.View style={[styles.hidden, rotateFront]}>
          <OneSideCard title={front} onPress={doAFlip} />
        </Animated.View>
        <Animated.View style={[styles.hidden, styles.back, rotateBack]}>
          <OneSideCard title={back} onPress={doAFlip} />
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // marginTop: 10,
    // alignItems: "center",
    width: "100%",
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
  back: {
    position: "absolute",
    top: 0,
  },
});

export default FlashCard;
