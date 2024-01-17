import React, { useState } from "react";
import FaqQuestion from "./Faq/FaqQuestion";
import { serviceman } from "../assets";

const ServiceCycle = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      question: "Appointment Booking with Top Doctors",
      answer:
        "- Choose specialist doctors: Online/Offline \n - Anywhere, Anytime, 24/7 ",
    },
    {
      question: "Buy Prescribed Medications Anytime ",
      answer:
        "Our platform offers you the convenience and peace of mind you deserve when it comes to purchasing prescribed medications. With us, you can buy prescribed medications anytime, ensuring you have access to the treatments you need, precisely when you need them.",
    },
    {
      question: "Book Diagnostic Tests Near You",
      answer:
        "elavateVapar is designed to make your healthcare journey seamless and convenient. With just a few clicks, you can easily book lab/ diagnostic tests near you, ensuring that you have access to top-notch medical facilities and expert professionals.",
    },
    {
      question: "Claim Settlement ",
      answer:
        "- Upload document, doctor prescription, bills and reports (if any) and click submit. \n - Claim settlement within 5 working days.",
    },
  ];
  return (
    <div className="h-full bg-[#0C1E58] md:px-12 px-4 md:py-0 py-12 flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" md:pt-20 pt-0 ">
          <div className="mt-12">
            <h2 className="text-white text-3xl font-[600]">
              Convenient booking <br /> for{" "}
              <span className="text-[#3267FF]">expert</span> medical <br />
              consultations
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {data.map((item, index) => {
              return (
                <FaqQuestion
                  key={index}
                  color="#0C1E58"
                  textColor={true}
                  open={index === open}
                  title={item.question}
                  desc={item.answer}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="md:flex hidden">
          <img src={serviceman} alt="" loading="lazy" className="h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCycle;
