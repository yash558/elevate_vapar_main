import React from "react";
import { ellipse, servicemainbg } from "../assets";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const ServiceBanner = () => {
  return (
    <div className="bg-[#3267FF] h-full w-full md:px-12 px-4 flex flex-wrap-reverse items-center justify-between">
      <div>
        <div>
          <img
            src={servicemainbg}
            alt=""
            className="h-[450px] relative left-12"
          />
        </div>
      </div>
      <div className="flex md:items-start items-center flex-col   justify-center md:w-[45%] w-[95%]">
        <div className="my-6">
          <h1 className="text-white text-4xl font-[600]">
            Cherish every moment by investing in your health and happiness.
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-white text-left text-lg ">
            With affordable OPD annual subscription plans, we bridge gaps in
            medical assistance through technology, ensuring reliable care for
            all.
          </h2>
        </div>
        <div className="flex item-center justify-center">
          <Link to="/plans" onClick={scrollToTop}>
            <button className="mt-auto rounded-md text-[#3267FF] font-[700]  p-3 w-full   text-[18px] bg-white text-center">
              See our plans
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="relative right-9 md:flex hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="95"
            viewBox="0 0 162 95"
            fill="none"
          >
            <path
              d="M41.7162 19.5635L41.8378 53.1076L8.1737 19.2226L41.7162 19.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M41.7162 51.5635L41.8378 85.1076L8.1737 51.2226L41.7162 51.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M108.716 19.5635L108.838 53.1076L75.1737 19.2226L108.716 19.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M108.716 52.5635L108.838 86.1076L75.1737 52.2226L108.716 52.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M74.7162 19.5635L74.8378 53.1076L41.1737 19.2226L74.7162 19.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M74.7162 51.5635L74.8378 85.1076L41.1737 51.2226L74.7162 51.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M141.716 19.5635L141.838 53.1076L108.174 19.2226L141.716 19.5635Z"
              fill="#5D87FF"
            />
            <path
              d="M141.716 52.5635L141.838 86.1076L108.174 52.2226L141.716 52.5635Z"
              fill="#5D87FF"
            />
          </svg>
          <img
            src={ellipse}
            alt=""
            className="relative md:flex hidden top-[9.6rem] left-[83px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
