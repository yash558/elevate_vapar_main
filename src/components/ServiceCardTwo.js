import React, { useState } from "react";
import FaqQuestion from "./Faq/FaqQuestion";
import { servicesnew4 } from "../assets";

const ServiceCardTwo = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      question: "Book Health Check-Ups & Diagnostic Tests",
      answer:
        "Through elavateVapar, you can create an account, log in, and schedule appointments for various tests and check-ups. You may need to provide your contact details, choose the tests you require, and select a suitable date and time slot.",
    },
    {
      question: "Labs Nearby",
      answer:
        "For your convenience, we provide a mechanism for our customers to find and reach the nearby labs / diagnostic centers to get tests done. Additionally, our customers can schedule the test in the comfort of their homes, where a phlebotomist shall visit you to collect the sample.",
    },
    {
      question: "Lab at Home",
      answer:
        "Our Customers can place a request for a home pick-up for sample collection. In that case, we can arrange a home visit for you and our phlebotomists will collect the samples from your home directly.",
    },
    {
      question: "Download Report",
      answer:
        "Customers can download the test reports from the portal, which allows time-saving. This process eliminates the need for physical copies and reduces paper waste, contributing to a more sustainable and eco-friendly approach to information consumption.",
    },
  ];
  return (
    <div className="h-full bg-[#D3DEFF] py-12  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="md:pl-0 pl-4">
          <div className="my-8">
            <h2 className="text-[#0F0F0F] text-3xl font-[600]">
              Keep your Health Up to Date <br /> with Proper{" "}
              <span className="text-[#3267FF]">
                Diagnostic Tests & <br /> Health Check-Ups
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {data.map((item, index) => {
              return (
                <FaqQuestion
                  key={index}
                  color="#D3DEFF"
                  open={index === open}
                  title={item.question}
                  desc={item.answer}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <img
            src={servicesnew4}
            alt=""
            loading="lazy"
            className="md:h-[600px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
