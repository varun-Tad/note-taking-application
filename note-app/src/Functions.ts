import { HomepageProps, UpdateHomepageAction } from "./Types/Homepage.types";

export const HomePageReducer = (
  state: HomepageProps,
  action: UpdateHomepageAction
) => {
  switch (action.type) {
    case "addNote":
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: action.titlePayload, content: action.ContentPayload },
        ],
      };
    case "removeNote":
      return {};
    case "addPinnedNote":
      return {};
    case "removePinnedNote":
      return {};
    case "deleteNote":
      return {};
    case "deletePinnedNote":
      return {};
  }
};
