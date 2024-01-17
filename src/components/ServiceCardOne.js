import React, { useState } from 'react'
import FaqQuestion from './Faq/FaqQuestion'
import { servicesnew2 } from '../assets'

const ServiceCardOne = () => {
  const [open, setOpened] = useState(false)

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null)
    }

    setOpened(index)
  }

  const data = [
    {
      question: 'Claim Submission',
      answer:
        "Our customers need to submit the OPD bills to us through their account using Dashboard. Following documents need to be submitted: \n 1) Doctor Prescription \n 2) Doctor Fee Invoice/Bill \n 3) Pharmacy Invoice/Bill \n 4) Lab Test Bills",
    },
    {
      question: 'Claim Verification',
      answer:
        'Our claim team will review the submission request, against the prescription and bills to verify the reimbursement. The process is completed in a short time through a well-developed engine of team and technology.',
    },
    {
      question: 'Claim Settlement',
      answer:
        'Our Claim Settlement service ensures that our customers get timely reimbursement of their OPD expenses, like - Doctor Consultation payback, pharmacy Bills, Diagnostic tests and many more. Our dedicated team for claim settlement makes sure that you receive the reimbursement amount on time without any hassle. Majorly, Claim Settlement comprises \n - Claim Submission \n - Verification \n - Payment.',
    },
    {
      question: 'Payment',
      answer:
        "Once the claim is verified, the settlement payment is issued to the customer. The payment amount is credited to the customer's account.",
    },
  ]
  return (
    <div className="h-full py-12  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2  md:gap-20 gap-8">
        <div className="flex items-center justify-center">
          <img
            src={servicesnew2}
            alt=""
            loading="lazy"
            className="mt-10 md:h-[450px] md:w-[500px] w-[300px] rounded-2xl h-[350px]"
          />
        </div>
        <div className="md:pl-0 pl-4">
          <div className="md:my-8 my-2">
            <h2 className="text-[#0F0F0F] capitalize text-3xl font-[600]">
            Easy Claim Process
            </h2>
          </div>
          <div className=" grid grid-cols-1 gap-8">
            {data.map((item, index) => {
              return (
                <FaqQuestion
                  key={index}
                  open={index === open}
                  title={item.question}
                  desc={item.answer}
                  toggle={() => toggle(index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCardOne
