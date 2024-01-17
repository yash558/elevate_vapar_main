import React from "react";
import { checkIcon, servicebg, servicewoman } from "../../assets";

const CareerService = () => {
  const work = [
    {
      title: "One team Spirit",
    },
    {
      title: "Diverse colleagues to learn from",
    },
    {
      title: "High end technology to create Innovation and impact",
    },

  ];
  const work1 = [
    {
      title: "Competitive Salary",
    },
    {
      title: "Flexi - Working hours",
    },
    {
      title: "Healthcare Industry Exposure",
    },

  ];

  function scrollToTargetComponent() {
    const targetElement = document.getElementById('jobs');
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="flex items-center justify-center bg-[#F1F8FF]">
      <div className="flex items-center justify-center">
        <div className="flex md:flex-row  flex-col items-start justify-center">
          <div className="md:ml-40 ml-0 py-10 md:w-[100%] w-[90%]">
            <div className="flex items-start md:justify-start justify-center">
              <h1 className="text-[#3267FF] text-4xl font-[700]">
                Why Work Here
              </h1>
            </div>
            <div className="flex flex-col gap-8 mt-16 md:ml-0 ml-8">
            
              <div className="bg-white p-8 rounded-md  gap-4 md:w-[55%] w-[100%]">
                {work.map((item, index) => {
                  return <h1 key={index} className="flex gap-x-4 md:text-lg text-sm leading-10" ><img src={checkIcon} alt="" /> {item.title}</h1>;
                })}
              </div>
              <div className="bg-white p-8 rounded-md  gap-4  md:w-[55%] w-[100%]">
                {work1.map((item, index) => {
                  return <h1 key={index} className="flex gap-x-4 md:text-lg text-sm  leading-10" ><img src={checkIcon} alt="" /> {item.title}</h1>;
                })}
              </div>
            </div>
           

            <div className="flex items-center md:justify-start justify-center mt-16">
              <button
                className="mt-auto rounded-md bg-[#3267FF] font-[700]  p-4 w-44   text-[18px] text-white text-center"
                onClick={scrollToTargetComponent}
              >
                Explore Careers
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={servicebg}
              alt=""
              className="h-[800px] w-[1300px] md:flex hidden "
            />
          </div>
          <div className="">
            <img
              src={servicewoman}
              alt=""
              className="h-[300px] flex md:hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerService;
