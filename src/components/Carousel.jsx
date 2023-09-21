import React from "react";

import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
  const [slideIndex, setSlideIndex] = React.useState(1);
  const lastSliderIndex = sliderData.length - 1;
  const handlePrevSlide = () => {
    setSlideIndex((prevState) => (prevState !== 0 ? prevState - 1 : prevState));
  };
  const handleNextSlide = () => {
    setSlideIndex((prevState) =>
      prevState !== lastSliderIndex ? prevState + 1 : prevState
    );
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        className="absolute top-[50%] left-8 text-3xl text-white cursor-pointer hover:text-gray-100"
        onClick={handlePrevSlide}
      />
      <BsArrowRightSquareFill
        className="absolute top-[50%] right-8 text-3xl text-white cursor-pointer hover:text-gray-100"
        onClick={handleNextSlide}
      />

      {sliderData.map((image, imageIndex) => (
        <div
          key={imageIndex}
          className={imageIndex === slideIndex ? "opacity-100 " : "opacity-0"}
        >
          {imageIndex === slideIndex && (
            <img
              src={image.url}
              alt="/"
              className="w-full rounded-md duration-300"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
