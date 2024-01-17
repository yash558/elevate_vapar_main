import React from 'react'
import {
  building,
  corporate,
  ellipse,
  ellipse2,
  servicemainbg,
} from '../assets'
import { Link } from 'react-router-dom'
import scrollToTop from './scrollToTop'

const CorporateBanner = () => {
  return (
    <div className="bg-[#3267FF] h-full w-full md:px-12 flex flex-wrap-reverse items-center justify-between">
      <div>
        <div>
          <img
            src={building}
            alt="Corporate Building"
            className="h-[450px] relative md:right-12"
          />
        </div>
      </div>
      <div className="flex md:items-start items-center flex-col md:px-0  px-4 justify-center md:w-[50%] w-[95%]">
        <div className="my-6">
          <h1 className="text-white text-4xl font-[600]">
          Employee Wellness Assistance Program! <br /> We have everything covered for you.
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-white text-left text-lg ">
            With affordable OPD annual subscription plans, we bridge gaps in
            medical assistance through technology, ensuring reliable care for
            all.
          </h2>
          <div className="text-white text-left text-sm mt-6">
            <ul className="list-disc list-inside">
              <li>
                In-clinic Doctor / Virtual Consultation from top specialist
                doctors across India
              </li>
              <li>Enjoy a 50%* claim on prescribed pharmacy bills</li>
              <li>Enjoy a 50%* claim on prescribed diagnostic test bill</li>
              <li>Flat 15%* discounts on pharmacy ordering online</li>
              <li>Free Preventive Annual Health Check-ups</li>
              <li>Free loan and real estate consultations</li>
              <li>
                Free wealth wellness consultation including personal tax
                planning and ITR filing from the experts
              </li>
            </ul>
          </div>
        </div>
        <div className="flex item-center justify-center">
          <Link to="/plans" onClick={scrollToTop}>
            <button className="mt-auto rounded-md text-[#3267FF] font-[700]  p-3 w-full   text-[14px] bg-white text-center">
              Request CallBack
            </button>
          </Link>
        </div>
        {/* <div className="mb-6">
        <h2 className="text-white text-left text-lg">
          With affordable OPD annual subscription plans, we bridge gaps in medical assistance through technology, ensuring reliable care for all.
        </h2>
      </div>
      <div className="flex item-center justify-center">
        <a href="#contact">
          <button className="mt-auto rounded-md md:mb-0 mb-6 text-[#3267FF] font-[700] p-3 w-full text-[14px] bg-white text-center">
            Request Callback
          </button>
        </a>
      </div> */}
      </div>
    </div>
  )
}

export default CorporateBanner
