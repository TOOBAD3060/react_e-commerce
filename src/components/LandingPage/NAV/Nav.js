import React, { useState } from 'react'
import logo from '../../../images/logo.png'
import cart from '../../../images/cart.png'
import menu from '../../../images/menu.png'
import './Nav.css'
import { useGlobalContext } from '../../CartPage/context'


const Nav = ({showProduct,showAccount,showHome,showCart}) => {
  const {currentCart} = useGlobalContext()
    const [isMenu, setIsMenu] = useState(false)

    const toggleMenu = () => setIsMenu(!isMenu)
  return (
        <div className='nav'>
            <div className='img' onClick={showHome}>
              <a href='#'>
              <img src= {logo} alt='logo' width='120px'  />  
              </a>
            </div>
        
            <div className='nav-menus'>
                <ul onClick={toggleMenu} className= {isMenu ? 'active' : undefined} >
                    <li onClick={showHome}><a href='#'> Home </a> </li>
                    <li onClick={showProduct}><a href='#'>  Products </a> </li>
                    <li><a href='#'>About</a> </li>
                    <li><a href='#'>Contact</a> </li>
                    <li onClick={showAccount}><a href='#'>Account</a> </li>
                </ul>
                                
                 <div onClick={()=>setIsMenu(false)} className='cart'>
                   <a href='#'>
                   <img src={cart} onClick={showCart} alt='cart' width='50px' />
                    </a>  
                        <span>{currentCart} </span>
                </div>
                <img onClick={toggleMenu} src={menu} width='30px' alt='menu' />
            </div>
            
            
               
        </div>
  )
}

export default Nav