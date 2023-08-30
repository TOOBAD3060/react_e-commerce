import React from 'react'
import DisplayProducts from './DisplayProducts/DisplayProducts'
import FirstSection from './FirstSection/FirstSection'
import Footer from './Footer/Footer'
import './LandingPage.css'
import Nav from './NAV/Nav'
import SmartBand from './SmartBand/SmartBand'

const LandingPage = ({showProduct}) => {
  return (
    <>
    <div className="nav-first_section">
        {/* <Nav /> */}
        <FirstSection />
      </div>
      <DisplayProducts  showProduct={showProduct} />
      <SmartBand />
      <Footer />
    </>
  )
}

export default LandingPage