import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

import SelectsCard from "./SelectsCard";

const IMG_LIST = [
  { title: "Bora Bora", path: BoraBora },
  { title: "Tortuga", path: BoraBora2 },
  { title: "Maldives", path: Maldives },
  { title: "Port Royal", path: Maldives2 },
  { title: "Key West", path: KeyWest },
  { title: "Antigua", path: BoraBora2 },
];

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {IMG_LIST.map((image, imageIndex) => (
        <SelectsCard ley={imageIndex} title={image.title} path={image.path} />
      ))}
    </div>
  );
};

export default Selects;
