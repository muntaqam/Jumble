// src/pages/Error.tsx

import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 py-96 text-gray-700">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
      <p className="mt-2 text-lg text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-[#5C72E6] px-6 py-2 text-white transition duration-150 ease-in-out hover:bg-[#4050a1]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
