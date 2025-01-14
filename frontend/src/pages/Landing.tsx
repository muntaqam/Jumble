// src/pages/Landing.tsx

import React from "react";
import test from "@/assets/images/wordhunt_test.jpg";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

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
      <img
        src="https://t4.ftcdn.net/jpg/09/19/56/37/360_F_919563724_oDHjFuzyFhWJwe9X6KvAFwK4JluuhZrR.jpg"
        className="h-96 w-full bg-[#d9d9d9] object-cover sm:object-fill"
      />

      {/* center content */}
      <div className="flex flex-col items-center gap-8 bg-[#d9d9d9] px-8 py-12 md:flex-row">
        {/* games */}
        <div className="h-1/2 w-11/12 rounded-sm bg-white shadow-2xl md:w-2/3">
          <label className="ml-12 mt-4 inline-block align-middle text-xl font-black">
            START A NEW GAME
          </label>
          {/* Map through games */}
          <div className="mt-2 grid gap-6 px-12 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <div
                key={game.id}
                className="rounded-lg border bg-[#f8f8f8] p-4 shadow-md transition duration-150 ease-in-out hover:shadow-lg"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-40 w-full rounded-md object-contain"
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
          <div className="mt-1 w-full px-12 pb-8 text-xs font-light text-gray-600 sm:text-base">
            You will be matched against an AI player. No account necessary!
          </div>
        </div>

        {/* right side */}
        <div className="flex w-11/12 flex-col justify-between gap-6 md:w-1/3">
          {/* join room */}
          <div className="flex flex-col rounded-sm bg-white pb-6 shadow-xl">
            <label className="ml-6 mt-4 inline-block align-middle text-xl font-black">
              Join a Room
            </label>
            <label className="ml-6 mt-2 inline-block align-middle text-sm font-black font-normal">
              Room Code:
            </label>
            <div className="ml-6 flex flex-col justify-between space-y-2 lg:flex-row lg:space-y-0">
              <input
                type="number"
                inputMode="numeric"
                min="1"
                max="9999"
                maxLength={4}
                className="no-spinners mr-6 mt-1 appearance-none rounded-sm border px-2 py-1 shadow-sm outline-1 outline-[#4050a1] lg:mr-0 lg:w-2/3"
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
                className="mr-6 rounded-md bg-[#5C72E6] py-1 text-white transition duration-150 ease-in-out hover:bg-[#4050a1] lg:px-5 xl:px-6"
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
              <Link
                to="/leaderboard"
                className="mx-6 mt-2 w-full self-center rounded-md bg-[#5C72E6] px-2 py-2 text-center text-white transition duration-150 ease-in-out hover:bg-[#4050a1]"
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
