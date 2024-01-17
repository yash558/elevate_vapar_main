import React from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from '../scrollToTop'
import { checkIcon } from '../../assets'

const SubscriptionCard = ({
  plan,
  description,
  features,
  icon,
  notRequired,
  color,
  price,
  onclick,
  btnText = 'Start Trial',
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[450px] w-[320px] flex-col justify-between rounded-3xl p-4 text-center shadow-lg transition-transform duration-300 transform hover:scale-105"
    >
      <div>
        <div className="flex items-center justify-center">
          <img
            src={icon}
            alt=""
            className="bg-[--primary-main] rounded-full p-2"
          />
        </div>
        <h2 className="mb-1 text-[24px] font-medium text-[#2D3A4B]">{plan}</h2>
        <div className="mb-3 flex items-center justify-center text-center text-3xl font-[600] text-[--primary-color]">
          <div>{price}/month</div>
        </div>
        <div className="mb-3 text-[1.2rem] font-[500] text-[#404040]">
          {description}
        </div>
      </div>
      <div className="flex justify-start flex-col">
        <h2 className="text-start text-[#404040] font-[600] my-4">
          Benefits you’ll get:
        </h2>
        <ul className="mb-10 flex flex-col gap-y-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start text-left text-[15px] text-[#404040] font-[400]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-[#2D3A4B]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="leading-[1.3]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={onclick}
          className="mt-auto rounded-md bg-[--primary-color] p-3 w-36 text-[18px] text-white text-center hover:bg-[#2D3A4B] transition-all duration-300"
        >
          <Link to="/signup" onClick={scrollToTop}>
            {btnText}
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SubscriptionCard
