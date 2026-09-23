"use client";

import { useState, type ComponentType } from "react";

type SlideshowProps = {
  ProjectList: ComponentType[];
};

export default function Slideshow({ ProjectList }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % ProjectList.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + ProjectList.length) % ProjectList.length
    );
  };
  return (
    <div className="relative flex flex-row justify-center items-center gap-[28px] min-h-screen">
      {ProjectList.map((Card, index) => {
        return (
          <div
            className={`
              ${index === currentSlide
                ? "opacity-100 block animate-fadeInProject"
                : "opacity-0 hidden"} pb-[44px]
            `}
            key={index}
          >
            <Card />
          </div>
        );
      })}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-[8px] py-[4px] rounded shadow"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-[8px] py-[4px] rounded shadow"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
}
