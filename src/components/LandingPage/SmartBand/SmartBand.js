import React from 'react'
import pics from "../../../images/exclusive.png";
import './SmartBand.css'

const SmartBand = () => {
  return (
    <div className="smart-band">
          <div>
            <img src={pics} width="200px" alt="smart" /> 
          </div>
          <div>
              <span>Exclusively Available on RedStore</span>
              <p>Smart Band 4</p>
              <span>
                The Mi Smart Band requires a 39.9% larger (than Mi Band 3) AMOLED color
                <br /> 
                full-touch display with adjustable brightness,so everything is clear as can be
              </span>
              <div><a href='#e'>Buy now</a> </div>
          </div>
    </div>
  )
}

export default SmartBand