// src/pages/Login.tsx

import { Link } from "react-router-dom";
import React from "react";

import logo from "/logo.png";

const Login: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 font-adlam sm:py-32 md:py-40 lg:py-60">
      <div className="mx-auto flex flex-col items-center px-6 lg:py-0">
        <img className="mb-6 w-7/12 sm:w-1/3 lg:w-1/6" src={logo} alt="logo" />
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-1 outline-[#4050a1]"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-1 outline-[#4050a1]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#5C72E6] px-5 py-2.5 text-center text-sm font-medium text-white outline-1 outline-[#4050a1] transition duration-150 ease-in-out hover:bg-[#4050a1]"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-[#5C72E6] hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
