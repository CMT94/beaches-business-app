import React from "react";

import BeachVideo from "../assets/beachVid.mp4";

import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={BeachVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>First Class Travel</h1>
          <h2 className="py-4">Top 1% Locations Worldwide</h2>
          <form
            onSubmit={(ev) => ev.preventDefault()}
            className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90"
          >
            <div>
              <input
                type="text"
                placeholder="Search Destinations"
                className="bg-transparent w-100 sm:w-[400px] font-[Poppins] focus:outline-none"
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch
                  size={20}
                  className="icon"
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
