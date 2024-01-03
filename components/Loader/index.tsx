import { ActivityIndicator, View } from "react-native";
import ScreenLayout from "../layouts/ScreenLayout";
import MyText from "../MyTexts/MyText";
import { cn } from "../../lib/tailwind";

interface Props {
  isFullScreen?: boolean;
  label?: string;
}
const Loader = ({ isFullScreen = false, label }: Props) => {
  if (isFullScreen)
    return (
      <ScreenLayout className="flex flex-col items-center gap-4">
        <ActivityIndicator size="large" />
        {label && <MyText>{label}</MyText>}
      </ScreenLayout>
    );
  return (
    <View style={cn("flex flex-col gap-2 items-center")}>
      <ActivityIndicator size="large" />
      {label && <MyText>{label}</MyText>}
    </View>
  );
};

export default Loader;
