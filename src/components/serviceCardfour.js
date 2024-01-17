import React, { useState } from "react";
import FaqQuestion from "./Faq/FaqQuestion";
import { servicesnew3 } from "../assets";

const ServiceCardFour = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      question: "Appointment Booking",
      answer:
        "elavateVapar is designed to streamline and simplify your scheduling needs. Whether you're seeking medical consultations / appointments, our platform offers a seamless experience from start to finish. With just a few clicks, you can browse the availability of our specialist doctors, and select a time slot that suits your schedule",
    },
    {
      question: "Offline Consultation",
      answer:
        "elavateVapar offers seamless access to qualified medical professionals from the comfort of your home. Through our user-friendly interface, you can schedule virtual appointments with different and experienced specialist doctors. You may discuss your health concerns, receive expert medical advice, and even obtain prescriptions when necessary. Our secure and confidential platform ensures that your personal health information remains protected",
    },
    {
      question: "Emergency Assistance",
      answer:
        "Visit any hospital or Clinic on any medical assistance for health issues.",
    },
    {
      question: "Cancel and rescheduling",
      answer:
        "Our customers can easily cancel or reschedule their appointment through the platform. This process not only saves time but also enables customers to manage their healthcare more efficiently. Customers also have the flexibility to modify their appointments with just a few clicks.",
    },
  ];
  return (
    <div className="h-full bg-[#D3DEFF] py-12  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="md:pl-0 pl-4">
          <div className="my-8">
            <h2 className="text-[#0F0F0F] capitalize text-3xl font-[600]">
              Convenient offline booking <br /> for{" "}
              <span className="text-[#3267FF]">expert</span> medical <br />
              consultations
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
            src={servicesnew3}
            alt=""
            loading="lazy"
            className="md:h-[600px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardFour;
