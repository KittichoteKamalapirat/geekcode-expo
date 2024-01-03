import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error("error clearnign async storage");
  }
};
