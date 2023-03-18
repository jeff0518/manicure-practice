import { Link, useLocation } from "react-router-dom";
import InputUI from "../UI/inputs/InputUI";
import ButtonUI from "../UI/buttons/ButtonUI";

import style from "./AuthForm.module.scss";

const AuthForm: React.FC<{ title: string; text: string }> = (props) => {
  const toLink = useLocation();

  return (
    <form className={style.form}>
      <h1 className={style.form__title}>{props.title}</h1>
      <div className={style.input__container}>
        <InputUI
          inputId="account"
          inputName="帳號"
          inputPlaceHolder="請輸入帳號"
          inputType="text"
          inputValue=""
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="password"
          inputName="密碼"
          inputPlaceHolder="請輸入密碼"
          inputType="password"
          inputValue=""
        />
      </div>
      <ButtonUI btnStyle="btn__pill__large" text="提交" />
      <div className={style.form__actions}>
        <Link to="/register">
          {toLink.pathname === "/auth" && (
            <ButtonUI btnStyle="link" text="註冊" />
          )}
        </Link>
        <Link to={toLink.pathname === "/admin" ? "/auth" : "/admin"}>
          <ButtonUI btnStyle="link" text={props.text} />
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
