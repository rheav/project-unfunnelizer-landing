import React from "react";
import Video from "../img/main-video-hero.mp4";
import VideoAutoPlay from "../components/VideoAutoPlay";

const Demo = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className=" px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <VideoAutoPlay video={Video} />
        <h2 className=" text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl dark:text-white">
          Click. Deconstruct.
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-startCold to-endCold">
            {" "}
            Profit!
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Demo;
