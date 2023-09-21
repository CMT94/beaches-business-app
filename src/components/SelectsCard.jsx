import React from "react";

const SelectsCard = (props) => {
  const { title, path } = props;
  return (
    <div className="relative">
      <img src={path} alt={title} className="w-full h-full object-cover" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute left-4 bottom-4 text-2xl text-white font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
