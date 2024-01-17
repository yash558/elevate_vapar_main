import React from 'react'
import NavbarOne from '../components/Navbar/Navbarone'
import Testimonial from './../components/Testimonial';

import { Contact, Faq, Subscription } from '../components';
import PlanHero from '../components/PlanHero';

const Plans = () => {
  return (
    <div>
        <NavbarOne/>
        <PlanHero/>
        <Subscription/>
        <Testimonial visible={true}/>
        <Faq/>
        <Contact/>
    </div>
  )
}

export default Plans