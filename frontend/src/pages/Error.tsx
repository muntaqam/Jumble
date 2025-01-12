// src/pages/Error.tsx

import { Link } from "react-router-dom";
import React from "react";

const Error: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100 text-gray-700">
      {/* Error Code */}
      <h1 className="text-6xl font-bold">404</h1>
      {/* Error Message */}
      <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
      <p className="mt-2 text-lg text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 rounded-md bg-[#373f51] px-6 py-2 text-white transition duration-150 ease-in-out hover:bg-[#1c2029]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
