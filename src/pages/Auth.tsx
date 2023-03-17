import AuthForm from "../components/Auth/AuthForm";

import style from './Auth.module.scss'
const Auth = () => {
  return (
    <div className={style.container}>
      <AuthForm title="登入" text="管理者登入" />
    </div>
  );
};

export default Auth;
