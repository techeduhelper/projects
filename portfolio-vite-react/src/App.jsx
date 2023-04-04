import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import 'boxicons'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App