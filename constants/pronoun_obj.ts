import { ObjectKeys, ObjectValues } from "../types";

export const Pronoun = {
  she: "she/her",
  he: "he/him",
} as const;

export type PronounValues = ObjectKeys<typeof Pronoun>;
export type PronounLabels = ObjectValues<typeof Pronoun>;

interface PronounOption {
  value: PronounValues;
  label: PronounLabels;
}
export const PronounOptions: PronounOption[] = Object.keys(Pronoun).map(
  (key) => ({
    value: key as PronounValues,
    label: Pronoun[key as PronounValues],
  })
);
