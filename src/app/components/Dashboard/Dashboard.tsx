"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), { ssr: false });

type Appointment = {
  title: string;
  start: Date;
  end: Date;
};

function Dashboard() {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    // Load the Google API client library
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.onload = () => {
      setCalendarLoaded(true);
    };
    document.body.appendChild(script);
  }

  // Wait for the Google API client library to load before rendering the FullCalendar component
  if (!calendarLoaded) {
    return <div>Loading...</div>;
  }

  function handleDateSelect(selectInfo: any) {
    const title = prompt("Enter appointment title:");
    if (title) {
      const newAppointment: Appointment = {
        title,
        start: new Date(selectInfo.startStr),
        end: new Date(selectInfo.endStr),
      };
      setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    }
  }

  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div className="bg-blue-900 h-screen">
      <h1>Dashboard</h1>
      <div className="flex justify-center items-start w-1/2 h-full border-2">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          selectable={true}
          select={handleDateSelect}
          events={appointments}
          eventContent={renderEventContent}
        />
      </div>
    </div>
  );
}

export default Dashboard;
