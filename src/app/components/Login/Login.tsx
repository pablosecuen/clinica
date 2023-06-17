import React, { useState } from "react";
import Image from "next/image";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import db from "../../../db";

interface LoginModalProps {
  closeModal: () => void;
}
function Login({ closeModal }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const usersQuery = query(
        collection(db, "users"),
        where("email", "==", email),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(usersQuery);

      if (querySnapshot.empty) {
        alert("Usuario no encontrado");
        return;
      }

      // Obtiene el primer documento del resultado de la consulta
      const userDoc = querySnapshot.docs[0];

      // Obtiene el ID del usuario
      const userId = userDoc.id;

      // Consulta el documento completo del usuario por su ID
      const userRef = doc(db, "users", userId);
      const userSnapshot = await getDoc(userRef);

      console.log(userSnapshot);

      if (userSnapshot.exists()) {
        // Obtiene los datos del usuario completo
        const userData = userSnapshot.data();
        console.log(userData);

        // Crea un objeto con los datos relevantes del usuario
        const userObject = {
          name: userData.name,
          lastName: userData.lastName,
          phone: userData.phone,
          email: userData.email,
          dni: userData.dni,
        };

        // Guarda el objeto del usuario en el localStorage
        localStorage.setItem("userData", JSON.stringify(userObject));

        alert("Ingresado exitosamente");
        closeModal();
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <section className=" absolute z-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleLogin} className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <div
              onClick={closeModal}
              className="text-white text-lg self-end w-full flex justify-end "
            >
              <button
                type="button"
                onClick={closeModal}
                className="border-2 rounded-full py-1 px-3 self-end"
              >
                x
              </button>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Ingrese sus datos
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm flex flex-col gap-4">
                    <label htmlFor="remember" className="text-gray-500  dark:text-gray-300">
                      Recuerdame
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-white hover:underline dark:text-primary-500"
                    >
                      Olvidaste la constraseña?
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Ingresar
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Aún no estas registrado??{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Registro
                </a>
              </p>
            </form>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
