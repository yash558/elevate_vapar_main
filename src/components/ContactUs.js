import React, { useState } from "react";
import { stratoscope } from "../assets";
import NavbarOne from './Navbar/Navbarone';
import Contact from "./Contact";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    {/* <NavbarOne/> */}
    {/* <div className=" bg-gradient-to-r from-[#ffffff] to-[#E7EEFF] h-full py-24">
      <div>
        <h2 className="text-5xl font-[#242331] font-[600] text-center pt-12 flex items-center justify-center">Get in touch today! <img src={stratoscope} alt="" className="h-48" /></h2>
      </div>
      <div className="flex items-center  justify-evenly py-12">
        <div className="flex justify-between w-[35%] shadow-lg">
          <div className="flex items-center justify-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
            >
              <rect
                x="0.611328"
                y="0.531982"
                width="77.7821"
                height="77.7821"
                rx="18.7427"
                fill="#9570FF"
              />
              <path
                d="M17.4797 34.2687L38.5652 42.3474L59.6507 34.2687V48.3257C59.6507 53.5013 55.455 57.697 50.2794 57.697H26.8511C21.6754 57.697 17.4797 53.5013 17.4797 48.3257V34.2687Z"
                fill="#BFA9FF"
              />
              <path
                d="M17.4797 31.4573C17.4797 26.2816 21.6754 22.0859 26.8511 22.0859H50.2794C55.455 22.0859 59.6507 26.2816 59.6507 31.4573V31.798L38.5652 39.8915L17.4797 31.798V31.4573Z"
                fill="white"
              />
            </svg>{" "}
            &nbsp; email
          </div>
          <div className="flex items-center justify-center p-2">
            {" "}
            <h1>saasup@gmail.co</h1>
          </div>
        </div>
        <div className="flex justify-between w-[35%] shadow-lg">
          <div className="flex items-center justify-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
            >
              <rect
                x="0.262939"
                y="0.532959"
                width="77.7821"
                height="77.7821"
                rx="18.7427"
                fill="#5B86FF"
              />
              <path
                d="M20.0074 29.5989C20.0205 29.6726 20.0311 29.7462 20.0355 29.8205C20.0911 30.7738 20.8118 38.3795 29.872 47.6401C29.872 47.6401 37.6984 55.616 45.9355 57.2929C45.9712 57.3003 46.0062 57.3082 46.0418 57.3181C46.5405 57.4537 50.7806 58.5254 52.9663 56.3335L56.0802 53.2755C56.1083 53.2479 56.1377 53.2209 56.1677 53.1951C56.4783 52.9281 58.6409 50.9301 56.4777 48.8057C54.2882 46.6555 51.5282 44.0339 51.2157 43.7369C51.2007 43.7227 51.1863 43.7086 51.1719 43.6939C51.0025 43.5208 49.3937 41.9642 47.5093 43.3864C47.4549 43.4275 47.4037 43.4735 47.3549 43.5214L44.3061 46.5236C43.623 47.1711 42.5379 47.1625 41.8648 46.5045L31.4489 36.3146C30.7495 35.6302 30.7676 34.5125 31.4889 33.8502L33.9265 31.6135C33.9265 31.6135 36.5972 29.1852 33.729 26.5624L29.4714 22.3811C29.4451 22.3553 29.4201 22.3289 29.3951 22.3013C29.1201 21.9969 27.0794 19.9124 24.685 22.2326C24.6119 22.3032 24.5325 22.367 24.4481 22.4235C23.6356 22.971 19.3655 26.0302 20.0074 29.5989Z"
                fill="white"
              />
              <path
                d="M48.7054 37.0482C49.3649 37.0479 49.9079 36.5104 49.8145 35.8576C49.6992 35.0515 49.4674 34.2643 49.1248 33.521C48.615 32.4152 47.8718 31.4328 46.9463 30.6415C46.0208 29.8502 44.935 29.2687 43.7634 28.9369C42.9759 28.7139 42.1622 28.6073 41.348 28.6186C40.6886 28.6278 40.242 29.2477 40.3441 29.8991C40.4462 30.5506 41.0603 30.9835 41.7192 31.0112C42.1895 31.0309 42.6572 31.1056 43.1127 31.2346C43.9525 31.4724 44.731 31.8893 45.3944 32.4566C46.0579 33.0238 46.5906 33.728 46.9561 34.5208C47.1543 34.9507 47.3007 35.4011 47.3933 35.8626C47.523 36.5092 48.046 37.0486 48.7054 37.0482Z"
                fill="white"
              />
              <path
                d="M53.6361 37.1836C54.4305 37.2458 55.1335 36.6508 55.1038 35.8546C55.0498 34.4065 54.7443 32.975 54.1974 31.6251C53.4694 29.8283 52.3336 28.2254 50.8797 26.943C49.4257 25.6606 47.6935 24.7338 45.8199 24.2359C44.4123 23.8618 42.9539 23.7375 41.5103 23.8647C40.7167 23.9347 40.2141 24.7065 40.375 25.4869C40.5359 26.2672 41.3001 26.7578 42.0957 26.7154C43.0972 26.6619 44.1039 26.7653 45.0788 27.0244C46.5202 27.4074 47.8527 28.1203 48.9711 29.1068C50.0895 30.0933 50.9633 31.3264 51.5233 32.7086C51.9021 33.6436 52.1304 34.6295 52.2024 35.6298C52.2596 36.4245 52.8418 37.1215 53.6361 37.1836Z"
                fill="white"
              />
            </svg>
            &nbsp; Call Us
          </div>
          <div className="flex items-center justify-center p-2">
            {" "}
            <h1>+001 6547 6589</h1>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" max-w-[80%] bg-white mx-auto shadow-lg p-12"
      >
        <div className="grid grid-cols-2 gap-12">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#242331] text-sm font-bold mb-2"
            >
              FirstName*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="appearance-none border-2 border-[#D3D3D3] rounded w-full py-4 px-3 text-[#242331] leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-[#242331] text-sm font-bold mb-2"
            >
              LastName*
            </label>
            <input
              type="text"
              name="Last Name"
              id="lastName"
              className="appearance-none border-2 border-[#D3D3D3] rounded w-full py-4 px-3 text-[#242331] leading-tight focus:outline-none focus:shadow-outline"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#242331] text-sm font-bold mb-2"
            >
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="appearance-none border-2 border-[#D3D3D3] rounded w-full py-4 px-3 text-[#242331] leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone no"
              className="block text-[#242331] text-sm font-bold mb-2"
            >
              Phone No*
            </label>
            <input
              type="phone"
              name="Phone"
              id="phone"
              className="appearance-none border-2 border-[#D3D3D3] rounded w-full py-4 px-3 text-[#242331] leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="my-12">
          <label
            htmlFor="message"
            className="block text-[#242331] text-sm font-bold mb-2"
          >
            Message*
          </label>
          <textarea
            name="message"
            id="message"
            rows="10"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#242331] leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div> */}
    <div className="md:pt-20 pt-10 ">
    <Contact/>
    </div>
    </>
  );
};

export default ContactUs;
