import { google } from 'googleapis';
import privatekey from '../../credentials.json';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const auth = new google.auth.GoogleAuth({
  credentials: privatekey,
  scopes: SCOPES,
});

const calendar = google.calendar({ version: 'v3', auth });

async function createEvent() {
  const event = {
    summary: 'Evento de prueba',
    start: {
      dateTime: '2023-06-18T10:00:00', // Fecha y hora de inicio del evento
      timeZone: 'America/New_York', // Zona horaria del evento
    },
    end: {
      dateTime: '2023-06-18T11:00:00', // Fecha y hora de finalización del evento
      timeZone: 'America/New_York', // Zona horaria del evento
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary', // ID del calendario, por defecto 'primary' para el calendario principal
      requestBody: event,
    });

    console.log('Evento creado:', response.data);
  } catch (error) {
    console.error('Error al crear el evento:', error);
  }
}

createEvent();
