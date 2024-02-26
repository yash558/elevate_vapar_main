import React, { useState } from "react";
import FaqQuestion from "../Faq/FaqQuestion";

const WebDesignFaq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      "question": "What platforms do you use for website development?",
      "answer": "We are proficient in using a variety of platforms, including WordPress, Shopify, Magento, and custom development solutions. The choice of platform depends on your specific requirements, scalability needs, and the functionality you desire for your website."
    },
    {
      "question": "Can you assist with website maintenance and updates after the initial development?",
      "answer": "We provide ongoing website maintenance services to keep your site running smoothly, including software updates, security patches, content updates, and any necessary adjustments to ensure optimal performance."
    },
    {
      "question": "Can you integrate third-party tools and plugins into our website?",
      "answer": "Absolutely. We can integrate various third-party tools, plugins, and APIs to enhance the functionality of your website. Whether it's e-commerce, analytics, or other specific needs, we ensure seamless integration for a more robust online presence."
    },
    {
      "question": "What web hosting services do you offer, and why is hosting important?",
      "answer": "We offer reliable and secure web hosting services tailored to your website's needs. Quality hosting ensures fast load times, securing transactions, and overall better user experiences. We can recommend hosting solutions that align with your specific requirements."
    }
  ]
  ;
  

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

export default WebDesignFaq;
