import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "../../lib/tailwind";
import Button from "../Buttons/Button";
import ScreenLayout from "../layouts/ScreenLayout";

export type Props = { error: Error; resetError: () => void };

const FallbackComponent = (props: Props) => (
  <ScreenLayout>
    <SafeAreaView style={tw`bg-white flex-1 justify-center`}>
      <View style={tw`mx-4`}>
        {/* <MaterialIcons
          name="error"
          size={72}
          color={primaryColor}
          style={tw`text-center`}
        /> */}
        <Text style={tw`text-center font-bold text-xl mt-2 text-black`}>
          Oops! There's an error
        </Text>
        <Text style={tw`text-center text-md mt-2`}>
          {props.error.toString()}
        </Text>

        <Button label="Try again" onPress={props.resetError} className="mt-4" />
      </View>
    </SafeAreaView>
  </ScreenLayout>
);

export default FallbackComponent;
