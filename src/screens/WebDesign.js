import React from 'react'
import WebDesignHero from '../components/webdesign/webDesignHero'
import WebDesignPortfolio from '../components/webdesign/webDesignPortfolio'
import WebDesignFaq from '../components/webdesign/webDesignFaq'
import WebDesignTestimonial from '../components/webdesign/webDesignTestimonial'

const WebDesign = () => {
  return (
    <div>
        <WebDesignHero/>
        <WebDesignPortfolio/>
        <WebDesignFaq/>
        <WebDesignTestimonial/>
    </div>
  )
}

export default WebDesign