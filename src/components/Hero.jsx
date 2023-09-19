import React from "react";

import BeachVideo from "../assets/beachVid.mp4";

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
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
    </div>
  );
};

export default Hero;
