import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, { ReactNode, useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import IconButton from "../Buttons/IconButton";
import tw from "../../lib/tailwind";

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
  const snapPoints = useMemo(() => ["1%", "100%"], []);

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
    <BottomSheetModalProvider>
      {/* <TouchableOpacity onPress={handlePresentModalPress}>
        {icon}
      </TouchableOpacity> */}

      {!isOpen && (
        <IconButton
          icon={icon}
          onPress={handlePresentModalPress}
          variant="NAKED"
          style="mx-0"
        />
      )}

      <OutsidePressHandler
        disabled={false}
        onOutsidePress={() => {
          handleDismissModalPress();
        }}
      >
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose
            enableOverDrag
            detached
            topInset={-200}
            bottomInset={0}
            style={tw`bg-blue-200 p-10`}
          >
            <View style={styles.contentContainer}>{children}</View>
          </BottomSheetModal>
        </View>
      </OutsidePressHandler>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    zIndex: 30,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomModal;
