import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/styles.css";

function CalendarView() {
  return (
    <div className="card p-3 shadow-sm">
      <h6>Upcoming Events</h6>
      <Calendar />
    </div>
  );
}

export default CalendarView;
