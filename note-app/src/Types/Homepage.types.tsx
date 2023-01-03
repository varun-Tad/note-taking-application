export type HomepageProps = {
  notes:
    | []
    | {
        title: string;
        content: string;
        label?: string;
        labelExists?: boolean;
      }[];
  pinnedNotes:
    | []
    | {
        title: string;
        content: string;
        label?: string;
        labelExists?: boolean;
      }[];
};

export type UpdateHomepageAction = {
  type:
    | "addNote"
    | "removeNote"
    | "addPinnedNote"
    | "removePinnedNote"
    | "deleteNote"
    | "deletePinnedNote";

  titlePayload: string;
  ContentPayload: string;
  labelPayload?: string;
  labelExistsPayload?: boolean;
};
