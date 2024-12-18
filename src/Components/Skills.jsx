import React from 'react'
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaAngular } from "react-icons/fa";











const Skills = () => {
  return (
    <section id='skills' className=''>
      <div className="">
        <div className="flex flex-col">
          <p className='text-3xl lg:text-5xl text-center font-semibold lg:font-bold'>Skills</p>
          <p className='text-2xl lg:text-3xl text-center font-medium lg:font-semibold mt-8 lg:mt-12'>Frontend Technologies</p>


          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 lg:mt-12 gap-12  p-4">
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000 '>
              <FaHtml5 className='text-7xl lg:text-9xl  text-orange-600' />
              <p className='font-medium lg:font-semibold lg:text-2xl  '>HTML5</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000 '>
              <FaCss3Alt className='text-7xl lg:text-9xl  text-blue-500' />
              <p className='font-medium lg:font-semibold lg:text-2xl'>CSS3</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000 '>
              <TbBrandJavascript className='text-7xl lg:text-9xl  text-amber-400' />

              <p className='font-medium lg:font-semibold lg:text-2xl'>JavaScript</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000'>
              <FaReact className='text-7xl lg:text-9xl  text-blue-500' />
              <p className='font-medium lg:font-semibold lg:text-2xl'>React.Js</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000'>
              <FaAngular className='text-7xl lg:text-9xl  text-red-500' />
              <p className='font-medium lg:font-semibold lg:text-2xl'>Angular.Js</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000 '>
              <FaBootstrap className='text-7xl lg:text-9xl  text-purple-700' />
              <p className='font-medium lg:font-semibold lg:text-2xl'>Bootstrap</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000 '>
              <SiMui className='text-7xl lg:text-9xl  text-blue-500' />
              <p className='font-medium lg:font-semibold lg:text-2xl'>Material UI</p>
            </div>
            <div className='flex flex-col items-center justify-around cursor-pointer hover:scale-125 duration-1000 '>
              <RiTailwindCssFill className='text-7xl lg:text-9xl  text-cyan-400' />
              <p className='font-medium lg:font-semibold lg:text-2xl'>Tailwind CSS</p>
            </div>
          </div>
        </div>





      </div>































    </section>
  )
}

export default Skills