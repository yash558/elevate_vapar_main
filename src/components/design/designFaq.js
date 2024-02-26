import React, { useState } from "react";
import FaqQuestion from "../Faq/FaqQuestion";

const DesignFaq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      "question": "Do you provide print-ready files for the designs you create?",
      "answer": "Yes, we provide print-ready files for all designs. Like business cards, brochures, or other print materials, our team ensures that the files meet the specifications for high-quality printing."
    },
    {
      "question": "Can you create designs for both print and digital materials?",
      "answer": "Yes, our design services cover both print and digital needs. Whether you need business cards, brochures, banners, or social media graphics, our designers are well-versed in creating designs optimized for various mediums."
    },
    {
      "question": "Do you offer branding services beyond logo design?",
      "answer": "Absolutely. Our branding services extend beyond logo design to encompass the entire brand identity, including designing brand collateral, defining colour schemes, selecting fonts, and creating brand guidelines to ensure consistency across all touchpoints."
    },
    {
      "question": "Can you assist with website design, including user interface (UI) and user experience (UX) design?",
      "answer": "We offer website design services that prioritize both UI and UX. Our goal is to create visually appealing websites with intuitive navigation, ensuring a positive and engaging experience for your website visitors."
    }
  ];
  
  

  return (
    <div className="bg-white" id="faq">
      <div className="py-16 mx-auto w-full px-4 max-w-7xl">
        <div className="blur-[35.12px] w-20 h-12 rounded-[50%] relative top-12  left-[42%] z-0 bg-[--primary-color]"></div>
        <h3 className="mb-12 text-[#0A0A0A] z-50 text-6xl text-center leading-0 font-[1000] tracking-light sm:leading-10">
          FAQs
        </h3>
        <hr className="border-0 border-gray-100" />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
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
  );
};

export default DesignFaq;
