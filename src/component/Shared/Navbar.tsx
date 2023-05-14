import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <React.Fragment>
      <li className="mr-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-300 font-semibold rounded-full px-3 py-1 text-green-700 hover:text-black hover:font-bold"
              : "text-white "
          }
          reloadDocument
        >
          Home
        </NavLink>
      </li>
      <li className="mr-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-slate-300 font-semibold rounded-full px-3 py-1 text-green-700 hover:text-black hover:font-bold"
              : "text-white hover:text-gray-300 "
          }
          to="/program"
        >
          Program
        </NavLink>
      </li>
      <li className="mr-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-slate-300 font-semibold rounded-full px-3 py-1 text-green-700 hover:text-black hover:font-bold"
              : "text-white hover:text-gray-300"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li className="mr-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-slate-300 font-semibold rounded-full px-3 py-1 text-green-700 hover:text-black hover:font-bold"
              : "text-white hover:text-gray-300"
          }
          to="/about"
        >
          About us
        </NavLink>
      </li>
      <li className="mr-10">
        <NavLink
          className="text-white bg-[#264373] py-[8px] px-6 rounded-xl hover:bg-black hover:text-gray-300 focus:outline-none focus:ring focus:ring-violet-300"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <>
      <nav className="p-4 flex justify-between shadow-lg bg-gradient-to-r from-slate-800 via-slate-700 to-green-700 hover:bg-gradient-to-l hover:from-slate-800 hover:via-slate-700 hover:to-green-700">
        <div>
          <NavLink
            to="/"
            className=" ml-4 text-2xl font-sportingG text-[#6765F0] cursor-pointer"
          >
            <span className="   text-white font-bold">City </span>
            University
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="font-poppins text-base flex justify-between">
            {menuItems}
          </ul>
        </div>
        <div className="mr-5 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="ml-8 mt-10 font-poppins">
          <li>
            <NavLink to="#">Home</NavLink>
          </li>
          <li className="mt-4">
            <NavLink to="#">Program</NavLink>
          </li>
          <li className="mt-4">
            <NavLink to="#">Blog</NavLink>
          </li>
          <li className="mt-4">
            <NavLink to="#">About us</NavLink>
          </li>
          <li className="mt-7">
            <li className="mr-10">
              <NavLink
                className="text-white bg-[#264373] py-[8px] px-6 rounded-xl hover:bg-black focus:outline-none focus:ring focus:ring-violet-300"
                to="#"
              >
                Login
              </NavLink>
            </li>
          </li>
        </ul>
      </Transition>
    </>
  );
};

export default Navbar;
