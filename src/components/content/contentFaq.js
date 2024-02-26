import React, { useState } from "react";
import FaqQuestion from "../Faq/FaqQuestion";

const ContentFaq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      "question": "How do you ensure that the content aligns with our brand's voice and messaging?",
      "answer": "We conduct a thorough brand analysis and collaborate closely with you to understand your brand's voice, values, and messaging guidelines. Ensure that all content developed reflects your brand identity and resonates with your audience."
    },
    {
      "question": "Can you create multimedia content, such as videos and info graphics?",
      "answer": "Yes, we provide services for producing multimedia content. Our team is skilled in transforming your ideas into captivating films, educational info graphics, or interactive material that will make your audience stay forever."
    },
    {
      "question": "What is the process for requesting and receiving content from your agency?",
      "answer": "The process begins with a consultation to understand your content needs. Once we have a clear brief, our team will develop a content plan, share drafts for your feedback, and make revisions as necessary. The finalized content is then delivered according to an agreed-upon schedule."
    },
    {
      "question": "How do we get started with your content production services?",
      "answer": "Reach out to us through our contact page or give us a call. We'll schedule a consultation to discuss your content needs, understand your goals, and outline a tailored plan to kick-start the content production process."
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

export default ContentFaq;
