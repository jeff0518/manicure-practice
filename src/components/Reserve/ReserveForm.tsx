import InputUI from "../UI/inputs/InputUI"
import ButtonUI from "../UI/buttons/ButtonUI"
import SelectUI from "../UI/selects/SelectUI"
import style from './ReserveForm.module.scss'
const PEOPLE_DATA = [
  {
    id: "1",
    title: "1",
  },
  {
    id: "2",
    title: "2",
  },
  {
    id: "3",
    title: "3",
  },
  {
    id: "4",
    title: "4",
  },
];
const ReserveForm = (props) => {
  const timeData = [
    {
      id: "1",
      title: "12:00-01:00",
    },
    {
      id: "2",
      title: "01:00-03:00",
    },
    {
      id: "3",
      title: "03:00-06:00",
    },
    {
      id: "4",
      title: "06:00-08:00",
    },
  ];

  const servicerData = [{
    id: '1',
    title: 'jeff'
  }, {
    id: '2',
    title: 'tom'
  }]

  const itemData = [{
    id: '1',
    title: '光療美甲'
  }, {
    id: '2',
    title: '手部保養'
  }]
  return (
    <form className={style.form}>
      <h1 className={style.form__title}>{props.title}</h1>
      <div className={style.input__name}>
        <InputUI
          inputId="userName"
          inputName="姓名"
          inputPlaceHolder="請輸入姓名"
          inputType="text"
          inputValue=""
        />
      </div>
      <div className={style.input__phone}>
        <InputUI
          inputId="phone"
          inputName="聯絡電話"
          inputPlaceHolder="請輸入聯絡電話"
          inputType="tel"
          inputValue=""
        />
      </div>
      <div className={style.input__servicer}>
        <SelectUI
          selectId="servicer"
          selectName="服務人員"
          name="servicer"
          data={servicerData}
        />
      </div>
      <div className={style.input__item}>
        <SelectUI
          selectId="item"
          selectName="服務項目"
          name="item"
          data={itemData}
        />
      </div>
      <div className={style.input__people}>
        <SelectUI
          selectId="people"
          selectName="人數"
          name="people"
          data={PEOPLE_DATA}
        />
      </div>
      <div className={style.input__date}>
        <InputUI
          inputId="date"
          inputName="日期"
          inputType="date"
          inputValue=""
        />
      </div>
      <div className={style.input__time}>
        <SelectUI
          selectId="time"
          selectName="時間"
          name="time"
          data={timeData}
        />
      </div>
      <div className={style.input__btn}>
        <ButtonUI btnStyle="btn__pill__large" text="提交" />
      </div>
    </form>
  );
}

export default ReserveForm