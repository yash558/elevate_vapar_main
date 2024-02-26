import React from "react";
import MarketingFaq from "../components/marketing/marketingFaq";
import MarketingTestimonial from "../components/marketing/marketingTestimonial";
import MarketingPortfolio from "../components/marketing/marketingPortfolio";
import HeroService from "../components/HeroService";
import TextAnimation from "../components/textScroll";
import PinnedImagesAnimation from "../components/imagesAnimation";

const Marketing = () => {
  return (
    <div>
      <HeroService />
      {/* <TextAnimation />
      <PinnedImagesAnimation/> */}
      <MarketingPortfolio />
      <MarketingTestimonial />
      <MarketingFaq />
    </div>
  );
};

export default Marketing;
