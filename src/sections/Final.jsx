import React from "react";
import VideoAutoPlay from "../components/VideoAutoPlay";
import BruteModeVideo from "../img/bruteMode-banner.mp4";
import DownloadButton from "../components/DownloadButton";

const Final = ({ video, children }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-6xl dark:text-white">
          And the (sometimes) (too) powerful
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-startHot to-endHot">
            {" "}
            bruteMode
          </span>
        </h2>
        <div className="w-11/12 h-full my-0 mx-auto bg-gradient-to-b from-zinc-50 to-slate-50 rounded-xl z-1 border-solid border-[1px] border-gray-200 drop-shadow-sm transition-all duration-500">
          <div className="flex items-center p-2">
            <div className="py-0 px-1">
              <span className="bg-[#ff605c] inline-block items-center w-3 h-3 p-1 rounded-lg"></span>
            </div>
            <div className="py-0 px-1">
              <span className="bg-[#ffbd44] inline-block items-center w-3 h-3 p-1 rounded-lg"></span>
            </div>
            <div className="py-0 px-1">
              <span className="bg-[#00ca4e] inline-block items-center w-3 h-3 p-1 rounded-lg"></span>
            </div>
          </div>
          <div className="">
            <VideoAutoPlay video={BruteModeVideo} />
          </div>
        </div>
        <h2 className="my-12 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl dark:text-white">
          Be
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-startCold to-endCold">
            {" "}
            ahead
          </span>{" "}
          of your
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-startHot to-endHot">
            {" "}
            competition...
          </span>
        </h2>
        <DownloadButton />
      </div>
    </section>
  );
};

export default Final;
