import React from "react";
import CarrierHero from "../components/Career/CarrierHero";
import Navbar from "../components/Navbar/Navbarone";
import { Contact } from "../components";
import CarrierValue from "../components/Career/CarrierValue";
import CarrierOpening from "../components/Career/CarrierOpening";
import CareerService from "../components/Career/CarrierService";

const Carrier = () => {
  return (
    <div>
      <Navbar />
      <CarrierHero />
      <CarrierValue/>
      <CareerService/>
      <CarrierOpening/>
      <div className=" md:mt-20 mt-4">
      <h1 className="text-[#3267FF] text-3xl font-bold md:ml-64 ml-8">Any other queries</h1>
        <Contact />
      </div>
    </div>
  );
};

export default Carrier;
