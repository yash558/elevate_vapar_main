import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import {
  Instagram,
  Linkedin,
  facebook,
  frame,
  twitter,
  youtube,
} from "../assets";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const footerLinks1 = [
    {
      name: "Privacy Policy",
      links: "/privacy",
    },

    {
      name: "Support",
      links: "/contactus",
    },

    {
      name: "Terms & Conditions",
      links: "/terms",
    },
  ];
  const footerLinks2 = [
    {
      name: "Home",
      links: "/",
    },
    {
      name: "Our Plans",
      links: "/plans",
    },
    {
      name: "Our Services",
      links: "/services",
    },
    {
      name: "Careers",
      links: "/careers",
    },
    {
      name: "About Us",
      links: "/about",
    },
    {
      name: "Contact Us",
      links: "/contactus",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function DisclaimerModal({ isOpen, onClose }) {
    return (
      <div
        className={`fixed inset-0 flex items-center bg-black/50 justify-center z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="modal-container bg-white w-1/2 p-6 text-black rounded shadow-lg">
          <span
            className="modal-close absolute top-0 right-0 text-white text-5xl p-4 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <h2 className="text-lg font-semibold mb-4">Disclaimer</h2>
          <p>
            Disclaimer: Kindly be aware that elavateVapar operates as a
            comprehensive health and wellness membership platform and is not
            engaged as a broker or insurance intermediary.
          </p>
        </div>
      </div>
    );
  }

  const sendMail = async () => {
    const response = await axios.post(
      `https://elavateVapar.net/emails/contact_footer_email`,
      {
        email_id: email,
      }
    );
    console.log(response.data);
    toast.success("Successfully Submitted!");
    setEmail("");
  };

  return (
    <footer className="bg-[--primary-color] md:px-24 px-4 flex items-center justify-center mb-0   text-white  font-bold dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <Toaster />
      <div className="container">
        <div className="mx-6 py-10 text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <img
                src={logo}
                alt=""
                className="mr-3 mb-4 ml-0 bg-white p-2 rounded-lg w-[50%] sm:w-[70%] md:w-[70%] justify-center items-center"
              />
              <p className="text-[15px] font-[400] md:w-[80%] w-[100%]">
                elavateVapar offers affordable and comprehensive Out-Patient
                Department (OPD) expense coverage, subscription based annual
                Plans, for everyone, anywhere, anytime.
              </p>
              <div className="flex  mt-6 gap-4">
                <a
                  href="https://www.linkedin.com/company/80332580/admin/feed/posts/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="" className="h-6" />
                </a>
                <a
                  href="https://www.instagram.com/elavateVapar/"
                  target="_blank"
                >
                  <img src={Instagram} alt="" className="h-6" />
                </a>
                <a href="https://twitter.com/elavateVapar" target="_blank">
                  <img src={twitter} alt="" className="h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550100280136"
                  target="_blank"
                >
                  <img src={facebook} alt="" className="h-6" />
                </a>
                <a href="https://www.youtube.com/@elavateVapar" target="_blank">
                  <img src={youtube} alt="" className="h-6" />
                </a>
              </div>
            </div>

            <div className="">
              <h6 className="mb-4 uppercase text-2xl flex  font-semibold  justify-start">
                Helpful Links
              </h6>
              <div className="bg-[#ffffff] w-[25%] h-[3px] mb-8"></div>
              {footerLinks1.map((item, index) => {
                return (
                  <p
                    className="mb-2 font-[400] hover:text[#F17732]"
                    key={index}
                  >
                    <Link
                      to={item.links}
                      className="text-[16px] hover:text[#F17732] dark:text-neutral-200"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </p>
                );
              })}
              <p>
                {/* <a
                href="#faq" // Replace with the actual path to your other page
                className="pb-8 font-[400] hover:text-[#F17732] cursor-pointer"
              >
                FAQs
              </a> */}
              </p>

              <p
                className="mb-2 mt-2 font-[400] hover:text[#F17732] cursor-pointer"
                onClick={openModal}
              >
                Disclaimer
              </p>

              <DisclaimerModal isOpen={isModalOpen} onClose={closeModal} />
            </div>

            <div className="text-white">
              <h6 className="mb-4  text-2xl flex  font-semibold uppercase justify-start">
                Quick Links
              </h6>
              <div className="bg-[#ffffff] w-[25%] h-[3px] mb-8"></div>
              {footerLinks2.map((item, index) => {
                return (
                  <p
                    className="mb-2 font-[400] hover:text[#F17732]"
                    key={index}
                  >
                    <Link
                      to={item.links}
                      className="text-[16px]  hover:text[#F17732] dark:text-neutral-200"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </p>
                );
              })}
            </div>

            <div>
              <h6 className="mb-4 text-2xl flex uppercase  font-semibold  justify-start">
                Contact Us
              </h6>
              <div className="bg-[#ffffff] w-[25%] h-[3px] mb-8"></div>
              <div className="bg-white w-full md:w-80 rounded-md p-2 my-4 flex flex-col md:flex-row justify-center items-center">
                <input
                  type="email"
                  className="border-none w-full md:w-48 px-4 py-2 md:mr-2 mb-2 md:mb-0 rounded-md focus:outline-none text-black"
                  placeholder="Your Email Address..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={sendMail}
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white h-10 md:h-12 w-full md:w-20 text-base md:text-lg rounded-md"
                >
                  Submit
                </button>
              </div>
              <p className="mb-4 font-[400] md:text-[1rem] text-[14px]  flex items-center justify-center md:justify-start">
                <img src={frame} className="h-6" alt="" />
                &nbsp; Greater Kailash II,Delhi 110048
              </p>

              <p className="mb-4 font-[400] text-[1rem] flex items-center justify-center md:justify-start">
                略 &nbsp; +91-9810113654
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#492000] my-4 h-[2px] w-[80%]"></div>
        </div>

        <div className="bg-[#492000]  md:p-6 p-2 text-center text-xl flex md:flex-row flex-col  justify-between dark:bg-neutral-700">
          <a
            className="font-[300] text-[14px] text-[--main-color] dark:text-neutral-400"
            href=""
          >
            &nbsp; Copyright © 2023. All rights reserved
          </a>
          <a
            className="font-[300] text-[14px] text-[--main-color] dark:text-neutral-400"
            href="https://techlane.ai/"
            target="_blank"
          >
            &nbsp; Website Designed & Developed by Yash Sharma.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
