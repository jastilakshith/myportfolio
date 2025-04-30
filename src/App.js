import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Skills from './components/Skills'
import HobbiesAndInterests from './components/HobbiesAndInterests'
import Passion from './components/Passion'
import About from './components/About'
import AcademicBackground from './components/AcademicBackground'
import Certifications from './components/Certifications'
import NavBar from './components/NavBar'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className='container'>
      <h2>Lakshith Jasti</h2>
      <NavBar></NavBar>
      </div>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/academicbackground' element={<AcademicBackground/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/hobbies' element={<HobbiesAndInterests/>}></Route>
        <Route path='/passion' element={<Passion/>}></Route>
        <Route path='/certifications' element={<Certifications/>}></Route>
      </Routes>
    </Router>
  )
}
