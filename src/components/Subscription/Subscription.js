import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { layers } from "../../assets";
import CorporateBannerTwo from "../CorporateBannerTwo";
import { useStateContext } from "../../StateContext";

const Subscription = () => {
  const { showMonthly, setShowMonthly } = useStateContext();

  const toggleMonthly = () => {
    setShowMonthly(true);
  };

  const toggleYearly = () => {
    setShowMonthly(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-[--main-color] ${
        showMonthly ? "py-12" : "pt-12"
      }`}
      id="corporatexx"
    >
      <div className="">
        <h1 className="text-[--primary-color] text-lg rounded-md font-[700] border-2 p-2">
          Pricing Plans
        </h1>
      </div>
      <div className="my-8 flex items-center justify-center flex-col">
        <h1 className="mb-4 md:text-5xl text-3xl font-[600] text-[#0A0A0A]">
          Plans and Pricing
        </h1>
        {/* <p className="md:w-[50%] w-[90%] text-center  text-sm text-[#0A0A0A] font-[400]">
          elavateVapar has your Corporate employees covered under unlimited doctor
          consultation, discounts on lab tests and medicine with 24/7 support.
          For more details, for corporate / Employees elavateVapar annual / monthly
          subscription plans , you may write to support@elavateVapar.com
        </p> */}
      </div>
      <div className="flex flex-col-reverse gap-8 items-center justify-center">
        {showMonthly ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
            <SubscriptionCard
              color="#ffffff"
              plan="Care Plan"
              price="₹333" // Monthly price here
              icon={layers}
              features={[
                "Unlimited Doctor Consultations across India - Online/Offline",
                "Maximum limit of INR 500/- per Doctor Consultation",
                "Easy claim Processing and cashless OPD with network doctors",
                "Add family members at 50% discount",
              ]}
              description="Billed Annually."
              notRequired={["AKT MCQs"]}
              btnText="Get Started"
            />
            <SubscriptionCard
              color="#ffffff"
              plan="Health Plan"
              price="₹1,000"
              icon={layers}
              features={[
                "Unlimited Doctor Consultations across India - Online/Offline",
                "Maximum limit of INR 1000/- per Doctor Consultation",
                "Prescribed pharmacy & lab test - 50% reimbursement or INR 1,000/- (whichever lower)",
                "Free Preventive Annual Health Check-up - 87 parameters.",
                "Easy claim Processing and cashless OPD with network doctors",
                "Add family members at 50% discount",
              ]}
              description="Billed Annually"
              btnText="Get Started"
              notRequired={[]}
            />
            <SubscriptionCard
              //   color="#"
              color="#ffffff"
              plan="Plus Plan"
              price="₹1,500"
              icon={layers}
              features={[
                "Unlimited Doctor Consultations across India - Online/Offline",
                "Maximum Limit of INR 1,500 per Doctor Consultation.",
                "Prescribed pharmacy & lab test - 50% reimbursement or INR 1,500/- (whichever lower)",
                "Free Preventive Annual Health Check-up - 89 parameters.",
                "Easy claim Processing and cashless OPD with network doctors",
                "Add family members at 50% discount",
              ]}
              description="Billed Annually"
              btnText="Get Started"
              notRequired={[]}
            />
            <SubscriptionCard
              //   color="#"
              color="#ffffff"
              plan="Platinum Plan"
              price="₹2,000"
              icon={layers}
              features={[
                "Unlimited Doctor Consultations across India - Online/Offline",
                "Maximum Limit of INR 2,000 per Doctor Consultation.",
                "Prescribed pharmacy & lab test - 50% reimbursement or INR 2,000/- (whichever lower)",
                "Free Preventive Annual Health Check-up - 90 parameters.",
                "Easy claim Processing and cashless OPD with network doctors",
                "Add family members at 50% discount",
              ]}
              description="Billed Annually"
              btnText="Get Started"
              notRequired={[]}
            />
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-10 mx-auto">
            <SubscriptionCard
              color="#ffffff"
              plan="Care Plan"
              price="₹4,000" // Monthly price here
              icon={layers}
              features={[
                "Unlimited Doctor Consultations",
                "₹500/Doctor Consultation Fees Limit",
                "Claim 50% on prescribed pharmacy and lab-tests bills with a maximum limit of upto INR 500 per claim",
                " Visit Doctor anytime anywhere across India at ₹1899",
                "Number of parameters included in the health check-ups are 84",
              ]}
              description="Payable Annually"
              notRequired={["AKT MCQs"]}
              btnText="Get Started"
            />
            <SubscriptionCard
              color="#ffffff"
              plan="Health Plan"
              price="₹12,000"
              icon={layers}
              features={[
                "Unlimited Doctor Consultations",
                "₹1000/Doctor Consultation Fees Limit ",
                "Claim 50% on prescribed pharmacy and lab-tests bills with a maximum limit of upto INR 1000 per claim",
                " Visit Doctor anytime anywhere across India at ₹2,799",
                "Number of parameters included in the health check-ups are 87",
              ]}
              description="Payable Annually"
              btnText="Get Started"
              notRequired={[]}
            />
            <SubscriptionCard
              //   color="#"
              color="#ffffff"
              plan="Plus Plan"
              price="₹18,000"
              icon={layers}
              features={[
                "Unlimited Doctor Consultations",
                "₹1500/Doctor Consultation Fees Limit ",
                "Claim 50% on prescribed pharmacy and lab-tests bills with a maximum limit of upto INR 1500 per claim",
                " Visit Doctor anytime anywhere across India at ₹3,899",
                "Number of parameters included in the health check-ups are 89",
              ]}
              description="Payable Annually"
              btnText="Get Started"
              notRequired={[]}
            />
            <SubscriptionCard
              //   color="#"
              color="#ffffff"
              plan="Platinum Plan"
              price="₹24,000"
              icon={layers}
              features={[
                "Unlimited Doctor Consultations",
                "₹2000/Doctor Consultation Fees Limit ",
                "Claim 50% on prescribed pharmacy and lab-tests bills with a maximum limit of upto INR 2000 per claim",
                " Visit Doctor anytime anywhere across India at ₹4,599",
                "Number of parameters included in the health check-ups are 90",
              ]}
              description="Payable Annually"
              btnText="Get Started"
              notRequired={[]}
            />
          </div>
          // <CorporateBannerTwo />
        )}

        <div className="flex items-center justify-center mt-4 space-x-4">
          <button
            className={`${
              showMonthly
                ? "bg-[--primary-color] text-white"
                : "text-[--primary-color] bg-[#ffffff]"
            } px-4 py-2 rounded-md font-[600]`}
            onClick={toggleMonthly}
          >
            Monthly
          </button>
          <button
            className={`${
              !showMonthly
                ? "bg-[--primary-color] text-white"
                : "bg-[#ffffff] text-[--primary-color]"
            } px-4 py-2 rounded-md font-[600]`}
            onClick={toggleYearly}
          >
            Yearly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
