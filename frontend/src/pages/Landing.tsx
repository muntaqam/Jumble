// src/pages/Landing.tsx

import React from "react";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

// import banner from "../assets/images/banner.png";
import banner from "../assets/images/jumble_banner.png";
import wordhunter from "../assets/images/wordhunter.png";

const games = [
  {
    id: 1,
    title: "Word Hunter",
    image: wordhunter,
  },
  {
    id: 2,
    title: "Timebomb",
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8yOV92ZWN0b3JfZmxhdF9pbGx1c3RyYXRpb25fb2ZfYV9ibGFja19ib21iX3dpdF9kNDY5Yjg3MC0wY2U1LTQ0YjktYTllMi0zNDFiZTAxY2YzNGZfMS5wbmc.png",
  },
  {
    id: 3,
    title: "Chameleon",
    image:
      "https://www.shutterstock.com/image-vector/cute-small-green-chameleon-lizard-600nw-1614232648.jpg",
  },
];

const Landing: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="font-adlam text-white text-6xl w-1/3 space-y-6">
          <div>Party Games, Anywhere.</div>
          <div className="text-sm">
            Play with Friends or Against AI opponents
          </div>
        </p>
        <img className="w-5/12" src={banner}></img>
      </div>

      {/* center content */}
      <div className="flex flex-col justify-center gap-8 px-8 pb-16 font-adlam md:flex-row">
        {/* games */}
        <div className="h-1/2 w-1/2 rounded-3xl bg-[#b1dfbc] shadow-2xl">
          <label className="ml-12 mt-4 inline-block align-middle text-xl text-[#01685e]">
            Choose a Game
          </label>
          {/* Map through games */}
          <div className="mt-2 grid gap-6 px-12 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <div
                key={game.id}
                className="rounded-lg border bg-[#fcf8cf] p-4 shadow-md transition duration-150 ease-in-out hover:shadow-lg"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-40 w-full rounded-md object-contain"
                />
                <h3 className="mt-4 text-center text-lg">{game.title}</h3>
              </div>
            ))}
          </div>
          <div className="pb-10">
            <div className="">
              <div className="mt-6 flex w-full justify-between px-12">
                <label className="">Play Solo</label>
                <Switch />
              </div>
              <div className="mt-1 w-full px-12 text-xs font-light text-gray-600 hover:cursor-default sm:text-base">
                You will be matched against an AI player. No account necessary!
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex w-11/12 flex-col gap-6 md:w-1/4">
          {/* join room */}
          <div className="flex flex-col rounded-3xl bg-[#01685e] pb-6 px-6 shadow-xl space-y-2">
            <label className="mt-4 inline-block align-middle text-xl text-white">
              Join a Room
            </label>
            <div className="h-14 w-full flex flex-col bg-[#febd4f] rounded-xl space-y-2 lg:flex-row lg:space-y-0">
              <input
                type="number"
                inputMode="numeric"
                min="1"
                max="9999"
                maxLength={4}
                className="no-spinners appearance-none rounded-xl text-[#876124] bg-[#febd4f] placeholder-[#876124] pl-4 h-full shadow-sm outline-none w-11/12"
                placeholder="Enter Room Code"
                // limit code input to 4
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value.length > 4) {
                    target.value = target.value.slice(0, 4);
                  }
                }}
              />

              <button
                type="submit"
                className="bg-[#ffa93d] text-[#876124] rounded-r-xl rounded-2xl transition duration-150 h-full w-4/6 ease-in-out hover:brightness-90 "
              >
                Join
              </button>
            </div>
          </div>

          {/* leaderboard */}
          <div className="flex flex-col rounded-3xl bg-[#01685e] pb-6 px-6 shadow-xl space-y-2">
            <label className="mt-4 inline-block align-middle text-xl text-white">
              Leaderboards
            </label>
            <div className="h-14 w-full flex flex-col bg-[#febd4f] rounded-xl space-y-2 hover:brightness-90 transition-all ease-in-out duration-200 lg:flex-row lg:space-y-0">
              <Link
                to="/leaderboard"
                className="text-[#876124] rounded-r-xl rounded-2xl items-center flex justify-center w-full transition duration-150 h-full ease-in-out hover:brightness-90 "
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
