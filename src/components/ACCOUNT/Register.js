import React from 'react'

const Register = () => {
  return (
    <div className='register'>
    <form>
        <div className='form-group'>
            <input type='text' placeholder='Username' required />
        </div>
        <div className='form-group'>
            <input type='email' placeholder='Email' required />
        </div>
        <div className='form-group'>
            <input type='password' placeholder='Password' required />
        </div>
        <button type='submit'>Register</button>
    </form>
    </div>
  )
}

export default Register