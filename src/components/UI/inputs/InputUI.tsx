import style from "./InputUI.module.scss";

const InputUI: React.FC<{
  inputId: string;
  inputName: string;
  name: string;
  inputType: string;
  inputValue: string;
  onChange: () => void;
}> = (props) => {
  return (
    <>
      <label htmlFor={props.inputId} className={style.input__container}>
        <div className={style.input__label}>{props.inputName}</div>
        <input
          id={props.inputId}
          name={props.name}
          className={style.input}
          type={props.inputType}
          value={props.inputValue}
          onChange={props.onChange}
        ></input>
      </label>
    </>
  );
};

export default InputUI;
