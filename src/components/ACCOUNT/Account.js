import React, { useState } from 'react'
import Register from './Register'
import soccer from '../../images/image1.png'
import Nav from '../LandingPage/NAV/Nav'
import Login from './Login'

import './Account.css'

const Account = () => {
    const [isLogin,setIsLogin] = useState(false)
    const [isRegister,setIsRegister] = useState(true)

    const showLogin = () => {
        setIsLogin(true)
        setIsRegister(false)
    }
    const showRegister = () => {
        setIsLogin(false)
        setIsRegister(true)
    }
  return (
    
    <div>
        {/* <Nav />  */}
    <section className='account'>
        
        <article>
            <img src={soccer} alt='soccer' width= '250px' />
        </article>

        <article className='info'>
            <header className='account-headers'>
                <h3 className={isLogin ? 'active' : undefined} onClick={showLogin}>Login</h3>
                <h3 className={isRegister ? 'active' : undefined} onClick={showRegister}>Register</h3>
            </header>
            {isRegister && <Register />}
            {isLogin && <Login />}
        </article>
    </section>
        
    </div>
  )
}

export default Account