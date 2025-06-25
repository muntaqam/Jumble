// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="font-adlam text-white">
      <div className="flex items-center justify-between px-8 py-6">
        {/* left side (logo) */}
        <Link
          to="/"
          className="w-1/4 text-3xl sm:w-1/6 md:w-1/12 md:text-4xl lg:text-5xl"
        >
          Jumble
        </Link>

        {/* right side (login/avatar) */}
        <div className="space-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-xl bg-[#01685e] px-5 py-2 shadow-lg transition duration-150 ease-in-out hover:brightness-90 lg:text-lg">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
