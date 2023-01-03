import { createContext, useContext, useReducer } from "react";
import { HomePageReducer } from "../Functions";
import { HomepageProps, UpdateHomepageAction } from "../Types/Homepage.types";

type HomePageContextProviderProps = {
  children: React.ReactNode;
};

type HomepageContextType = {
  state: HomepageProps;
  dispatch: React.Dispatch<UpdateHomepageAction>;
};

const HomePageContext = createContext<HomepageContextType>(
  {} as HomepageContextType
);

export const useHomePage = () => useContext(HomePageContext);

const initialState = { notes: [], pinnedNotes: [] };
// const initialState = {};

export const HomePageContextProvider = ({
  children,
}: HomePageContextProviderProps) => {
  const [state, dispatch] = useReducer(HomePageReducer, initialState);

  return (
    <HomePageContext.Provider value={{ state, dispatch }}>
      {children}
    </HomePageContext.Provider>
  );
};
