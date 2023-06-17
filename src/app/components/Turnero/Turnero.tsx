"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { getFirestore, collection, addDoc } from "firebase/firestore";

interface AppointmentData {
  apellido: string; // Add the appropriate value
  dia: string;
  dni: string; // Add the appropriate value
  hora: string;
  mail: string;
  mes: string;
  nombre: string;
  telefono: string;
}
// Include other properties as needed (e.g., userData properties)

function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<{ value: string; label: string } | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: { value: string; label: string } | null) => {
    setSelectedTime(time);
  };

  async function saveAppointment(appointmentData: AppointmentData) {
    try {
      const firestore = getFirestore();
      await addDoc(collection(firestore, "turnos"), appointmentData);
      alert("Appointment saved successfully!");
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  const handleAppointmentSubmit = () => {
    if (selectedDate && selectedTime) {
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");
      const appointmentData: AppointmentData = {
        apellido: userData.lastName || "", // Add the appropriate value
        dia: selectedDate.getDate().toString(),
        dni: userData.dni || "", // Add the appropriate value
        hora: selectedTime.value,
        mail: userData.email || "",
        mes: (selectedDate.getMonth() + 1).toString(),
        nombre: userData.name || "",
        telefono: userData.phone || "",
      };

      saveAppointment(appointmentData)
        .then(() => {
          alert("Appointment saved successfully!");
        })
        .catch((error) => {
          console.error("Error saving appointment:", error);
        });
    } else {
      alert("Please select a date and time for the appointment.");
    }
  };

  const timeOptions: { value: string; label: string }[] = [
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "13:00 PM" },
    { value: "14:00", label: "14:00 PM" },
    { value: "15:00", label: "15:00 PM" },
    { value: "16:00", label: "16:00 PM" },
    { value: "17:00", label: "17:00 PM" },
    { value: "18:00", label: "18:00 PM" },
    // Add more time options as needed
  ];

  return (
    <div className="w-96 h-96 bg-white rounded-xl p-8">
      <h2>Select Appointment Date and Time:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select Date"
        className="h-9 pl-2 border w-80 border-black/20 text-black cursor-pointer"
      />
      <Select
        options={timeOptions}
        value={selectedTime}
        onChange={handleTimeChange}
        placeholder="Select Time"
      />
      <button
        onClick={handleAppointmentSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book Appointment
      </button>
    </div>
  );
}

export default AppointmentCalendar;
