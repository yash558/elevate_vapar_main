import React, { useState } from "react";
import { aboutinfo } from "../../assets";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const InfoAbout = () => {
  const [counterOn, setCounterOn] = useState(false);
  const count = [
    {
      name: "Happy Client",
      start: 0,
      end: 200,
      duration: 5,
      delay: 0,
    },
    {
      name: "Year Experience",
      start: 0,
      end: 2,
      duration: 5,
      delay: 0,
    },
    {
      name: "Specialized Doctors",
      start: 0,
      end: 10000,
      duration: 5,
      delay: 0,
    },
    {
      name: "Online Appointment",
      start: 0,
      end: 340,
      duration: 5,
      delay: 0,
    },
  ];
  return (
    <div className="flex section items-center justify-center w-full flex-wrap-reverse gap-x-20">
      <div className=" flex items-start justify-start">
        <img src={aboutinfo} alt="" className="md:h-[500px] h-[350px]" />
      </div>
      <div>
        <div className="md:flex hidden">
          <div className="pl-4 md:pl-12">
            {/* <div className=" flex items-center justify-start my-4">
              <h1 className="text-[--primary-color] text-lg rounded-md font-[700]  border-2  p-2">
                 About Us
              </h1>
            </div> */}
            <div className="md:mt-16 mt-4 ">
              <h2 className="md:text-4xl text-3xl font-[600]">
                Efficient{" "}
                <span className="text-[#3267FF]"> Medical Healthcare/OPD </span>{" "}
                <br />
                Solutions: Streamlined Process.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className=" grid grid-cols-2 md:mt-12 mt-0  gap-10  mb-8 md:px-2 px-4">
              {count.map((item, index) => {
                return (
                  <div className="flex flex-row gap-x-8" key={index}>
                    <div className=" text-center">
                      <h3 className="flex items-center justify-center md:text-5xl text-3xl text-[--black-color]">
                        {counterOn && (
                          <CountUp
                            start={item.start}
                            end={item.end}
                            duration={item.duration}
                            delay={item.delay}
                            className="text-[#3267FF] font-Manrope    font-[800]
                      line-height: 60.8px;"
                          />
                        )}
                        <span className="text-[#3267FF]"> +</span>
                      </h3>
                      <p className="md:text-[20px] text-sm  text[#303030] font-medium">
                        {item.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default InfoAbout;
