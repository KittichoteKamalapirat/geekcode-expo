import { SafeAreaView, View } from "react-native";
import MyText from "../components/MyTexts/MyText";
import { Container } from "../components/containers/Container";

import LessonList from "../components/LessonList/LessonList";
import { cn } from "../lib/tailwind";

const HomeScreen = () => {
  return (
    <SafeAreaView style={cn`h-full bg-neutral-900 flex`}>
      <View />
      <View style={cn("mt-4")}>
        <MyText className="text-white text-center text-xl">
          Practice DSA everyday
        </MyText>
      </View>

      {/* Lessons */}
      <View>
        <Container>
          <LessonList />
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
