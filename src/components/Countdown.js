import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { tooth, clinic, dentist, scedule } from "../assets";
const Countdown = () => {
  const [counterOn, setCounterOn] = useState(false);

  const count = [
    {
      name: "Happy Client's",
      start: 0,
      end: 200,
      duration: 5,
      delay: 0,
      icon: tooth,
    },
    {
      name: "Year Experience",
      start: 0,
      end: 2,
      duration: 5,
      delay: 0,
      icon: clinic,
    },
    {
      name: "Team Members",
      start: 0,
      end: 50,
      duration: 5,
      delay: 0,
      icon: dentist,
    },
    {
      name: "Project's Delivered",
      start: 0,
      end: 40,
      duration: 5,
      delay: 0,
      icon: scedule,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center   py-16">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className=" grid md:grid-cols-4 grid-cols-1  gap-20  ">
          {count.map((item, index) => {
            return (
              <div className="flex flex-row gap-x-8" key={index}>
                <div className="">
                  <div className="bg-[--primary-color] rounded-md md:py-4 md:px-4 py-2 px-2 m w-full">
                    <img src={item.icon} alt="" className="md:h-[50px] md:w-[50px] h-[45px] w-[45px] " />
                  </div>
                </div>

                <div className="text-justify">
                  <h3 className="flex items-center justify-start md:text-5xl text-3xl  text-[--black-color]">
                    {counterOn && (
                      <CountUp
                        start={item.start}
                        end={item.end}
                        duration={item.duration}
                        delay={item.delay}
                        className="text-[#000A2D] font-Manrope font-[800]
                      line-height: 60.8px;"
                      />
                    )}
                    <span className="text-[-]"> +</span>
                  </h3>
                  <p className="text-[16px] text-[#636571] font-medium">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Countdown;
