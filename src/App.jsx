import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Connect from './Components/Connect'
import Projects from './Components/Projects'


const App = () => {

  const router = createBrowserRouter([


    {
      path: "/",
      element: <><Navbar /><Home/></>
    },

    {
      path: "/about",
      element: <><Navbar /> <About/></>
    },
    {
      path: "/skills",
      element: <><Navbar /> <Skills/>  </>
    },
    {
      path: "/experience",
      element: <><Navbar /> <Experience/>  </>
    },
    {
      path: "/projects",
      element: <><Navbar /> <Projects/></>
    },
    {
      path: "/connect",
      element: <><Navbar /> <Connect/></>
    },


  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App