import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { StyleSheet, View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import IconButton from "../Buttons/IconButton";

interface Props {
  children: ReactNode;

  isOpen: boolean; // for observer, state is manage within this component itself
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BottomModalOnly = ({ isOpen, setIsOpen, children }: Props) => {
  // ref

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["1%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    setIsOpen(true);
    bottomSheetModalRef.current?.present();
  }, []);

  // when pressed outside
  const handleDismissModalPress = useCallback(() => {
    setIsOpen(false);
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 1) return setIsOpen(true);
    if (index === -1) return setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  // renders
  return (
    <BottomSheetModalProvider>
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

export default BottomModalOnly;
