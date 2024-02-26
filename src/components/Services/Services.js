import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { service1, service2, service3, service4, service5 } from "../../assets";

const Services = () => {
  const service = [
    {
      title: "Marketing and Promotion",
      description:
        "Promotion services help you with SEO, Advertisement Publishing, Social Media Management and Copywriting",
      link: "/marketing",
      image: service1,
    },
    {
      title: "Content Production",
      description:
        "Content production includes video creation for social media, professional courses, advertisements, podcasts or jingles.",
      link: "/content",
      image: service2,
    },
    {
      title: "Brand Management",
      description:
        "Brand Management and Building includes Enterprise Risk Management, Reputation Management and Consultancy for optimal growth",
      link: "/brand",
      image: service3,
    },
    {
      title: "Web Services",
      description:
        "Services from development , designing , deployment to maintainence ensure complete online presence.",
      link: "/web",
      image: service4,
    },
    {
      title: "Designing and Graphics",
      description:
        "Our Designing Services includes range from Graphics, UI, UX ,Posters, Illustrations, Palettes to a lot more.",
      link: "/designing",
      image: service5,
    },
  ];

  return (
    <div className="mb-12 w-full flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col section">
        <h1 className="text-[#1A202C] text-xl font-bold border-2 p-2 rounded-md">
          Our Services
        </h1>
        <h1 className="text-[#1A202C] text-5xl font-extrabold my-2">
          Services
        </h1>
        <p className="text-center text-[#4A5568] md:w-[60%] w-[90%]">
          Discover our healthcare plans designed to meet all your health and
          wellness needs in one place.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {service.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col-reverse w-full md:w-[450px] justify-between shadow-md bg-[--main-color] h-full rounded-lg hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col justify-between p-4  w-[100%]">
              <h1 className="text-[#2D3748] md:text-2xl text-lg font-[700] mb-2">
                {item.title}
              </h1>
              <p className="text-[#4A5568] md:text-sm text-xs font-[400] mb-4">
                {item.description}
              </p>
              <Link
                to={item.link}
                onClick={() => window.scrollTo(0, 0)}
                className="text-[--primary-color] flex items-center font-bold text-lg transition-transform duration-300 transform hover:translate-x-2"
              >
                Learn more
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[--primary-color] ml-2 h-4 w-4 p-2 rounded-full bg-white"
                />
              </Link>
            </div>
            <div className="flex items-end justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="md:h-[18rem]  h-[11rem] md:rounded-r-lg rounded-lg md:mt-0 mt-4 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
