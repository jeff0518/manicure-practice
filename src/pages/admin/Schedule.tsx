import Calendar from '../../components/fullcalendar/Calendar';
import style from './Schedule.module.scss'

const Schedule = () => {
  return (
    <div className={style.container}>
        <Calendar />
    </div>
  );
};

export default Schedule;
