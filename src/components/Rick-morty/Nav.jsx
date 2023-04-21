import React from 'react'
import Titulo from "../../assets/titulo.png"
import {useState} from 'react'
import "./estilos.css"
import "../../App.css"
import GetDatos from './GetDatos';
import { Link } from 'react-router-dom';

function Nav() {




      
      return (
        <>
         <div className='container-nav'>
            <div className='titulo'>
                <img src={Titulo} alt="Rick and morty" className='titulo-img'/>
            </div>

            <div className="search-box">
                 <input type="text"  className="search-input" placeholder="Search.."/>

              <button className="search-button">
                     <i className="fas fa-search" id='lupa'></i>
              </button>
              <Link to="/" className='link'>
                  <button className="btn btn-danger">Salir</button>
              </Link>
         </div>
        
    </div>

    </>
  )
}

export default Nav