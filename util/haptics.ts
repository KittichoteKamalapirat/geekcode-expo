import * as Haptics from "expo-haptics";

export const lightImpact = () =>
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
export const mediumImpact = () =>
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
export const heavyImpact = () =>
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

export const successImpact = () =>
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
export const errorImpact = () =>
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
export const warningImpact = () =>
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
