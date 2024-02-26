import React from 'react'
import DesignHero from '../components/design/designHero'
import DesignFaq from '../components/design/designFaq'
import DesignTestimonial from './../components/design/designTestimonial'
import DesignPortfolio from '../components/design/designPortfolio'

const Design = () => {
  return (
    <div>
      <DesignHero />
      <DesignPortfolio />
      <DesignFaq />
      <DesignTestimonial />
    </div>
  )
}

export default Design
