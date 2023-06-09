import style from "./InputUI.module.scss";

const InputUI: React.FC<{
  inputId: string;
  inputName: string;
  inputPlaceHolder: string;
  inputType: string;
  inputValue: string;
  onChange: (action: any) => void;
}> = (props) => {
  return (
    <>
      <label htmlFor={props.inputId} className={style.input__container}>
        <div className={style.input__label}>{props.inputName}</div>
        <input
          id={props.inputId}
          className={style.input}
          placeholder={props.inputPlaceHolder}
          type={props.inputType}
          value={props.inputValue}
          onChange={(e) =>
            props.onChange({ type: props.inputId, payload: e.target.value })
          }
        />
      </label>
    </>
  );
};

export default InputUI;
