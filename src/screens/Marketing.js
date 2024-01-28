import React from 'react'
import MarketingFaq from '../components/marketing/marketingFaq'
import MarketingTestimonial from '../components/marketing/marketingTestimonial'
import MarketingPortfolio from '../components/marketing/marketingPortfolio'
import HeroService from '../components/HeroService'

const Marketing = () => {
  return (
    <div>
      <HeroService/>
        <MarketingPortfolio/>
        <MarketingTestimonial/>
        <MarketingFaq/>
    </div>
  )
}

export default Marketing