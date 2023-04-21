import React from 'react'
import Titulo from "../../assets/titulo.png"
import "./estilos.css"

function Nav() {
  return (
    <div className='container-nav'>
            <div className='titulo'>
                <img src={Titulo} alt="Rick and morty" className='titulo-img'/>
            </div>

            <div className="search-box">
                 <input type="text" className="search-input" placeholder="Search.."/>

              <button className="search-button">
                     <i className="fas fa-search" id='lupa'></i>
              </button>
         </div>
        
    </div>
  )
}

export default Nav