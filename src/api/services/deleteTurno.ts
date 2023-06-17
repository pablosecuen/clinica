import { deleteDoc, doc } from "firebase/firestore";
import  db  from "../../db";

const deleteTurno = async (turnoId:string) => {
  try {
    const turnoRef = doc(db, "turnos", turnoId);
    await deleteDoc(turnoRef);
    console.log("Turno cancelado exitosamente");
  } catch (error) {
    console.error("Error al cancelar el turno:", error);
    throw new Error("Error al cancelar el turno");
  }
};

export default deleteTurno;
