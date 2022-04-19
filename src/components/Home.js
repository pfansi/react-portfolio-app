import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen font-bold bg-[#8ebeda]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Paulin Fansi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] hover:rotate-[6deg] duration-500">
          I am a Full Stack Developer
        </h2>
        <p className="text-[#fff] py-4 max-w-[700px]">
          I am a full stack developer specializing in building cutting edge
          applications using JavaScript language. I am determined to bring you a
          great digital experiences. I am keen to join any project involving
          backend or frontend.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6f6d70] hover:border-[#6f6d70]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
