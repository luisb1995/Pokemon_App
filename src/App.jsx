import { useState } from 'react'
import GetDatos from './components/Rick-morty/GetDatos'
import Nav from './components/Rick-morty/Nav'
import Login from "./components/login/Login"
import { Route, Routes } from 'react-router-dom'
import './App.css'



function App() {

  {/* <Login/>  */}
  return (
    <>
        <div className="Container-App">
            <Routes>

              <Route path='/home' element={<><Nav/> <GetDatos/></> }/>           
              <Route path='/' element={<Login/>}/>   
            </Routes>
        </div>
    </>
  )
}

export default App
