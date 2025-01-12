// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#373f51] text-white">
      <div className="flex justify-between px-8 py-5">
        {/* left side (logo) */}
        <Link to="/" className="text-2xl font-bold">
          MLKJ
        </Link>

        {/* right side (for redirection) */}
        <div className="hidden space-x-8 md:flex">
          <Link to="/login">
            <button className="rounded-lg border px-8 py-2 font-semibold transition duration-150 ease-in-out hover:bg-[#1c2029]">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="rounded-lg border px-8 py-2 font-semibold transition duration-150 ease-in-out hover:bg-[#1c2029]">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
