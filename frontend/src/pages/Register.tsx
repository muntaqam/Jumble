// src/pages/Register.tsx

import { Link } from "react-router-dom";
import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import logo from "/logo.png";

const Register: React.FC = () => {
  return (
    <section className="bg-[#0da49d] font-adlam w-full py-20 text-white">
      <div className="mx-auto flex flex-col items-center px-6 lg:py-0">
        <label className="text-5xl pb-12">Jumble</label>

        <div className="w-full rounded-lg bg-[#b1dfbc] shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl leading-tight tracking-tight text-[#01585e] md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#01585e]"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  maxLength={50}
                  className="block w-full rounded-lg border bg-[#fcf8cf] p-2.5 text-sm text-[#01585e] outline-none placeholder-[#01685e] placeholder-opacity-30"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#01585e]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  maxLength={50}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border bg-[#fcf8cf] p-2.5 text-sm text-[#01585e] outline-none placeholder-[#01685e] placeholder-opacity-30"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-[#01585e]"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  maxLength={50}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border bg-[#fcf8cf] p-2.5 text-sm text-[#01585e] outline-none placeholder-[#01685e] placeholder-opacity-30"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <Checkbox />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-[#01685e] hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#01685e] px-5 py-2.5 text-center text-sm font-medium text-white transition duration-150 ease-in-out hover:brightness-90"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#01685e] hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
