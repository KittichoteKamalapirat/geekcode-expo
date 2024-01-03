import { ObjectKeys, ObjectValues } from "../types";

export const LocalStorage = {
  userId: "userId",
  userCountryCode: "userCountryCode",
  userPronoun: "userPronoun",
  completedLessons: "completedLessons",
} as const;

export type LocalStorageKeys = ObjectKeys<typeof LocalStorage>;
export type LocalStorageValues = ObjectValues<typeof LocalStorage>;
