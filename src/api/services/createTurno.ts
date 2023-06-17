
import { addDoc, collection } from "firebase/firestore";
import  db from "../../db";
import {Turno} from "./types";


const createTurno = async (newTurno: Turno) => {
  try {
    // Agregar el nuevo turno a la colección "turnos" en Firebase
    await addDoc(collection(db, "turnos"), newTurno);
    console.log("Turno creado exitosamente");
  } catch (error) {
    console.error("Error al crear el turno:", error);
    throw new Error("Error al crear el turno");
  }
};

export default createTurno;