import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
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

const eventList = [
  {
    id: 1,
    title: "事件一",
    start: "2023-03-21 11:00:00" ,
    end: "2023-03-21 13:00:00",
  },
  {
    id: 2,
    title: "事件二",
    start: "2023-03-21 15:00:00",
    end: "2023-03-21 16:00:00",
  },
];

const Calendar = () => {
  const eventDateHandler = (info) => {
    let date = new Date()
    info.jsEvent.preventDefault();
    console.log(info);
    console.log(date);
    
    alert("Clicked on: " + info.el.fcSeg.start.toLocaleString());
    alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
    alert("Current view: " + info.view.type);
  };

  return (
    <StyleWrapper>
      <FullCalendar
        events={eventList}
        eventClick={(eventClickInfo) => eventDateHandler(eventClickInfo)}
        expandRows={true}
        allDaySlot={false}
        slotMinTime="10:00:00"
        slotMaxTime="20:00:00"
        editable={true}
        droppable={true}
        selectable
        dateClick={eventDateHandler}
        selectMirror={true}
        selectOverlap={false}
        headerToolbar={{
          start: "prev next today",
          center: "title",
          end: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        plugins={[timeGridPlugin, dayGridPlugin]}
        initialView="timeGridDay"
        locale="zh-tw"
        timeZone="local"
      />
    </StyleWrapper>
  );
};

export default Calendar;
