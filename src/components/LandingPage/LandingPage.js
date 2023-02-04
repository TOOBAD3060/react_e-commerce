import React from 'react'
import DisplayProducts from './DisplayProducts/DisplayProducts'
import FirstSection from './FirstSection/FirstSection'
import Footer from './Footer/Footer'
import './LandingPage.css'
import Nav from './NAV/Nav'
import SmartBand from './SmartBand/SmartBand'

const LandingPage = () => {
  return (
    <>
    <div className="nav-first_section">
        {/* <Nav /> */}
        <FirstSection />
      </div>
      <DisplayProducts />
      <SmartBand />
      <Footer />
    </>
  )
}

export default LandingPage