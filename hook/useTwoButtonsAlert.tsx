import alert from "../util/alert";

export const useTwoButtonAlert = (
  callback: (() => Promise<void>) | (() => void)
) =>
  alert("Are you sure?", "This action cannot be undone", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"), // TODO
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => callback(),
    },
  ]);
