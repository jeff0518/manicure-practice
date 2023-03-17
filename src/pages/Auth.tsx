import AuthForm from "../components/Auth/AuthForm";

import style from './Auth.module.scss'
const Auth = () => {
  return (
    <div className={style.container}>
      <AuthForm />
    </div>
  );
};

export default Auth;
