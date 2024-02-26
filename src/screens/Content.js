import React from 'react'
import ContentFaq from '../components/content/contentFaq'
import ContentHero from '../components/content/contentHero'
import ContentTestimonial from '../components/content/contentTestimonial'
import ContentPortfolio from '../components/content/contentPortfolio'

const Content = () => {
  return (
    <div>
        <ContentHero/>
        <ContentPortfolio/>
        <ContentTestimonial/>
        <ContentFaq/>
    </div>
  )
}

export default Content