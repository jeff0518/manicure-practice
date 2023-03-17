import RegisterForm from '../components/Auth/RegisterForm'

import style from "./Auth.module.scss";

const Register = () => {
  return (
    <div className={style.container}>
      <RegisterForm />
    </div>
  );
};

export default Register;
