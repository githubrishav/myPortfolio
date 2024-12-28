import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import Connect from './Components/Connect'



const App = () => {


  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the `#`
    if (hash) {
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
      });
    }
  }, []);


  return (
    <div className="bg-[#9b7ebd21]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Connect/>

    </div>

  )
}

export default App