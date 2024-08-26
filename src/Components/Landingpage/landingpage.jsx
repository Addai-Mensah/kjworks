import React from 'react'
import Nav from '../Homepage/nav'
import Hero from '../Homepage/hero'
import Chooseus from '../Homepage/works'
import Itworks from '../Homepage/itworks'
import Managefunds from '../Homepage/managefunds'
import Trackinvestment from '../Homepage/trackinvestment'
import Footer from '../Homepage/footer'
import Security from '../Homepage/security'
import Why from '../Homepage/why'
function Landingpage() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Chooseus/>
        <Itworks/>
        <Managefunds/>
        <Trackinvestment/>
        <Why/>
        <Security/>
        <Footer/>
    </div>
  )
}

export default Landingpage