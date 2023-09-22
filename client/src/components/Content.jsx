import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "../assets/images/Gallery";
import DesignersSection from "./DesignersSection";
import Features from "./Features";

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="text-center bg-slate-900">
        <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="w-full h-full shadow-2xl rounded-2xl bg-center bg-cover duration-500 hover:scale-75 "
          ></div>
          <div>
            <h1 className="flex absolute top-[20%] justify-center py-2 text-8xl font-extrabold text-slate-400">
              {" "}
              Explore your Fashion Desires
            </h1>
          </div>
          {/* Left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Features></Features>
      <h1 className="text-center text-6xl mt-10 animate-pulse font-semibold text-blue-800 font-['Open_Sans']">
        Checkout our Designers
      </h1>

      <DesignersSection></DesignersSection>
    </>
  );
}
