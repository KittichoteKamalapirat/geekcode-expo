import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, { ReactNode, useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OutsidePressHandler from "react-native-outside-press";
import tw from "../../lib/tailwind";
import IconButton from "../Buttons/IconButton";
import MyText from "../MyTexts/MyText";

interface Props {
  children: ReactNode;
  icon: ReactNode;
  isOpen: boolean; // for observer, state is manage within this component itself
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BottomModal = ({ isOpen, setIsOpen, children, icon }: Props) => {
  // ref

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["1%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    setIsOpen(true);
    bottomSheetModalRef.current?.present();
  }, []);

  // when pressed outside
  const handleDismissModalPress = useCallback(() => {
    console.log("outside");
    setIsOpen(false);
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 1) return setIsOpen(true);
    if (index === -1) return setIsOpen(false);
  }, []);

  // renders
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          {!isOpen && (
            <IconButton
              icon={icon}
              onPress={handlePresentModalPress}
              variant="NAKED"
            />
          )}

          <MyText>yyy</MyText>
          <OutsidePressHandler
            disabled={false}
            onOutsidePress={() => {
              handleDismissModalPress();
            }}
          >
            <View>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose
                enableOverDrag
                detached
                topInset={0}
                bottomInset={0}
                style={tw`bg-blue-200 p-10`}
              >
                <View style={styles.contentContainer}>{children}</View>
              </BottomSheetModal>
            </View>
          </OutsidePressHandler>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomModal;
