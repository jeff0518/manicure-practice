import style from './SelectUI.module.scss'

const SelectUI = (props) => {
  return (
    <label htmlFor={props.selectId} className={style.select__container}>
      <div className={style.select__label}>{props.selectName}</div>
      <select name={props.name} className={style.select} required>
        <option value="0">請選擇{props.selectName}</option>
        {props.data.map((data) => (
          <option value={data.value}>{data.title}</option>
        ))}
      </select>
    </label>
  );
}

export default SelectUI