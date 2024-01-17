import React from "react";
import {
  companyfive,
  companyfour,
  companyone,
  companysix,
  companythree,
  companytwo,
} from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutCompany.css";
const AboutCompany = () => {
  const data = [
    {
      img: companyone,
    },
    {
      img: companytwo,
    },
    {
      img: companythree,
    },
    {
      img: companyfour,
    },
    {
      img: companyfive,
    },

    {
      img: companysix,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-[#DEEFFF] p-8 my-10 flex items-center justify-center flex-col ">
      <div className="flex items-center justify-center">
        <div className="border-[1px] border-[#3267FF] rounded-md">
          <h1 className="md:p-2 p-1 text-[#4A4A4A] text-center font-[400] md:text-lg text-sm">
            Our Partners
          </h1>
        </div>
      </div>
      <div className="container md:px-12 px-2 ">
        <div className="mt-12 ">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div className="md:mx-4 mx-2 pr-0 mr-0" key={index}>
                  <img
                    src={item.img}
                    alt=""
                    className="h-28 w-44 object-contain"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
