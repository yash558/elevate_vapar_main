import React from "react";
import { drawline, herobg, group1, group2, group3, group4 } from "../assets";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const Hero = () => {
  const group = [
    {
      name: "Marketing and Promotion",
      image: group2,
      color: "#FFDCEFB2",
    },
    {
      name: "Content Production",
      image: group1,
      color: "#E5DCFFB2",
    },
    {
      name: "Brand Management",
      image: group3,
      color: "#FFEED8B2",
    },
    {
      name: "Web \nServices",
      image: group4,
      color: "#E5DCFFB2",
    },
    {
      name: "Designing and Graphics",
      image: group4,
      color: "#E5DCFFB2",
    },
  ];

  return (
    <div className=" h-full   md:pt-24 pt-16 w-full bg-[--main-color] flex flex-col items-center justify-between">
      <div className="flex items-center md:flex-row flex-col justify-center container m-auto">
        <div className="flex flex-col md:ml-20 ml-0 justify-center w-[90%] md:w-[50%] py-12">
          <div className="flex  flex-col md:items-start items-center justify-center">
            {/* <div className="flex  item-center md:justify-start  justify-center">
              <p className="text-[16px] border-2 p-2 border-gray-300 rounded-lg  font-[700] text-[#000000]">
                👋 Hey! We Are elavateVapar
              </p>
            </div> */}
            <h1 className="  text-[#000A2D] py-4 text-2xl capitalize  leading-snug   text-center md:text-left  md:text-6xl font-[600]">
              <span className="text-brown"></span> digital <br />{" "}
              Business Elevation
              {/* <img
                src={drawline}
                className="h-10  relative md:top-[-3.5rem] top-[-2.5rem]  md:left-[50%] left-[85%]"
                alt=""
              /> */}
            </h1>
          </div>
          <p className="text-[16px] text-justify text-[#636571] font-[400] md:my-0 my-2  md:w-[80%] w-[100%]">
            At Elevate Vyapar, we prioritize fortifying your digital assets with
            our comprehensive cybersecurity suites. Our flexible defense
            strategies adapt to your unique business needs, providing tailored
            protection against evolving cyber threats. With proactive threat
            intelligence, 24/7 security monitoring, and user-friendly
            interfaces, we ensure a vigilant defense for your operations.
            Continuous updates and expert support further underscore our
            commitment to keeping your digital landscape secure..
          </p>

          <div className="grid grid-cols-5 gap-2 mt-4 mb-8 w-[100%] md:w-[65%]">
            {group.map((item, index) => {
              return (
                <div
                  className="flex flex-col md:items-center items-start  justify-start py-4 "
                  key={index}
                >
                  <div
                    className={`p-4 rounded-lg mb-2`}
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    <img src={item.image} alt="" className="h-10" />
                  </div>
                  <h2 className="text-[#4C4C4C] md:text-[12px] text-[10px] font-[500] text-center">
                    {item.name}
                  </h2>
                </div>
              );
            })}
          </div>
          <div className="flex md:items-start items-center md:justify-start justify-center ">
            <Link to="/plans" onClick={scrollToTop}>
              <button className="mt-auto rounded-md bg-[--primary-color] font-[Poppins]  p-4 w-44   text-[18px] text-white text-center">
                Check Prices
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img loading="lazy" src={herobg} alt="" className="h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
