import { useState } from 'react'
import GetDatos from './components/Rick-morty/GetDatos'
import './App.css'
import Nav from './components/Rick-morty/Nav'



function App() {

  return (
    <div className="Container-App">
        {/* <Login/> */}
        <Nav/>
        <GetDatos/>
    </div>
  )
}

export default App
