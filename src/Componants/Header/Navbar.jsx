import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to='/'><li className="m-2 font-bold">Home</li></Link>
      <Link to='/about'>
        <li className="m-2  font-bold">About</li>
      </Link>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-lg px-4 lg:px-8">
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-base-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl bg-base-100 p-3 shadow-xl"
          >
            {links}
          </ul>
        </div>

        {/* LOGO */}
        <a className="btn btn-ghost text-2xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Boi
          </span>
          <span className="ml-1 text-primary">Poka</span>
        </a>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-[15px] font-medium">
          {links}
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost rounded-full hidden sm:flex">
          Login
        </button>

        <button className="btn rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-all duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
