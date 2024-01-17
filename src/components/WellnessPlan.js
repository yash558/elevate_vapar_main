import React from 'react'
import { wellness1, wellness2 } from '../assets'
import { Link } from 'react-router-dom'
import scrollToTop from './scrollToTop'

import { useStateContext } from './../StateContext'

const WellnessPlan = () => {
  const { showMonthly, setShowMonthly } = useStateContext()
  const service = [
    {
      title: 'Corporate Health and Wellness Plans',
      description: 'Healthier, Happier, and More Productive Workforce',
      link: '/services',
      target: 'corporate',
      image: wellness1,
    },
    {
      title: 'Individual, Family Health & Wellness Plans',
      description: 'Healthier, Happier wellbeing',
      link: '/services',
      target: 'retail',
      image: wellness2,
    },
  ]

  function scrollToTargetComponent(target) {
    if (target === 'retail') {
      setShowMonthly(true)
    } else {
      setShowMonthly(false)
    }
    const targetElement = document.getElementById('corporatexx')

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="pb-12 bg-[#3267FF]/5 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col section">
        <div className="">
          <h1 className="text-[#3267FF] md:text-[48px] text-2xl font-[600]">
            Wellness made simple:
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-center text-[#000A2D] md:text-[40px] text-2xl font-600">
            Your Personalized Health & Wellness Plans
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <div className="container md:w-[80%] w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full justify-between shadow-md bg-white h-full rounded-lg"
                >
                  <div className="flex flex-col justify-between p-6 md:w-[60%] w-[100%]">
                    <div>
                      <h1 className="text-[#3267FF] md:text-2xl text-lg font-[700]">
                        {item.title}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-[#727272] md:text-sm text-xs my-6 font-[400]">
                        {item.description}
                      </h1>
                    </div>
                    <div>
                      <button
                        className="bg-[#3267FF] text-white px-4 py-2 rounded flex items-center font-bold justify-center text-lg"
                        onClick={() => scrollToTargetComponent(item.target)}
                      >
                        Learn more &nbsp;
                      </button>
                    </div>
                  </div>
                  <div className="flex items-end justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="md:h-[17rem] h-[12rem]  "
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WellnessPlan
