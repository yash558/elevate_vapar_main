import React, { useState } from "react";
import FaqQuestion from "./Faq/FaqQuestion";
import { servicesnew1 } from "../assets";

const ServiceCardThree = ({ image, title }) => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      question: "Pharmacy Anywhere, Anytime",
      answer:
        "Our pharmacy anywhere anytime is one of the effective ways to receive the prescribed round-the-clock from anywhere. elavateVapar ensures a convenient way to access medications, especially for those customers who may have difficulty visiting a physical pharmacy.",
    },
    {
      question: "Upload Prescription",
      answer:
        "Through our simple and user-friendly interface, our customers can upload their prescriptions directly onto the platform. This step guarantees accurate dispensing of your medication, as well as enables pharmacists to provide personalized guidance and recommendations",
    },
    {
      question: "Easy Pay",
      answer:
        "Our goal is to provide better healthcare at your convenience. Therefore, elavateVapar allows all our customers to pay accordingly to their convenience i.e. Cash on Delivery (COD), UPI, Debit or Credit Card, etc.",
    },
    {
      question: "Delivery",
      answer:
        "As soon as a customer places an order through elavateVapar, we process the request, and deliver the order from our trusted and empanelled logistics partners. Once the purchased Product has been delivered to the Logistics Partner, the customer will be provided with a special tracking identity number that will allow them to monitor the progress of the delivery of the Product.",
    },
  ];
  return (
    <div className="h-full py-12  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="">
          <img
            src={servicesnew1}
            alt=""
            loading="lazy"
            className=" md:h-[600px] h-[400px]"
          />
        </div>
        <div className="md:pl-0 pl-4">
          <div className="my-8">
            <h2 className="text-[#0F0F0F] capitalize text-3xl font-[600]">
              Get your Prescribed{" "}
              <span className="text-[#3267FF]">Pharmacy Anywhere,</span> <br />{" "}
              Anytime in a few Clicks!
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {data.map((item, index) => {
              return (
                <FaqQuestion
                  key={index}
                  open={index === open}
                  title={item.question}
                  desc={item.answer}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardThree;
