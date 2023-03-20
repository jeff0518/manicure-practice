import { useRef, useContext, useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import InputUI from "../UI/inputs/InputUI";
import ButtonUI from "../UI/buttons/ButtonUI";
// import { CurrentContext } from "../contexts/usersContext/CurrentUserContext";
import style from "./RegisterForm.module.scss";

type RegisterPageProps = {
  inputValues: {  userName: string;
  account: string;
  password: string;
  checkPassword: string;};
  errorMessage: {};
  formIsValid: React.MutableRefObject<string>;
  inputChangeHandler: (action: { type: string; payload: string }) => void;
  submitHandler: (event: React.FormEvent) => void;
}

const RegisterForm = (props: RegisterPageProps) => {
  const errorMessage = props.errorMessage;
  console.log(errorMessage);
  
  return (
    <form className={style.form} onSubmit={props.submitHandler}>
      <h1 className={style.form__title}>建立您的帳號</h1>
      <div className={style.input__container}>
        <InputUI
          inputId="userName"
          inputName="姓名"
          inputPlaceHolder="怎麼稱呼您"
          inputType="text"
          inputValue={props.inputValues.userName}
          onChange={props.inputChangeHandler}
        />
        {props.formIsValid && (
          <p className={style.error}>{errorMessage.userName}</p>
        )}
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="account"
          inputName="帳號"
          inputPlaceHolder="請輸入您的帳號"
          inputType="text"
          inputValue={props.inputValues.account}
          onChange={props.inputChangeHandler}
        />
        {props.formIsValid && (
          <p className={style.error}>{errorMessage.account}</p>
        )}
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="password"
          inputName="密碼"
          inputPlaceHolder="請輸入密碼"
          inputType="password"
          inputValue={props.inputValues.password}
          onChange={props.inputChangeHandler}
        />
        {props.formIsValid && (
          <p className={style.error}>{errorMessage.password}</p>
        )}
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="checkPassword"
          inputName="確認密碼"
          inputPlaceHolder="請再次輸入密碼"
          inputType="password"
          inputValue={props.inputValues.checkPassword}
          onChange={props.inputChangeHandler}
        />
        {props.formIsValid && (
          <p className={style.error}>{errorMessage.checkPassword}</p>
        )}
      </div>

      <ButtonUI
        btnStyle="btn__pill__large"
        text="提交"
        disabled={!props.formIsValid ? true : false}
      />
      <div className={style.form__actions}>
        <Link to="/auth">
          <ButtonUI btnStyle="link" text="登入" />
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
