// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#5C72E6] text-white shadow-2xl">
      <div className="flex items-center justify-between px-8 py-2">
        {/* left side (logo) */}
        <Link to="/" className="text-2xl font-bold">
          MLKJ
        </Link>

        {/* right side (for redirection) */}
        <div className="space-x-4 md:flex">
          <Link to="/login">
            <button className="rounded-lg border px-4 py-2 font-semibold transition duration-150 ease-in-out hover:bg-[#4050a1]">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
