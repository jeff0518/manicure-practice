import { Link } from "react-router-dom";
import InputUI from "../UI/inputs/InputUI";
import ButtonUI from "../UI/buttons/ButtonUI";

import style from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <form className={style.form}>
      <h1 className={style.form__title}>建立您的帳號</h1>
      <div className={style.input__container}>
        <InputUI
          inputId="userName"
          inputName="名稱"
          name="名稱"
          inputPlaceHolder="怎麼稱呼您"
          inputType="text"
          inputValue=""
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="account"
          inputName="帳號"
          name="帳號"
          inputPlaceHolder="請輸入您的帳號"
          inputType="text"
          inputValue=""
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="password"
          inputName="密碼"
          name="密碼"
          inputPlaceHolder="請輸入密碼"
          inputType="password"
          inputValue=""
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="checkPassword"
          inputName="確認密碼"
          name="確認密碼"
          inputPlaceHolder="請再次輸入密碼"
          inputType="password"
          inputValue=""
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
