import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/calendar.css";

function Calendar() {
  const [events, setEvents] = useState([
    { title: "Hackathon", date: "2025-04-05" },
    { title: "Elite Night", date: "2025-05-18" },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <div className="container mt-4">
      <h4>📅 Club Event Calendar</h4>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
      />
    </div>
  );
}

export default Calendar;
