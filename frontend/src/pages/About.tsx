// src/pages/About.tsx

import React from "react";
import Rahat from "../assets/images/rahat.jpg";
import Ivan from "../assets/images/ivan.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

const About: React.FC = () => {
  return (
    <div className="font-adlam bg-[#0da49d] text-white">
      {/* about us section */}
      <section className="flex flex-col bg-[#01685e] p-20 shadow-md md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-4xl md:text-start">About Us</h1>
          <p className="mb-4 mt-4 text-center text-lg md:mb-0 md:text-start">
            Welcome to <strong>Jumble!</strong> We're a small group of friends
            dedicated to building a fun and engaging party game platform.
          </p>
        </div>
        <div className="flex w-fit justify-end">
          <img
            src="https://www.thesprucepets.com/thmb/s-wcx5m6Sg6y8r3EFrYfikLqJIg=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txpba7ef914jvq100_Medium_1493631-5a8ef3d404d1cf003616d6f3.jpg"
            alt="About Us"
            className="object-cover shadow-xl sm:mt-6 md:mt-0 md:w-11/12 lg:w-2/3"
          />
        </div>
      </section>

      {/* mission section */}
      <section className="p-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-fit justify-center md:justify-start">
            <img
              src="https://www.thesprucepets.com/thmb/s-wcx5m6Sg6y8r3EFrYfikLqJIg=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txpba7ef914jvq100_Medium_1493631-5a8ef3d404d1cf003616d6f3.jpg"
              alt="Our Mission"
              className="md:5/6 w-11/12 object-cover shadow-xl"
            />
          </div>
          <div className="mt-8 flex w-11/12 flex-col justify-center md:mt-0">
            <h2 className="text-center text-3xl md:text-start">Our Mission:</h2>
            <h2 className="text-center text-3xl md:text-start">
              Creating a Fun Platform for Friends Worldwide
            </h2>
            <p className="mt-4 text-center  md:text-start">
              At the core of our mission is the belief in the power of games to
              bring people together and have fun. We aim to build a platform
              where friend groups worldwide can find something to enjoy and
              laugh at.
            </p>
          </div>
        </div>
      </section>

      {/* our story section */}
      <section className="flex flex-col px-20 pb-20 lg:flex-row">
        <div className="flex flex-col justify-center md:justify-start lg:flex-row">
          <div className="flex w-full flex-col justify-center lg:w-11/12">
            <div className="w-full lg:w-11/12">
              <h2 className="text-center text-3xl lg:text-start">Our Story</h2>
              <p className="mt-4 text-center  lg:text-start">
                Throughout the years, our friend group has countless hours
                playing and laughing together over our favorite party games. Two
                of us being avid tech enthusiats, we wanted to build our own
                platform to share the fun we had with people around the world.
              </p>
              <p className="mt-4 text-center  lg:text-start">
                Being a small group of developers in college, we'd appreciate
                any feedback!
              </p>
            </div>

            <div className="w-full lg:w-11/12">
              <h2 className="mt-8 text-center text-xl sm:mt-4 lg:text-start">
                Connect with us on LinkedIn
              </h2>
              <div className="mt-4 flex flex-col items-center justify-around gap-10 sm:flex-row md:gap-20 lg:justify-between lg:gap-0">
                {/* Rahat */}
                <a
                  className="flex items-center gap-16 transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer sm:flex-col sm:gap-0"
                  href="https://www.linkedin.com/in/azim-rahat/"
                  target="_blank"
                >
                  <img
                    src={Rahat}
                    alt="Azim"
                    className="h-24 w-24 rounded-full object-cover shadow-xl"
                  />
                  <p className="mt-2 flex gap-1 text-center font-medium">
                    Azim
                    <MdOutlineArrowOutward />
                  </p>
                </a>
                {/* Ivan */}
                <a
                  className="flex items-center gap-16 transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer sm:flex-col sm:gap-0"
                  href="https://www.linkedin.com/in/ivan-chen11/"
                  target="_blank"
                >
                  <img
                    src={Ivan}
                    alt="Ivan"
                    className="h-24 w-24 rounded-full object-cover shadow-xl"
                  />
                  <p className="mt-2 flex gap-1 text-center font-medium">
                    Ivan
                    <MdOutlineArrowOutward />
                  </p>
                </a>
                {/* Arvin */}
                <a
                  className="flex items-center gap-16 transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer sm:flex-col sm:gap-0"
                  href="https://www.linkedin.com/in/azim-rahat/"
                  target="_blank"
                >
                  <img
                    src="https://imgcdn.stablediffusionweb.com/2024/10/18/9940e710-a1d8-481a-b36d-6414097295da.jpg"
                    alt="Arvin"
                    className="h-24 w-24 rounded-full object-cover shadow-xl"
                  />
                  <p className="mt-2 flex gap-1 text-center font-medium">
                    Arvin
                    <MdOutlineArrowOutward />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:justify-end">
          <img
            src="https://www.thesprucepets.com/thmb/s-wcx5m6Sg6y8r3EFrYfikLqJIg=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txpba7ef914jvq100_Medium_1493631-5a8ef3d404d1cf003616d6f3.jpg"
            alt="Our Mission"
            className="object-cover shadow-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
