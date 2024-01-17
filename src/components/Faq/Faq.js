import React, { useState } from "react";
import FaqQuestion from "./FaqQuestion";
const Faq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      question: "What is elavateVapar?",
      answer:
        "elavateVapar is a HealthTech Wellness Company, where we provide affordable annual subscription-based health plans with reimbursement for all of your healthcare requirements. OPD (doctor visit costs, medications, lab tests). Such services are also partnered with trusted partners, to help a seamless process to offer services like booking doctor’s appointments, medicine delivery, lab test, and health checkups appointments across India for everyone.",
    },
    {
      question: "How to avail services from elavateVapar?",
      answer:
        "elavateVapar offers annual subscription-based plans that you can buy to cover all your OPD expenses, incurred for doctor visits, medicines expenses, lab tests, and health check-ups etc. To ensure that we make it easy, you can also choose the option of online medicine delivery, at-home sample collection, and online doctor visits through our channel partners, making it at-your-door service.",
    },
    {
      question: "What are the plans that elavateVapar offers?",
      answer:
        "elavateVapar provides 4 plans i.e. CARE, HEALTH, PLUS and PLATINUM. All the plans are annual subscription plans with different benefits and reimbursement covered. Our plans start from Rs 4,000/- to Rs 24,000/-. The plan offers a 50% claim on prescribed pharmacy bills and diagnostic tests, ranging from INR 500 to INR 4,000 in benefits along with complimentary yearly preventive health check-ups. For complete details, you can refer to our website and go through the details of each plan.",
    },
    {
      question: "Can I use elavateVapar benefits immediately after purchase?",
      answer:
        "Activate the Annual Subscription for the chosen plan! Zero waiting time! Use it immediately!",
    },
    {
      question: "Does elavateVapar also offer plans for corporates?",
      answer:
        "Yes, elavateVapar helps corporates, start-ups, and MNCs, with customized plans for their employees. We provide the facility to determine how the costs will be shared between the employer and employees. This includes premiums, deductibles, co-pays, and out-of-pocket maximums. For more details, you may reach out to support@finlyt.com",
    },
    {
      question: "How much reimbursement can I get through elavateVapar Plans?",
      answer:
        "It's important to note that the 50% claim applies to pharmacy and lab tests as prescribed by doctors, rather than being considered as mere reimbursements. All plan costs are payable on an annual basis.",
    },
    {
      question: "How can I choose the best Healthcare OPD Plan for Me?",
      answer:
        "We recommend all our customers to understand the needs of your health and the coverage you may need. We at elavateVapar, offer 4 Healthcare plans to cater for your wellness needs and for more details, kindly refer to our Plans section.",
    },
    {
      question: "Does elavateVapar Plan cover Diagnostic Tests in their Plans?",
      answer:
        "Yes, In 3 plans i.e. Health, Plus & Platinum offered by elavateVapar, Diagnostic Tests are covered with separate cap amounts. ",
    },
    {
      question:
        "Are preventive services/annual health check-ups covered in elavateVapar’s Plans?",
      answer:
        "Health Check-Up is complimentary for the year, for the plan that has been purchased by the customer. Each health check-up is mentioned in our Plan section to avail the service.",
    },
    {
      question: "What benefits does elavateVapar offer in OPD Plans?",
      answer:
        "elavateVapar believes in providing the best OPD coverage to all its customers. Thus, we cover doctor consultations, online pharmacy, at home collection of samples for lab tests. etc. We suggest you read our Plan and Service sections to learn more about our offerings",
    },
    {
      question: "What do OPD Plans consist of ?",
      answer:
        "elavateVapar covers healthcare plans wherein the immediate cost of doctor consultations, lab tests, online pharmacy, health check ups, etc. are covered with the plan that the customer has chosen.",
    },
  ];

  return (
    <div className="bg-white" id="faq">
      <div className="py-16 mx-auto w-full px-4 max-w-7xl">
        <div className="blur-[35.12px] w-20 h-12 rounded-[50%] relative top-12  left-[42%] z-0 bg-[--primary-color]"></div>
        <h3 className="mb-12 text-[#0A0A0A] z-50 text-6xl text-center leading-0 font-[1000] tracking-light sm:leading-10">
          FAQs
        </h3>
        <hr className="border-0 border-gray-100" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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

export default Faq;
