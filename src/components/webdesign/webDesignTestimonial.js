import React from "react";
import { profile, testimonial1, testimonial2 } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import scrollToTop from "../scrollToTop";

const WebDesignTestimonial = ({ visible }) => {
  const testimonial = [
    {
      name: "Rishabh Srivastava",
      image: testimonial1,
      designation: "Marketing Manager",
      review:
        "I've purchased the platinum plan for my mother, who has diabetes and needs frequent doctor consultations, pharmacy services, and laboratory tests. Thanks to elavateVapar, we've managed to lower our monthly outpatient department (OPD) costs with the platinum plan. I've also had a remarkably swift and hassle-free claim experience; all my claims were settled within 48 hours. Thank you, elavateVapar Team!",
    },
    {
      name: "Vishal",
      image: testimonial2,
      designation: "Company Ceo",
      review:
        "elavateVapar has helped me cover all my ad hoc expenses with easy claim settlement. The process is very smooth and easy for me and less time consuming.",
    },
    {
      name: "Ranjana Rajput",
      image: testimonial2,
      designation: "Company Ceo",
      review:
        "The elavateVapar plans and pricing are very economical and the multiple pay options are really helpful.",
    },
    {
      name: "Ratan Dev",
      image: testimonial2,
      designation: "Company Ceo",
      review:
        "elavateVapar platform offers one in all places. I urgently needed to book an appointment with a doctor and within a click I did, and the rest of the process of buying medicines and lab test was just so easy and I got my reports on time. elavateVapar really helped me in the most urgent situation",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 1024, // For desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="h-full  bg-gradient-to-r from-[#ffffff] to-[--main-color]  flex flex-col items-center justify-between  p-10">
      <div className={visible ? "visible" : "hidden"}>
        <h1 className="text-[#000A2D] text-2xl text-center my-12 font-[600]">
          More than{" "}
          <span className="text-white bg-[--primary-color] p-1 rounded-md">
            200+
          </span>{" "}
          have trusted elavateVapar and made their life easier
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-28 ml-4">
            <div className=" flex items-center md:justify-start justify-center">
              <h1 className="text-[--primary-color] text-lg rounded-md font-[700]  border-2  p-2">
                Our Testimonial
              </h1>
            </div>
            <div className="my-2">
              <h1 className="text-[#000A2D] text-center md:text-left text-2xl md:text-5xl font-[800]">
                Phenomenal Results that we have given our clients
              </h1>
            </div>
            <div className="lg:w-[70%] my-2 md:w-[40%] sm:w-[90%]">
              <p className="md:text-start text-justify md:text-sm text-xs">
                We believe that the voices of those who have entrusted us with
                their care speak volumes about the quality of our service. These
                testimonials are more than just words; they are a testament to
                the difference we make in the lives of the individuals and
                families we serve.
              </p>
            </div>
            <div className="my-4 flex md:justify-start  justify-center">
              <Link to="/plans" onClick={scrollToTop}>
                <button className="mt-auto rounded-md bg-[--primary-color] font-[700]  p-3 w-44   text-[18px] text-white text-center">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="container w-[100%] md:w-[70%]">
              <div className="grid grid-cols-1">
                <Slider {...settings}>
                  {testimonial.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex w-full h-full  p-6 items-center flex-col shadow-lg bg-[#FFFFFF] rounded-xl"
                      >
                        <div className="h-12">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="56"
                            height="55"
                            viewBox="0 0 56 55"
                            fill="none"
                            className="h-10 w-10"
                          >
                            <path
                              d="M11.2434 14.5637C8.5276 14.5637 6.19855 15.5348 4.25624 17.4771C2.31393 19.4195 1.34277 21.7485 1.34277 24.4643V40.9653H17.8438V24.4643H4.64298C4.64298 22.6423 5.28755 21.0867 6.57669 19.7976C7.86584 18.5085 9.4214 17.8639 11.2434 17.8639V14.5637ZM34.3448 14.5637C31.629 14.5637 29.3 15.5348 27.3577 17.4771C25.4154 19.4195 24.4442 21.7485 24.4442 24.4643V40.9653H40.9452V24.4643H27.7444C27.7444 22.6423 28.389 21.0867 29.6781 19.7976C30.9673 18.5085 32.5228 17.8639 34.3448 17.8639V14.5637ZM4.64298 27.7645H14.5436V37.6651H4.64298V27.7645ZM27.7444 27.7645H37.645V37.6651H27.7444V27.7645Z"
                              fill="#8B4513"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col justify-between  w-[100%] ">
                          <div className="flex gap-4 mb-4">
                            <img src={profile} alt="" className="h-8" />
                            <h1 className="text-[#000A2D] md:text-lg text-sm font-[700]">
                              {item.name}
                            </h1>
                          </div>
                          <div>
                            <h1 className="text-[#636571] text-[10px] md:text-[15px] font-[400]">
                              {item.review}
                            </h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignTestimonial;
