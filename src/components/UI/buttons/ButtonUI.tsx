import style from "./ButtonUI.module.scss";

const ButtonUI: React.FC<{btnStyle: string, text: string, onClick: () => void}> = (props) => {
  return (
    <>
      <button className={style[props.btnStyle]} onClick={props.onClick}>
        <p>{props.text}</p>
      </button>
    </>
  );
};

export default ButtonUI;
