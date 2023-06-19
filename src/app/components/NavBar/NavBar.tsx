"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Login from "../Login/Login";
import Register from "../Register/Register";

function NavBar() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [userData, setUserData] = useState<{ name: string; lastName: string } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleIngresarClick = (e: any) => {
    e.preventDefault();
    openModal();
  };

  const handleRegistrarClick = (e: any) => {
    e.preventDefault();
    openModal2();
  };

  const fetchUserData = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsScrolled(currentPosition > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`border-gray-200 flex justify-between w-screen px-4 z-50 fixed -top-0 ${
          isScrolled ? "bg-slate-100 transition duration-700" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between w-full mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            {/* <Image
              width={100}
              height={100}
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl  whitespace-nowrap dark:text-white">Clinica</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border text-lg border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0  ${
                    isScrolled ? "text-blue-600" : "dark:text-white md:dark:text-white"
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0  ${
                    isScrolled ? "text-blue-600" : "dark:text-white md:dark:text-white"
                  }`}
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={handleIngresarClick}
                  className={`block py-2 pl-3 pr-4 rounded md:p-0  ${
                    isScrolled ? "text-blue-600" : "dark:text-white md:dark:text-white"
                  }`}
                >
                  Ingresar
                </button>
              </li>
              <li>
                <button
                  onClick={handleRegistrarClick}
                  className={`block py-2 pl-3 pr-4 rounded md:p-0  ${
                    isScrolled ? "text-blue-600" : "dark:text-white md:dark:text-white"
                  }`}
                >
                  Registrarse
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0  ${
                    isScrolled ? "text-blue-600" : "dark:text-white md:dark:text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
            {userData && ( // Render user icon if user data is available
              <div className="flex items-center">
                <span className="mr-2 text-gray-600 text-md pt-4">
                  Bienvenido/a, {userData.name} {userData.lastName}
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <>
          <div className="absolute inset-0 flex items-center z-40 justify-center bg-black/60"></div>
          <div className="modal-overlay z-50">
            <div className="modal absolute inset-0 flex items-center z-50 justify-center  h-screen ">
              <Login closeModal={closeModal} />
              <div
                className="absolute inset-0 flex items-center z-40 justify-center "
                onClick={closeModal}
              ></div>
            </div>
          </div>
        </>
      )}
      {isModalOpen2 && (
        <>
          <div className="absolute inset-0 flex items-center z-40 justify-center h-screen bg-black/60"></div>
          <div className="modal-overlay z-50">
            <div className="modal absolute inset-0 flex items-center z-50 justify-center h-screen ">
              <Register closeModal2={closeModal2} />
              <div
                className="absolute inset-0 flex items-center z-40 justify-center "
                onClick={closeModal2}
              ></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
