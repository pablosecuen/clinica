import { doc, getDoc } from "firebase/firestore";
import  db  from "../../db";

const getTurno = async (turnoId:string) => {
  try {
    const turnoRef = doc(db, "turnos", turnoId);
    const turnoSnapshot = await getDoc(turnoRef);
    
    if (turnoSnapshot.exists()) {
      const turno = {
        id: turnoSnapshot.id,
        ...turnoSnapshot.data(),
      };
      return turno;
    } else {
      throw new Error("No se encontró el turno con el ID proporcionado");
    }
  } catch (error) {
    console.error("Error al obtener el turno:", error);
    throw new Error("Error al obtener el turno");
  }
};

export default getTurno;
