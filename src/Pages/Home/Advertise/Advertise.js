import React from "react";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className="my-20 bg-indigo-500 flex flex-col items-center justify-center">
      <div className="">
        <h1 className="lg:text-8xl py-5 text-4xl my-5 text-center font-semibold">
          Book Now
        </h1>
      </div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-56 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900"></div>
      </div>
      <div className="">
        <h2 className="lg:text-2xl text-xl text-center my-5">
          You are one step away from having a clearer and attractive skin and
          lifestyle.
        </h2>
      </div>
      <Link>
        <button className="btn btn-accent my-5">Set An Appointment!</button>
      </Link>
    </div>
  );
};

export default Advertise;
