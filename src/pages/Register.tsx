import { useRef, useContext, useState, useReducer, useEffect } from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import {
  CurrentContext,
  GetCurrentUserContext,
} from "../components/contexts/usersContext/CurrentUserContext";

import style from "./Auth.module.scss";

const initialInput = {
  userName: "",
  account: "",
  password: "",
  checkPassword: "",
};

const actions = {
  userName: "userName",
  account: "account",
  password: "password",
  checkPassword: "checkPassword",
};

const inputReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case actions.userName:
      return { ...state, userName: action.payload };
    case actions.account:
      return { ...state, account: action.payload };
    case actions.password:
      return { ...state, password: action.payload };
    case actions.checkPassword:
      return { ...state, checkPassword: action.payload };
    default:
      return state;
  }
};
const Register = () => {
  const [inputValues, dispatch] = useReducer(inputReducer, initialInput);
  const [errorMessage, setErrorMessage] = useState({});
  const formIsValid = useRef("true");
  const currentCtx = useContext(CurrentContext);
  const getCurrentCtx = useContext(GetCurrentUserContext);

  const inputChangeHandler = (action: { type: string; payload: string }) => {
    const { type, payload } = action;
    dispatch(action);
  };

  const isValid = () => {
    setErrorMessage({});
    
    if (inputValues.userName.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        userName: "名稱不能空白!",
      }));
      formIsValid.current = "false";
    }
    if (inputValues.account.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        account: "帳號不能空白!",
      }));
      formIsValid.current = "false";
    }
    if (inputValues.password.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        password: "密碼不能空白!",
      }));
      formIsValid.current = "false";
    }
    if (inputValues.password.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        checkPassword: "密碼確認不能空白!",
      }));
      formIsValid.current = "false";
    }
  } 

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputValuesData = inputValues
    isValid()
    if (formIsValid.current !== "true") return;
    console.log('這裡是註冊頁：');
    console.log(inputValues);
    
    getCurrentCtx(inputValues);
  };
  console.log(currentCtx);
  
  return (
    <div className={style.container}>
      <RegisterForm
        inputValues={inputValues}
        errorMessage={errorMessage}
        formIsValid={formIsValid}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default Register;
