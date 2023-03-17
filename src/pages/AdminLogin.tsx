import AuthForm from "../components/Auth/AuthForm";

import style from "./Auth.module.scss";
const AdminLogin = () => {
  return (
    <div className={style.container}>
      <AuthForm title="管理員登入" text="使用者登入"/>
    </div>
  );
};

export default AdminLogin;
