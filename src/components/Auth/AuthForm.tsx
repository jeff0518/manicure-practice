
import InputUI from "../UI/inputs/InputUI";
import ButtonUI from "../UI/buttons/ButtonUI";

import style from "./AuthForm.module.scss";

const AuthForm = () => {
  return (
    <form className={style.form}>
      <h1 className={style.form__title}>登入</h1>
      <div className={style.input__container}>
        <InputUI
          inputId="account"
          inputName="帳號"
          name="帳號"
          inputType="text"
          inputValue=''
        />
      </div>
      <div className={style.input__container}>
        <InputUI
          inputId="password"
          inputName="密碼"
          name="密碼"
          inputType="password"
          inputValue=""
        />
      </div>
      <ButtonUI btnStyle="btn__pill__large" text="提交"/>
      <div className={style.form__actions}>   
        <ButtonUI btnStyle="link" text="註冊" />
        <ButtonUI btnStyle="link" text="後台登入"/>   
      </div>
    </form>

  );
};

export default AuthForm;
