import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import tw from "../../lib/tailwind";
import { primaryColor } from "../../theme/style";

interface Props {
  step: number;
  steps: number;
  height: number;
}
const ProgressBar = ({ steps, step, height }: Props) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const newWidth = -width + (width * step) / steps; // 0 when complete (ex. 5/5)
    reactive.setValue(newWidth);
  }, [step, width]);
  return (
    <>
      <Text style={tw`text-center mb-2 text-md`}>
        {step}/{steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height,
            width: "100%",
            borderRadius: height,
            backgroundColor: primaryColor,
            position: "absolute",
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};

export default ProgressBar;
