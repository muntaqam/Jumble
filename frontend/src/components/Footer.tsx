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
      duration: 1500,
    });
  };

  return (
    <footer className="bg-[#373f51] py-8 text-white">
      <div className="container grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {/* Socials Section */}
        <div className="flex flex-col">
          <h2 className="mb-4 ml-12 text-xl font-semibold underline">MLKJ</h2>
          <div className="ml-12 flex space-x-6">
            <a
              href="https://github.com/Aziiimm/mlkj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl transition duration-150 ease-in-out hover:text-gray-400" />
            </a>
            <a
              href="https://discord.gg/hVrM87YGte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="text-3xl transition duration-150 ease-in-out hover:text-gray-400" />
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
              <FaLinkedin className="text-3xl transition duration-150 ease-in-out hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h2 className="mb-4 text-xl font-semibold underline">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/login" className="hover:text-gray-400 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:text-gray-400 hover:underline"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                className="hover:text-gray-400 hover:underline"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="hover:text-gray-400 hover:underline"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="mb-4 text-xl font-semibold underline">Contact Us</h2>
          <p className="text-md">Have questions? Reach out via email at:</p>
          <p
            className="text-md mt-2 cursor-pointer hover:text-gray-400 hover:underline"
            onClick={handleEmailClick}
          >
            azimrahat108@gmail.com
          </p>
        </div>
      </div>

      <div className="ml-12 mt-16 text-sm underline">
        <p>&copy; 2025 MLKJ</p>
      </div>
    </footer>
  );
};

export default Footer;
