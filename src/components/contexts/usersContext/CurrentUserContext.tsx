import { useState, createContext, ReactNode } from "react";

export type CurrentData = {
  id: string;
  account: string;
  password: string;
  userName: string;
  phone: string;
  addData: () => void;
  editData: (id: string) => void;
};

interface CurrentProps {
  children?: ReactNode;
}

export const CurrentContext = createContext<CurrentData | undefined>(undefined);
// const GetCurrentUserContext = createContext('');

export const CurrentUserContextProvider = (props: CurrentProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentData>();

  const addDataHandler = () => {}

  const editData = () => {}

  const contextValue: CurrentData = {
    id: currentUser?.id,
    account: currentUser?.account,
    password: currentUser?.password,
    userName: currentUser?.userName,
    phone: currentUser?.phone,
    addData: addDataHandler,
    editData: editData,
  };
  return (
    <CurrentContext.Provider value={contextValue}>
      {props.children}
    </CurrentContext.Provider>
  );
};
