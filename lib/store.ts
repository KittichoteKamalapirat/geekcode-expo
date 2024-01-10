/* eslint-disable @typescript-eslint/no-explicit-any */
import { create, GetState, SetState } from "zustand";
import flatten from "flat";
import { SuperMemoItem } from "supermemo";
export type IStoreSet<Props = Record<string, any>> = (
  keyOrObj: Partial<Props> | keyof Props,
  value?: any
) => void;

type PropsWithSet<Props = Record<string, any>> = Props & {
  set: IStoreSet<Props>;
};

export interface StudyHistory {
  slug: string;
  superMemoItem: SuperMemoItem;
  isoDueDate: string;
}
export type IStore = {
  app: PropsWithSet<{
    appIsReady: boolean;
  }>;
  user: PropsWithSet<{
    pronoun: string;
    countryCode: string;
    countryDisplay: string;
    id: string;
  }>;
  action: PropsWithSet<{
    completedLessons: string[];
  }>;
  study: PropsWithSet<{
    history: StudyHistory[] | null;
    questions: string[];
    isCompleteTodayGoal: boolean;
  }>;
};

export const useStore = create<IStore>(
  (set: SetState<IStore>, get: GetState<IStore>) => {
    function factorySetFunc<ContextObject = IStore>(
      prefixPath: keyof IStore,
      cb?: () => void
    ) {
      const _set: IStoreSet<Partial<Omit<ContextObject, "set">>> = (
        keyOrObj,
        value
      ) => {
        const state = get();
        const stateInContext = state[prefixPath];

        let flattenedObject: Record<string, any>;
        const isFirstParamObject =
          (keyOrObj as Record<string, any>)?.constructor?.name === "Object";
        if (isFirstParamObject) {
          flattenedObject = {
            [prefixPath]: {
              ...stateInContext,
              ...(keyOrObj as Record<string, any>),
            },
          };
        } else {
          if (value === undefined) {
            throw new Error(
              `set/${prefixPath}/${
                keyOrObj as string
              }: property name was provided but value is missing. Provide the value to be set.`
            );
          }
          const keyPath = `${keyOrObj as string}`.replace(/\.+/, ".");
          flattenedObject = {
            [prefixPath]: { ...stateInContext, [keyPath]: value },
          };
        }

        const unflattenedObject = flatten.unflatten(flattenedObject);
        set(unflattenedObject as IStore);
        cb?.();
      };

      return _set;
    }

    const store: IStore = {
      app: {
        set: factorySetFunc<IStore["app"]>("app"),
        appIsReady: false,
      },
      user: {
        set: factorySetFunc<IStore["user"]>("user"),
        id: "",
        pronoun: "",
        countryCode: "",
        countryDisplay: "",
      },
      action: {
        set: factorySetFunc<IStore["action"]>("action"),
        completedLessons: [],
      },
      study: {
        set: factorySetFunc<IStore["study"]>("study"),
        history: null,
        questions: [],
        isCompleteTodayGoal: false,
      },
    };

    return store;
  }
);
