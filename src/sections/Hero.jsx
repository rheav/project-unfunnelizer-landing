/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DownloadButton from "../components/DownloadButton";
import Logo from "../components/Logo";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <Logo />
        <a
          href="https://chrome.google.com/webstore/detail/unfunnelizer/bdjkbgejocjhchdjmckgegngdaghnfbl"
          target="_blank"
          rel="noreferrer"
          className="group drop-shadow-md inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-white dark:text-white transition-all duration-500 hover:shadow-xl hover:shadow-blue-300/75"
          role="alert"
        >
          <span className="text-xs bg-gradient-to-r from-startCold to-endCold rounded-full text-white px-4 py-1.5 mr-3 ">
            New!
          </span>{" "}
          <span className="text-xs font-medium dark:bg-white dark:text-blue-600">
            Available for Chrome and Edge browsers!
          </span>
          <svg
            className="ml-2 w-5 h-5"
            transition-all
            duration-500
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:text-blue-600 group-hover:translate-x-[5px]  transition-all duration-500"
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-8xl dark:text-white">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-startCold to-endCold">
            Deconstruct
          </span>{" "}
          your competition's
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-startHot to-endHot">
            {" "}
            funnels
          </span>
        </h1>
        <p className="my-8 text-lg font-font dark:font-light text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
          Finally, found the VSL? Reveal the CTA and go to their checkout -{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-startHot to-endHot">
            spy their funnel quickly.
          </span>
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
