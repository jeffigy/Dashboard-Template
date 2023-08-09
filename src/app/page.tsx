"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
const localizer = momentLocalizer(moment);
import moment from "moment";
import event from "./event";
export default function Home() {
  return (
    <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2015, 3, 1)}
        views={{
          month: true,
        }}
      />
    </div>
  );
}
