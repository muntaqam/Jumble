// src/pages/Landing.tsx
import React from "react";
import banner from "@/assets/images/banner.webp";
import test from "@/assets/images/wordhunt_test.jpg";
import { Switch } from "@/components/ui/switch";

const games = [
  {
    id: 1,
    title: "Word Hunter",
    image: test,
  },
  {
    id: 2,
    title: "Game Two",
    image: test,
  },
  {
    id: 3,
    title: "Game Three",
    image: test,
  },
];

const Landing: React.FC = () => {
  return (
    <div>
      <img src={banner} className="h-96 w-full shadow-xl"></img>

      {/* center content */}
      <div className="flex space-x-8 bg-[#d9d9d9] px-8 py-12">
        {/* games */}
        <div className="h-1/2 w-2/3 rounded-sm bg-white shadow-2xl">
          <label className="ml-12 mt-4 inline-block align-middle text-xl font-black">
            START A NEW GAME
          </label>
          {/* Map through games */}
          <div className="mt-2 grid grid-cols-1 gap-6 px-12 md:grid-cols-1 lg:grid-cols-3">
            {games.map((game) => (
              <div
                key={game.id}
                className="rounded-lg border bg-[#f8f8f8] p-4 shadow-md transition duration-150 ease-in-out hover:shadow-lg"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-40 w-full rounded-md object-cover"
                />
                <h3 className="mt-4 text-center text-lg font-semibold">
                  {game.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-6 flex w-full justify-between px-12">
            <label className="font-semibold">Play Solo</label>
            <Switch />
          </div>
          <div className="w-full px-12 pb-8 font-light text-gray-600">
            In solo games, you will be matched against an AI player
          </div>
        </div>

        {/* right side */}
        <div className="flex w-1/3 flex-col gap-6">
          {/* join room */}
          <div className="flex flex-col rounded-sm bg-white pb-6 shadow-xl">
            <label className="ml-6 mt-4 inline-block align-middle text-xl font-black">
              Join a Room
            </label>
            <label className="ml-6 mt-2 inline-block align-middle text-sm font-black font-normal">
              Room Code:
            </label>
            <div className="w-full space-x-2">
              <input
                type="number"
                inputMode="numeric"
                min="1"
                max="9999"
                className="no-spinners ml-6 mt-1 w-4/6 appearance-none rounded-sm border px-2 py-1 shadow-sm outline-1 outline-[#373f51] placeholder:italic"
                placeholder="Enter Room Code"
              />
              <button
                type="submit"
                className="rounded-md bg-[#373f51] px-4 py-1 text-white transition duration-150 ease-in-out hover:bg-[#1c2029]"
              >
                Join
              </button>
            </div>
          </div>

          {/* leaderboard */}
          <div className="flex flex-col rounded-sm bg-white pb-6 shadow-xl">
            <label className="ml-6 mt-4 inline-block align-middle text-xl font-black">
              Leaderboards
            </label>
            <div className="flex items-center justify-center">
              <button className="mx-6 mt-2 w-full self-center rounded-md bg-[#373f51] px-2 py-2 text-white transition duration-150 ease-in-out hover:bg-[#1c2029]">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
