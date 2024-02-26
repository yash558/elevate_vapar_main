import React from 'react'
import BrandFaq from '../components/Brand/BrandFaq'
import BrandHero from '../components/Brand/BrandHero'
import BrandPortfolio from '../components/Brand/brandPortfolio'
import BrandTestimonial from '../components/Brand/brandTestimonial'

const Brand = () => {
  return (
    <div>
        <BrandHero/>
        <BrandPortfolio/>
        <BrandTestimonial/>
        <BrandFaq/>
    </div>
  )
}

export default Brand