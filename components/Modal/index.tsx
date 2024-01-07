import { AntDesign } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Alert, Modal, ScrollView, StyleSheet, View } from "react-native";
import { cn } from "../../lib/tailwind";
import { grey900 } from "../../theme/style";

interface Props {
  children: ReactNode;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyModal = ({ modalVisible, setModalVisible, children }: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* overlay */}
        <View style={styles.centeredView}>
          <AntDesign
            name="close"
            size={24}
            color="white"
            onPress={() => setModalVisible(!modalVisible)}
            style={cn("mr-4 mt-12")}
          />
          {/* actual box */}
          {/* Cannot set height directly in scroll view, need wrapper */}
          {/* https://stackoverflow.com/questions/49373417/react-native-scrollview-height-always-stays-static-and-does-not-change */}
          <View style={{ height: "80%" }}>
            <ScrollView
              style={{
                margin: 12,
                //   height: "60%",
                backgroundColor: grey900,
                borderRadius: 16,
                padding: 16,
                elevation: 5,
                borderColor: "white",
                borderWidth: 0.5,
              }}
              contentContainerStyle={{
                backgroundColor: grey900,
                paddingBottom: 48,

                alignItems: "flex-end",
              }}
            >
              <View style={cn("mt-4")}>{children}</View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // overlay
    position: "absolute",
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MyModal;
