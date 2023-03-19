import ReserveForm from "../components/Reserve/ReserveForm";
import style from "./Auth.module.scss";
const Reserve = () => {
  return (
    <div className={style.container}>
      <ReserveForm title="預約系統" />
    </div>
  );
};

export default Reserve;
