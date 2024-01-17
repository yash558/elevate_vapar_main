import React from "react";

import {
  Countdown,
  Faq,
  Hero,
  Subscription,
  About,
  Service,
  Contact,
  Navbar,
} from "../components";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <ScrollPage/> */}
      {/* <Countdown /> */}
      {/* <About /> */}
      <Services />
      {/* <Subscription /> */}
      <Service />
      <Testimonial />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
