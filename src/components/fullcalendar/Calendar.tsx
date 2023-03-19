import React, {useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  return (
      <FullCalendar     
        expandRows={true}
        allDaySlot={false}
        slotMinTime="10:00:00"
        slotMaxTime="23:00:00"
        editable
        selectable
        events={events}
        headerToolbar={{
          start: "prev next today",
          center: "title",
          end: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        plugins={[timeGridPlugin, dayGridPlugin]}
        initialView="timeGridDay"
        locale="zh-tw"
      />
  );
}

export default Calendar