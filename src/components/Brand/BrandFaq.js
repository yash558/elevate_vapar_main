import React, { useState } from "react";
import FaqQuestion from "../Faq/FaqQuestion";

const BrandFaq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = 
    [
      {
        "question": "What does brand management enlist, and why is it necessary for my business?",
        "answer": "Brand management encompasses activities that build, maintain, and enhance your brand's perception. It includes defining your brand identity, ensuring consistency, and managing your brand in perceiving the target audience. Effective brand management is crucial for establishing trust, credibility, and differentiation in the market."
      },
      {
        "question": "Can you help with rebranding our business?",
        "answer": "Absolutely. If you're undergoing a complete rebrand or making strategic adjustments, our team can guide you through the process. We'll assess your current brand, understand your goals, and create a tailored rebranding strategy to enhance your market positioning."
      },
      {
        "question": "How do you handle brand crises or reputation management issues?",
        "answer": "We have an experienced team for crisis management and reputation repair. We implement proactive strategies to minimize risks, monitor online conversations, and respond swiftly to negative publicity. Open communication and transparency are central to our crisis management approach."
      },
      {
        "question": "How can we get started with your brand management services?",
        "answer": "Reach out to us through our contact page or give us a call. We'll schedule a consultation to understand your brand goals, challenges, and aspirations. From there, we'll tailor a brand management strategy to elevate your brand."
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

export default BrandFaq;
