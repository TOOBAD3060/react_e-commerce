import React from 'react'
import Nav from '../LandingPage/NAV/Nav'
import CartContainer from './CartContainer'
import './CartPage.css'

const CartPage = ({showProduct}) => {
  return (
    <div className='cart'>
        {/* <Nav /> */}
        <CartContainer showProduct={showProduct} />
    </div>
  )
}

export default CartPage