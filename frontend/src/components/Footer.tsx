// src/components/Footer.tsx

import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

import { toast } from "@/hooks/use-toast";

const Footer: React.FC = () => {
  const handleEmailClick = () => {
    const email = "azimrahat108@gmail.com";
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard!",
      description: "Email address has been copied successfully.",
      duration: 800,
    });
  };

  return (
    <footer className="bg-[#01685e] py-16 font-adlam text-white">
      <div className="container grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {/* Socials Section */}
        <div className="ml-12 flex flex-col">
          {/* <img src={logo} className="mb-4 w-1/3" /> */}
          <label className="mb-4 text-3xl underline">Jumble</label>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Aziiimm/mlkj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl transition duration-150 ease-in-out hover:opacity-80" />
            </a>
            <a
              href="https://discord.gg/hVrM87YGte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="text-3xl transition duration-150 ease-in-out hover:opacity-80" />
            </a>
            <a
              href="https://www.linkedin.com/in/azim-rahat/"
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/azim-rahat/");
                window.location.href =
                  "https://www.linkedin.com/in/ivan-chen11/";
              }}
            >
              <FaLinkedin className="text-3xl transition duration-150 ease-in-out hover:opacity-80" />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="ml-12 md:ml-0">
          <h2 className="mb-4 text-xl underline">Navigation</h2>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-none">
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="hover:underline">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="ml-12 md:ml-0">
          <h2 className="mb-4 text-xl underline">Contact Us</h2>
          <div className="flex flex-col lg:flex-row">
            <p className="text-md">Have questions?&nbsp;</p>
            <p className="">Reach out via email:</p>
          </div>
          <p
            className="text-md mt-3 cursor-pointer hover:underline"
            onClick={handleEmailClick}
          >
            azimrahat108@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center text-sm underline sm:mr-24 sm:justify-end">
        <p>&copy; 2025 Jumble</p>
      </div>
    </footer>
  );
};

export default Footer;
