// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="font-adlam text-white">
      <div className="flex items-center justify-between px-8 py-2">
        {/* left side (logo) */}
        <Link to="/" className="w-1/4 text-3xl sm:w-1/6 md:w-1/12">
          Jumble
        </Link>

        {/* right side (login/avatar) */}
        <div className="space-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-xl bg-[#01685e] px-4 py-2 transition duration-150 ease-in-out hover:brightness-90">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
