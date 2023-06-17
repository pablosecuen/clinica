import { collection, getDocs } from "firebase/firestore";
import  db  from "../../db";

const getTurnos = async () => {
  try {
    const turnosSnapshot = await getDocs(collection(db, "turnos"));
    const turnos = turnosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return turnos;
  } catch (error) {
    console.error("Error al obtener los turnos:", error);
    throw new Error("Error al obtener los turnos");
  }
};

export default getTurnos;
