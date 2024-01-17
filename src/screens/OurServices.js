import React from 'react'
import HeroService from '../components/HeroService'
import NavbarOne from '../components/Navbar/Navbarone'
import { Contact } from '../components'
import ServiceCardOne from './../components/ServiceCardOne'
import ServiceCardTwo from '../components/ServiceCardTwo'
import ServiceCardThree from '../components/ServiceCardThree'
import ServiceCardFour from '../components/serviceCardfour'
import ServiceBanner from '../components/Servicebanner'
import ServiceCycle from '../components/Servicecycle'
import CorporateBanner from '../components/CorporateBanner'
import CorporateBannerTwo from '../components/CorporateBannerTwo'

const OurServices = () => {
  return (
    <div>  
      <HeroService />
      <ServiceCycle />
      <ServiceBanner />
      <ServiceCardOne />
      <ServiceCardFour />
      <ServiceCardThree />
      <ServiceCardTwo />
      <div id="corporatexx">
        <CorporateBannerTwo />
      </div>
      <Contact visible={true} />
    </div>
  )
}

export default OurServices
