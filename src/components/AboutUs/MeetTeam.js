import React from "react";
import {
  Instagram,
  Linkedin,
  facebook,
  team1,
  team2,
  team3,
  team4,
  team5,
  twitter,
  youtube,
} from "../../assets";

const MeetTeam = () => {
  const team = [
    {
      image: team2,
      name: "Umesh Gangadhar",
      designation: "Founder & Chief Executive Officer",
      linkedin: "https://www.linkedin.com/in/umesh-k-6ba412180/",
      desc:
        "Umesh, holds more than two decades experience in sales & operations. Umesh was keen on the idea of elavateVapar, which originated post COVID-19 Pandemic with a mission to provide affordable healthcare services along with knowledge of personal finance to everyone, all under one roof, to cater to long-term wealth and health needs. At elavateVapar, we aim to drive the company to making  high-quality healthcare, through technology, affordable and accessible to everyone, anywhere, and everywhere ",
      instagram: " https://www.instagram.com/elavateVapar/",
      twitter: "https://twitter.com/elavateVapar",
    },
    {
      image: team5,
      name: "Dr Tareq Abdulqader",
      linkedin: "https://www.linkedin.com/in/tareq-abdulqader/",
      designation: "Co-Founder & Chief Technology Officer",
      twitter: "https://twitter.com/elavateVapar",
      desc:
        "Dr. Tareq holds extensive knowledge in Engineering with experience in working with multiple sectors like, Oil and Gas, Renewables, Water Treatment Centers and Manufacturing Dr. Tareq's diverse and varied knowledge, combined with his passion for innovation and next-generation technologies, has prompted him to become part of OPDSsure. He understands the significance of healthcare and its potential growth in the next few years. He continues to focus his efforts on adopting business strategies in accordance with technology, which will contribute to elavateVapar being a top player with exponential and steady growth.",
      instagram: "https://www.instagram.com/elavateVapar/",
    },
    {
      image: team1,
      name: "Joyeeta Sarkar",
      designation: "Co-Founder & Chief Human Resources Officer",
      linkedin: "https://www.linkedin.com/in/joyeeta-sarkar-206ba020/",
      instagram: "https://www.instagram.com/elavateVapar/",
      twitter: "https://twitter.com/elavateVapar",
      desc:
        "Joyeeta holds more than a decade in the Human Resources department, while working with various industries across India. Joyeeta recognized the existing gaps in healthcare that could be readily filled with emerging technologies and collaborated to establish a technology-driven OPD Insure for everyone in India. Joyeeta's goal is to establish elavateVapar as an excellent platform for everyone to access OPD coverage, while focusing to build a team of determined thinkers who are go-getters, enjoy what they do, and solve some of the industry's most primary issues while making a difference in people's lives.",
    },
    {
      image: team3,
      name: "Jyoti (Tiwari) Bhaskar",
      instagram: "https://www.instagram.com/elavateVapar/",
      linkedin: "https://www.linkedin.com/in/jyoti-bhaskar-b8b0a95b/",
      designation: "Co-Founder & Chief Sales Officer",
      twitter: "https://twitter.com/elavateVapar",
      desc:
        "Jyoti holds nearly two decades of experience in B2B and FMCG Sales, Distribution management & Key account management. Jyoti believes elavateVapar as a HealthTech reflects a transformative synergy between cutting-edge technology and compassionate care, promising to improve medical accessibility, empower proactive well-being, and usher in an era of effortless and holistic tailored health management. She trusts elavateVapar has the ability to transform how we perceive and pursue our wellness journey, combining creativity with empathy to build a healthier and more harmonious world.",
    },
    {
      image: team4,
      name: "Manoj Pal",
      designation: "Co-Founder & Chief Financial Officer",
      instagram: "https://www.instagram.com/elavateVapar/",
      twitter: "https://twitter.com/elavateVapar",
      linkedin: "https://www.linkedin.com/in/manoj-pal-a3842823/",
      desc:
        "Manoj holds more than three decades experience in Finance & operations. Manoj's focus brings forth exemplary leadership in improving and creating healthier lives by offering great health and wealth services while lowering the cost of healthcare for everyone in the areas we serve.",
    },
  ];
  return (
    <div>
      <div className=" h-full flex items-start md:my-20 my-10  flex-col justify-between">
        <div className="container">
          <div className="md:w-[80%] w-[95%] md:pl-40 pl-4 my-12">
            <div className=" flex items-center justify-start my-4">
              <h1 className="text-[--primary-color] text-lg rounded-md font-[700]  border-2  p-2">
                About Us
              </h1>
            </div>
            <div className="my-4">
              <h2 className="md:text-5xl text-3xl font-[600]">
                Meet Our <span className="text-[#3267FF]">Team</span>
              </h2>
            </div>
            <div className="my-4">
              <p className="text-justify font-[400] text-lg">
                elavateVapar team is driven by Passion, resilience and
                creatively talented individuals. We are a company who is
                passionately working towards contributing to make a social
                impact by working together as a team, where everyone believes in
                building a future that everyone needs.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="team-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 md:mx-36 mx-8"> */}
        <div className="team-container flex flex-wrap items-center justify-center gap-12  mx-8">
          {team.map((item, index) => (
            <div
              className="overflow-hidden md:w-[400px] w-[300px] h-[300px] transform cursor-pointer  hover:scale-106  transition-transform flex flex-col items-center justify-center bg-[#EDF6FF] p-8 rounded-lg"
              key={index}
            >
              <div className="flex items-center justify-center flex-col">
                <img
                  src={item.image}
                  alt=""
                  className="h-40 w-40 rounded-full object-cover"
                  style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
                />

                <h2 className="text-[#000] text-lg font-[600] mt-4">
                  {item.name}
                </h2>
                <h2 className="text-[#3267FF] text-center text-sm">
                  {item.designation}
                </h2>
                {/* <h2 className="text-[#5D5D5D] mt-3 text-[14px] text-center font-[400]">
                  {item.desc}
                </h2>               */}
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#EDF6FF] overflow-y-auto p-6 rounded-lg shadow-md transform rotate-y-180 opacity-0 hover:opacity-100 transition-opacity">
                <h2 className="text-[#5D5D5D] mt-3 text-justify text-[14px] font-[400] ">
                  {item.desc}
                </h2>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <a href={item.linkedin} target="_blank">
                    <button>
                      <img src={Linkedin} alt="" className="h-6" />
                    </button>
                  </a>
                  <a href={item.twitter} target="_blank">
                    <button>
                      <img src={twitter} alt="" className="h-6" />
                    </button>
                  </a>
                  <a href={item.instagram} target="_blank">
                    <button>
                      <img src={Instagram} alt="" className="h-6" />
                    </button>
                  </a>
                  <a
                    href="https://www.youtube.com/@elavateVapar"
                    target="_blank"
                  >
                    <button>
                      <img src={youtube} alt="" className="h-6" />
                    </button>
                  </a>
                  <a href="https://shorturl.at/kEGM5" target="_blank">
                    <button>
                      <img src={facebook} alt="" className="h-6" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
