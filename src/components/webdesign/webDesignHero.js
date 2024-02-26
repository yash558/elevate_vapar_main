import React from 'react'
import { servicehero } from '../../assets'

const WebDesignHero = () => {
  return (
    <div className="py-24 h-full  flex md:items-start items-center  md:flex-row flex-col md:justify-between justify-center">
      <div className="md:w-[80%] w-[100%] md:pl-40 px-4 my-12">
        <div className="flex items-center justify-start  my-4">
          <h1 className="text-[--primary-color] rounded-md font-[700]  border-2  p-2">
            Web Design Services
          </h1>
        </div>
        <div className="my-8">
          <h2 className="md:text-5xl text-3xl  leading-snug font-[600]">
            elavateVapar - India’s leading {''}
            <span className="text-[--primary-color]">
              One Stop Solution{' '}
            </span>{' '}
            for Digital Services.
          </h2>
        </div>
        <div className="my-4">
          {/* <TextAnimation text={`elavateVapar Services ensures your smooth journey and covers you towards
            Health and Wellness`} /> */}
          <p className="text-justify font-[400] text-lg">
            We create responsive,
            user-friendly, and SEO-optimized websites that help you stand out
            from the competition. 
          </p>
        </div>
      </div>
      <div className="md:w-[70%] w-[90%]">
        <img
          src={servicehero} // Use the imported image source here
          alt="Hero Image"
          className="md:w-[80%] md:h-[350px] md:mt-8 h-auto rounded-lg" // Add responsive styling
        />
      </div>
    </div>
  )
}

export default WebDesignHero
