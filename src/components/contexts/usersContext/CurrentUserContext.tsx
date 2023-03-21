import { useState, createContext, ReactNode } from "react";
import { inputProps } from "../../Auth/RegisterForm";
import { nanoid } from "nanoid";

export type CurrentData = {
  id: string;
  account: string;
  password: string;
  userName: string;
  phone: string;
  addData?: (item: inputProps) => void;
  editData?: (id: string) => void;
};

interface CurrentProps {
  children?: ReactNode;
}

export const CurrentContext = createContext();
export const GetCurrentUserContext = createContext();

export const CurrentUserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState([]);

  const addUserData = (item) => {
    console.log("this is currentCtx:");
    console.log(currentUser);

    console.log(item);
    const userId = nanoid(5);
    setCurrentUser([
      ...currentUser,
      {
        id: userId,
        userName: item.userName,
        account: item.account,
        password: item.password,
      },
    ]);
  };

  // const contextValue: CurrentData = {
  //   id: currentUser?.id,
  //   account: currentUser?.account,
  //   password: currentUser?.password,
  //   userName: currentUser?.userName,
  //   phone: currentUser?.phone,
  //   addData: addDataHandler,
  //   editData: editData,
  // };
  return (
    <CurrentContext.Provider value={currentUser}>
      <GetCurrentUserContext.Provider value={(item) => addUserData(item)}>
        {props.children}
      </GetCurrentUserContext.Provider>
    </CurrentContext.Provider>
  );
};
