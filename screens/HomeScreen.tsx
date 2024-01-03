import { SafeAreaView, View } from "react-native";
import MyText from "../components/MyTexts/MyText";
import { Container } from "../components/containers/Container";

import LessonList from "../components/LessonList/LessonList";
import { cn } from "../lib/tailwind";

const HomeScreen = () => {
  return (
    <SafeAreaView style={cn`h-full bg-cream flex`}>
      <View
        style={cn(
          "bg-primary w-[600px] -left-[50px] h-[600px] -top-[100px] absolute rounded-full"
        )}
      />
      <View style={cn("mt-4")}>
        <MyText className="text-white text-center text-xl">
          Begin your language
        </MyText>
        <MyText className="text-white text-center text-xl">journey now.</MyText>
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
