import { ObjectKeys, ObjectValues } from "../types";

export const LocalStorage = {
  userId: "userId",
  userCountryCode: "userCountryCode",
  userPronoun: "userPronoun",
  // completedLessons: "completedLessons",
  studyHistory: "studyHistory",
  hasSwipedCard: "hasSwipedCard",
  dailyGoals: "dailyGoals",
} as const;

export type LocalStorageKeys = ObjectKeys<typeof LocalStorage>;
export type LocalStorageValues = ObjectValues<typeof LocalStorage>;
