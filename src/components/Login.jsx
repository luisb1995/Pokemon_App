import React from 'react'
import './login.css'
import Fondo from "../assets/rick-y-morty2.jpg"

function Login() {
  return (
    <div className='Container-login'>
            <img src={Fondo} className='rick-fondo' alt="rick-fondo" />
            <div className='Login-form'>
                      <h2 className='T-form'>Login</h2>

                      <input type="Email" defaultValue="luisb1995@gmail.com" className='email' />
                      <input type="password" defaultValue="admin1234" className='password'/>
                      <button className='btn-login'>Iniciar Sesión</button>
            </div>
    </div>
  )
}

export default Login