import React, {useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc-direction-ltr {
    height: 80vh;
  } 
  .fc .fc-toolbar.fc-header-toolbar {
    flex-direction: column;
    gap: 1rem;
  }

  .fc-view-harness .fc-view-harness-active {
    height: 70vh !important;
  }

  @media screen and (min-width: 820px) {
    .fc .fc-toolbar.fc-header-toolbar {
      flex-direction: row;
    }
  }
`;


const Calendar = () => {
  const [events, setEvents] = useState([]);
  return (
    <StyleWrapper>
      <FullCalendar
        expandRows={true}
        allDaySlot={false}
        slotMinTime="10:00:00"
        slotMaxTime="20:00:00"
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
    </StyleWrapper>
  );
}

export default Calendar