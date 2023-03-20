import { useRef, useContext, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import InputUI from "../UI/inputs/InputUI";
import ButtonUI from "../UI/buttons/ButtonUI";
import { CurrentContext } from "../contexts/usersContext/CurrentUserContext";
import style from "./RegisterForm.module.scss";


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

  const inputReducer = (state: any, action: { type: any; payload: any; }) => {
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

const RegisterForm = () => {
  const userDataCtx = useContext(CurrentContext);
  const [inputValues, dispatch] = useReducer(inputReducer, initialInput);
  const [errMsg, setErrMsg] = useState({});

  
  

  const inputChangeHandler = (action: { type: any; payload: any; }) => {
    const {type, payload} = action
    dispatch(action)
    console.log(payload);
    console.log(type);
    
    
  }
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <h1 className={style.form__title}>建立您的帳號</h1>
      <div className={style.input__container}>
        <InputUI
          inputId="userName"
          inputName="姓名"
          inputPlaceHolder="怎麼稱呼您"
          inputType="text"
          inputValue={inputValues.userName}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="account"
          inputName="帳號"
          inputPlaceHolder="請輸入您的帳號"
          inputType="text"
          inputValue={inputValues.account}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="password"
          inputName="密碼"
          inputPlaceHolder="請輸入密碼"
          inputType="password"
          inputValue={inputValues.password}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="checkPassword"
          inputName="確認密碼"
          inputPlaceHolder="請再次輸入密碼"
          inputType="password"
          inputValue={inputValues.checkPassword}
          onChange={inputChangeHandler}
        />
      </div>

      <ButtonUI btnStyle="btn__pill__large" text="提交" />
      <div className={style.form__actions}>
        <Link to="/auth">
          <ButtonUI btnStyle="link" text="登入" />
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
