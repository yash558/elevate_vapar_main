import React from 'react'
import { corporate, ellipse, servicemainbg } from '../assets'
import { Link } from 'react-router-dom'
import scrollToTop from './scrollToTop'

const CorporateBannerTwo = () => {
  function scrollToTargetComponent(target) {
    const targetElement = document.getElementById('contact')

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="bg-[#3267FF] h-full w-full md:px-12 px-4 flex flex-wrap-reverse items-center justify-between">
      <div>
        <div>
          <img src={corporate} alt="" className="md:h-[450px] relative" />
        </div>
      </div>
      <div className="flex md:items-start items-center flex-col justify-center md:w-[60%] w-[100%]">
        <div className="my-6">
          <h1 className="text-white md:text-4xl text-3xl font-[600]">
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
          <ul class="list-disc text-left list-outside px-4 text-[16px]">
  <li>
    In-clinic Doctor / Virtual Consultation from top specialist doctors across India
  </li>
  <li>
    Enjoy a <span class="font-extrabold">50%*</span> claim on prescribed pharmacy bills
  </li>
  <li>
    Enjoy a <span class="font-extrabold">50%*</span> claim on prescribed diagnostic test bill
  </li>
  <li>
    Flat 15%* discounts on pharmacy ordering online
  </li>
  <li>
    Free Preventive Annual Health Check-ups
  </li>
  <li>
    Free loan and real estate consultations
  </li>
  <li>
    Free wealth wellness consultation including personal tax planning and ITR filing from the experts
  </li>
</ul>


          </div>
        </div>
        <div className="flex item-center justify-center">
          <button
            className="mt-auto rounded-md text-[#3267FF] font-[700]  p-3 w-full   text-[14px] bg-white text-center"
            onClick={scrollToTargetComponent}
          >
            Request CallBack
          </button>
        </div>
      </div>
      <div>
        <div className="relative  md:flex hidden">
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
            className="relative hidden top-[9.6rem] left-[48px]"
          />
        </div>
      </div>
    </div>
  )
}

export default CorporateBannerTwo
