import React from "react";
import Streaming from "../assets/images/media_streamer.jpg";
import Task from "../assets/images/task-manager-app.jpg";
import Weather from "../assets/images/weather-display.jpg";
import Quiz from "../assets/images/quiz_challenge.jpg";
import Planner from "../assets/images/daily_planner.jpg";
import Refactor from "../assets/images/code_refactoring.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-white bg-[#8ebeda]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Work
          </p>
          <p className="py-6">
            Please find Links to the Live Demo or the Github repository of my
            works.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 text-gray-900 gap-6">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Streaming})` }}
            className="shadow-lg shadow-[#fff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-red-900 font-bold tracking-wider">
                Media Streaming App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pfansi.github.io/media-streamer/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pfansi/media-streamer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Task})` }}
            className="shadow-lg shadow-[#fff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-red-900 tracking-wider">
                Task Management App
              </span>
              <div className="pt-8 text-center">
                <a href="https://teamtask-manager.herokuapp.com/login">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AidKool/team-task-manager">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#fff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  text-red-900 font-bold tracking-wider">
                Weather Display App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pfansi.github.io/weather-display-app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pfansi/weather-display-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Quiz})` }}
            className="shadow-lg shadow-[#fff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-red-900 font-bold tracking-wider">
                Quiz Challenge App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pfansi.github.io/code-quiz-app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pfansi/code-quiz-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Planner})` }}
            className="shadow-lg shadow-[#fff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-red-900 font-bold tracking-wider">
                Daily Planner App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pfansi.github.io/daily-planner/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/pfansi/daily-planner"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Refactor})` }}
            className="shadow-lg shadow-[#fff] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-red-900 font-bold tracking-wider">
                Track My Move
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://track-my-move-backup.herokuapp.com/login"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Allan-Ngwenya/track-my-move"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
