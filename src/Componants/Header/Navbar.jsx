import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 font-bold">Home</li>
      </Link>
      <Link to="/about">
        <li className="m-2  font-bold">About</li>
      </Link>
      <Link to="/readlist">
        <li className="m-2 font-bold"> Readlist </li>
      </Link>
    </>
  );
  return (
    <div
      className="
  sticky top-0 z-50
  bg-base-100/60 backdrop-blur-2xl
  border-b border-white/10
  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
"
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="navbar-start gap-2">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="
            btn btn-ghost lg:hidden
            rounded-full
            hover:bg-white/10
            transition
          "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="
            menu menu-sm dropdown-content mt-4 w-64
            rounded-3xl
            bg-base-100/90 backdrop-blur-2xl
            p-4 shadow-2xl
            ring-1 ring-white/10
          "
            >
              {links}
            </ul>
          </div>

          {/* LOGO */}
          <a className="flex items-center gap-1 text-2xl font-black tracking-wide">
            <span
              className="
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent
        "
            >
              Boi
            </span>
            <span className="text-primary">Poka</span>
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 font-medium">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          {/* 🔮 LOGIN BUTTON (GLASS + GLOW) */}
          <button
            className="
        hidden sm:flex items-center gap-2
        px-5 py-2 rounded-full
        bg-white/10 backdrop-blur-xl
        border border-white/20
        text-sm font-medium
        hover:bg-white/20
        hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]
        transition-all duration-300
      "
          >
            ✨ Login
          </button>

          {/* 🚀 CTA BUTTON */}
          <button
            className="
        relative px-7 py-2.5 rounded-full
        font-semibold text-white
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
        hover:scale-105
        hover:shadow-[0_15px_40px_rgba(168,85,247,0.6)]
        transition-all duration-300
      "
          >
            Get Started
            <span
              className="
          absolute inset-0 rounded-full
          bg-white/20 blur-xl opacity-0
          hover:opacity-100 transition
        "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
