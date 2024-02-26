import React from "react";
import { servicebg } from "../../assets";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-[--main-color]">
      <div className="container flex items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <div className=" pr-0 mx-auto py-20 md:w-[40%] w-[90%]">
            <div className="flex items-center md:justify-start justify-center">
              <h1 className="text-[--primary-color] text-lg rounded-md font-[700] border-2 p-2">
                Best Services
              </h1>
            </div>
            <div>
              <h2 className="md:text-5xl text-3xl md:text-left text-center font-[600] mt-8 mb-4">
                Why are we better than our competitors
              </h2>
            </div>
            <div className="w-[100%] md:w-[80%] text-[#636571] my-8 text-justify">
              Are you ready to take charge of your health and well-being? At
              elavateVapar, we are committed to providing top-notch OPD
              healthcare solutions that empower you to lead a healthy and
              fulfilling life. Our team of dedicated experts and cutting-edge
              technology are here to support you every step of the way.
              <br />
              <br />
              <b>
                Contact Us For easy connect with our team, you may write to
                <span className="text-[--primary-color]">
                  &nbsp;elavatevyapar@gmail.com
                </span>
              </b>
            </div>

            <div className="flex items-center md:justify-start justify-center">
              <Link to="/contactus">
                <button className="mt-auto rounded-md bg-[--primary-color] font-[700] p-4 w-44 text-[18px] text-white text-center hover:bg-[--secondary-color] transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className=" mr-20">
            <img
              src={servicebg}
              alt=""
              className="h-[450px] md:flex hidden rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
