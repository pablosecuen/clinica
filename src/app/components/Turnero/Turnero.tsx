"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const AppointmentCalendar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.addEventListener("load", () => {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/clinica-341/turno?hide_gdpr_banner=1/",
        parentElement: document.getElementById("calendly-container"),
        prefill: {},
        utm: {},
        style: {
          minWidth: "320px",
          height: "880px",
          /* Agrega aquí tus estilos personalizados */
          backgroundColor: "#f2f2f2",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        },
      });
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="calendly-container" className="w-full h-full"></div>;
};

const MemoizedAppointmentCalendar = React.memo(AppointmentCalendar);

export default MemoizedAppointmentCalendar;
