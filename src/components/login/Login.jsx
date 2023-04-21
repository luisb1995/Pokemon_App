import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import imagen from "../../assets/rick-y-morty.jpg"

function Login() {
  return (
    <div className='Container-login'>
             <img src={imagen} className='rick-fondo' alt="rick-fondo" /> 
            <div className='Login-form'>
                      <h2 className='T-form'>Login</h2>

                      <input type="Email" defaultValue="luisb1995@gmail.com" className='email' />
                      <input type="password" defaultValue="admin1234" className='password'/>
                      <div className='iniciar'>
                      <Link to="/home" className='link'>
                      <button className='btn btn-light'>Iniciar Sesión </button>
                      </Link>
                      </div>
            </div>
    </div>
  )
}

export default Login