import { doc, updateDoc } from "firebase/firestore";
import db from "../../db";
import { UpdatedData } from "./types";

const updateTurno = async (turnoId: string, updatedData: UpdatedData) => {
  try {
    const turnoRef = doc(db, "turnos", turnoId);
    await updateDoc(turnoRef, updatedData);
    console.log("Turno actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar el turno:", error);
    throw new Error("Error al actualizar el turno");
  }
};

export default updateTurno;