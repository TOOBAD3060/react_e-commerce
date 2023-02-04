import React from 'react'

const Login = () => {
  return (
    <div className='login'>
    <form>
        <div className='form-group'>
            <input type='text' placeholder='Username' required />
        </div>
        <div className='form-group'>
            <input type='password' placeholder='Password' required />
        </div>
        <button type='submit'>Login</button>
    </form>
        <a href='#f'> Forgot Password </a>
    </div>
  )
}

export default Login