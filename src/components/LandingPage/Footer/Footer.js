import React from 'react'
import apple from '../../../images/app-store.png'
import google from '../../../images/play-store.png'
import redstore from '../../../images/logo.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer className='landing-page'>
        <article>
        
          <h3>Download Our App</h3>
          <p>Download App for Android and ios mobile phone</p>
         <a href="#e">  <img src={google} width="100px" alt="google" /> </a> 
          <a href="#e"> <img src={apple} width="100px" alt="apple" /></a>
        </article>

        <article className="mobile-hidden tablet-show">
        <a href="#e"> <img src={redstore} width="100px" alt="apple" /> </a>
        <p>Our purpose is To Sustainably Make the Pleasure 
       <br />   and Benefits of Sports Accessible to the many</p>
        </article>

        <article className="mobile-hidden">
          <h3 className="position">Useful Links</h3>
          <ul>
            <li><a href="#r">Coupons</a> </li>
            <li><a href="#r">Blog Post</a> </li>
            <li><a href="#r">Return Policy</a> </li>
            <li><a href="#r">Join Affiliate</a> </li>
          </ul>
        </article>

        <article className="mobile-hidden">
          <h3 className="position">Follow Us</h3>
          <ul>
            <li><a href="#r">Facebook</a> </li>
            <li><a href="#r">Twitter</a> </li>
            <li><a href="#r">Instagram</a> </li>
            <li><a href="#r">YouTube</a> </li>
          </ul>
        </article>
      </footer>
  ) 
}

export default Footer