// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

import logo from "/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#5C72E6] font-adlam text-white">
      <div className="flex items-center justify-between px-8 py-2">
        {/* left side (logo) */}
        <Link to="/" className="w-1/4 sm:w-1/6 md:w-1/12">
          <img src={logo} className="w-full object-scale-down" />
        </Link>

        {/* right side (login/avatar) */}
        <div className="space-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-lg border px-4 py-2 transition duration-150 ease-in-out hover:bg-[#4050a1]">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
