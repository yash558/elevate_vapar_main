import React from 'react'
import { elipse, plan } from '../../assets'

const CarrierHero = () => {
  const handleOk = () =>{
    console.log("hi");
  }

  function scrollToTargetComponent() {
    const targetElement = document.getElementById('jobs');
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="bg-[#5138EE] h-full m:pt-0 pt-24 w-full flex flex-wrap-reverse items-center md:justify-between justify-center">
      <div>
        <div className="bg-[#3521B5] rounded-full md:flex hidden relative  right-32 h-64 w-64"></div>
        <div className="h-[10%]">
          <img src={plan} alt="" className="h-96" />
        </div>
      </div>
      <div className="flex items-center flex-col mt-12  justify-center">
        <div>
         
            <h1 className="border-2 text-white px-4  py-2 rounded-md text-lg border-white">
              Careers
            </h1>
          
        </div>
        <div className="my-6">
          <h1 className="text-white md:text-6xl text-4xl font-[700] text-center">
            "Discover Your Path: <br /> Explore Exciting Careers <br />{' '}
            Opportunities with us!"
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-white text-center text-sm">
            Join our team and thrive in a dynamic, impactful career journey.{' '}
            <br /> Discover opportunities for growth, innovation, and meaningful
            contributions today.
          </h2>
        </div>
        <div className="flex item-center justify-center mt-10">
          <button
            className="mt-auto rounded-md bg-[#5d84f8]  font-[700]  p-3 w-full   text-[18px] text-white text-center"
            onClick={scrollToTargetComponent}
          >
            Explore Careers
          </button>
        </div>
      </div>
      <div>
        <div className="md:flex hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162"
            height="95"
            viewBox="0 0 162 95"
            fill="none"
          >
            <path
              d="M41.7162 19.5635L41.8378 53.1076L8.1737 19.2226L41.7162 19.5635Z"
              fill="#3521B5"
            />
            <path
              d="M41.7162 51.5635L41.8378 85.1076L8.1737 51.2226L41.7162 51.5635Z"
              fill="#3521B5"
            />
            <path
              d="M108.716 19.5635L108.838 53.1076L75.1737 19.2226L108.716 19.5635Z"
              fill="#3521B5"
            />
            <path
              d="M108.716 52.5635L108.838 86.1076L75.1737 52.2226L108.716 52.5635Z"
              fill="#3521B5"
            />
            <path
              d="M74.7162 19.5635L74.8378 53.1076L41.1737 19.2226L74.7162 19.5635Z"
              fill="#3521B5"
            />
            <path
              d="M74.7162 51.5635L74.8378 85.1076L41.1737 51.2226L74.7162 51.5635Z"
              fill="#3521B5"
            />
            <path
              d="M141.716 19.5635L141.838 53.1076L108.174 19.2226L141.716 19.5635Z"
              fill="#3521B5"
            />
            <path
              d="M141.716 52.5635L141.838 86.1076L108.174 52.2226L141.716 52.5635Z"
              fill="#3521B5"
            />
          </svg>
        </div>
        <div className=" top-[9rem] relative">
          <img src={elipse} alt="" className="h-64 md:flex hidden" />
        </div>
      </div>
    </div>
  )
}

export default CarrierHero
