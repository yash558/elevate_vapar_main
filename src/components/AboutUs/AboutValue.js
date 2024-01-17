import React from "react";
import { value } from "../../assets";

const AboutValue = () => {
  const team = [
    {
      image: value,
      name: "Our Vision",
      desc:
        "Our vision at elavateVapar is to lead as a premier provider of outpatient care and health wellness services, renowned for our unwavering commitment to patient satisfaction, innovation, and ethical excellence. We aim to shape a healthcare ecosystem that seamlessly integrates advanced medical technologies, compassionate care, and sustainable practices, elevating patient quality of life and inspiring healthier communities.",
    },
    {
      image: value,
      name: "Our Mission",
      desc:
        "Our mission is to empower customers, through exceptional outpatient medical services, wellness programs, and cutting-edge treatments, fostering holistic well-being while actively contributing to healthier individuals and a sustainable environment.”Our Values-Similar to “Careers Page",
    },
    {
      image: value,
      name: "Our Values",
      desc:
        "The moment the plan gets activated, you can avail it for the applicable services.",
    },
  ];
  return (
    <div>
      <div className="md:py-24 py-10 h-full flex items-start bg-[#DEEFFF]  flex-col justify-between">
        <div className="container">
          <div className="md:w-[80%] w-[95%]  md:pl-40 pl-4 my-12">
            <div className=" flex items-center justify-start md:mb-20 mb-4">
              <h1 className="text-[--primary-color] text-xl rounded-md font-[700]  border-2 border-[#3267FF]  p-2">
                Our Values
              </h1>
            </div>
            <div className="my-4">
              <h2 className="md:text-5xl text-3xl font-[600]">
                Vision, Mission and{" "}
                <span className="text-[#3267FF]">Values</span>
              </h2>
            </div>
            <div className="my-4">
              <p className="text-justify font-[400] text-lg">
                You may easily access a world of healthcare benefits by
                following three easy steps!
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1  gap-8 md:mx-36 mx-4">
          {team.map((item, index) => (
            <div
              className="flex flex-col items-center justify-start  p-4"
              key={index}
            >
              <img src={item.image} alt="" className="h-12" />
              <h2 className="text-[#000] text-lg font-[600] mt-4">
                {item.name}
              </h2>

              <h2 className="text-[#5D5D5D] mt-3 text-[14px] text-justify font-[400]">
                {item.desc}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValue;
