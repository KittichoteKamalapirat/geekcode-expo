import React from "react";
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import logo from "../assets/images/logo.png";
import screenImage1 from "../assets/images/onboard-screen-1.jpg";
import screenImage2 from "../assets/images/onboard-screen-2.jpg";
import screenImage3 from "../assets/images/onboard-screen-3.jpg";
import OnboardingSlide from "../components/OnboardingSlide";
import { grey500, primaryColor, white } from "../theme/style";

export interface OnboardingInfo {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

const { width, height } = Dimensions.get("window");

const slides: OnboardingInfo[] = [
  {
    id: "1",

    image: screenImage1,
    title: "Welcome to Jocky",
    subtitle: "Request your favorite songs to a DJ at your fingertips.",
  },

  {
    id: "2",
    image: screenImage2,
    title: "Hosting an event?",
    subtitle: "Create an event and invite your guests",
  },
  {
    id: "3",
    image: screenImage3,
    title: "Joining an event?",
    subtitle: "Request your favorite song and enjoy the night!",
  },
  {
    id: "4",
    image: logo,
    title: "Song requests made easy",
    subtitle: "",
  },
];

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<null | FlatList>(null);
  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  // const goToNextSlide = () => {
  //   const nextSlideIndex = currentSlideIndex + 1;
  //   if (nextSlideIndex != slides.length) {
  //     const offset = nextSlideIndex * width;
  //     ref?.current?.scrollToOffset({ offset });
  //     setCurrentSlideIndex(currentSlideIndex + 1);
  //   }
  // };

  // const skip = () => {
  //   const lastSlideIndex = slides.length - 1;
  //   const offset = lastSlideIndex * width;
  //   ref?.current?.scrollToOffset({ offset });
  //   setCurrentSlideIndex(lastSlideIndex);
  // };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.05,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: primaryColor }}>
      <StatusBar backgroundColor={primaryColor} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.85 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <OnboardingSlide key={item.id} item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: grey500,
    marginHorizontal: 3,
    borderRadius: 2,
  },
});
export default OnboardingScreen;
