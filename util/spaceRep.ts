import dayjs from "dayjs";
import { SuperMemoGrade, SuperMemoItem, supermemo } from "supermemo";

export const practiceSr = (flashcard: SuperMemoItem, grade: SuperMemoGrade) => {
  const superMemoItem = supermemo(flashcard, grade);
  const dueDate = dayjs(Date.now())
    .add(superMemoItem.interval, "day")
    .toISOString();

  return { superMemoItem, isoDueDate: dueDate };
};
