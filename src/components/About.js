import React from "react";
import { aboutus, checkIcon } from "../assets";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const AboutSection = () => {
  const feature = [
    {
      name: "Comprehensive Digital Solutions",
    },
    {
      name: "Innovative Technologies",
    },
    {
      name: "Customized Development Services",
    },
    {
      name: "User-Centric Design",
    },
  ];

  return (
    <div className="h-full bg-[--main-color]">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  mx-auto">
          <div className="flex items-center max-w-screen-sm mx-auto justify-center">
            <img
              src={aboutus}
              alt="About Us"
              className="md:h-[650px] h-[450px] object-cover rounded-md shadow-md"
            />
          </div>
          <div className="p-12">
            <div className="flex items-center md:justify-start justify-center">
              <h1 className="text-[--primary-color]  text-lg rounded-md font-[700] border-2 border-white p-2">
                🚀 Our Vision
              </h1>
            </div>
            <div>
              <h2 className="md:text-5xl text-2xl capitalize font-[600] mt-8 mb-4">
                Our Working Process to Improve Your Business
              </h2>
            </div>
            <div className="w-full md:w-[80%] text-justify">
              Elevate Vapar simplifies and revolutionizes healthcare access by
              making it more user-centric and approachable. Our comprehensive
              plans lay emphasis on OPD expenses borne by our customers. Nearly
              75% of an individual’s lifetime medical costs are, on average,
              incurred outside of hospitals/clinics. elavateVapar is driven by
              the vision that doctor visits, pharmacy costs, diagnostic/lab
              tests and annual health check-ups, don't dry up your savings.
              Thereby, we have crafted annual OPD healthcare plans that
              completely take care of everyone across India, thus covering
              Individual coverage and also providing for employees in a
              Corporate.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] gap-6 my-8">
              {feature.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B4513"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>

                  <span className="ml-2 text-[#000A2D] text-lg font-[700]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap md:gap-10 gap-4 items-center justify-start">
              <Link to="/about" onClick={scrollToTop}>
                <button className="mt-auto rounded-md bg-[--primary-color] font-[700] p-4 md:w-44 w-32 md:text-[18px] text-[14px] text-white text-center">
                  Learn More
                </button>
              </Link>
              <Link to="/contactus" onClick={scrollToTop}>
                <button className="mt-auto rounded-md text-[--primary-color] font-[700] p-4 md:w-36 w-30 md:text-[18px] text-[14px] border-[--primary-color] border-[2px] bg-white text-center">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
