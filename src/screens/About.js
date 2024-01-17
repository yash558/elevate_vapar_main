import React from "react";
import NavbarOne from "../components/Navbar/Navbarone";
import HeroAbout from "../components/AboutUs/HeroAbout";
import { Contact, } from "../components";
import InfoAbout from "../components/AboutUs/InfoAbout";
import AboutCompany from "../components/AboutUs/AboutCompany";
import MeetTeam from "../components/AboutUs/MeetTeam";
import AboutValue from "../components/AboutUs/AboutValue";
import CarrierValue from "../components/Career/CarrierValue";
import BookingForm from "../components/Book/Booking";
import AboutSection from "../components/About";
import Documentation from "../components/AboutUs/Documentation";
import Quote from "../components/AboutUs/Quote";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <AboutSection />
      <Documentation/>
      {/* <InfoAbout /> */}
      {/* <AboutCompany /> */}
      {/* <MeetTeam /> */}
      <Quote/>
      <CarrierValue />
      {/* <AboutValue/> */}
      <BookingForm />
    </div>
  );
};

export default About;
