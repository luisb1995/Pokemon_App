import { useState } from 'react'
import GetDatos from './components/Rick-morty/GetDatos'
import Nav from './components/Rick-morty/Nav'
import Login from "./components/login/Login"
import { Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
  const [text,setText]=useState("");

  return (
    <>
        <div className="Container-App">
            <Routes>

              <Route path='/home' element={<><Nav text={text} setText={setText}/> <GetDatos text={text}/></> }/>      
              {console.log(text)}     
              <Route path='/' element={<Login/>}/>   
            </Routes>
        </div>
    </>
  )
}

export default App
