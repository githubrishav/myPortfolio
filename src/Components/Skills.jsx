import React from 'react'
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";





<FaJava />









const Skills = () => {
  return (
    <section id='skills' className=''>
      <div className="">
        <div className="flex flex-col">
          <p className='text-3xl lg:text-5xl text-center font-bold lg:font-bold hover:text-[#8464aa] hover:duration-500 '>Skills</p>




          <p className='text-2xl hover:text-[#8464aa] lg:text-3xl text-center font-medium lg:font-semibold mt-8  lg:mt-24'>Frontend Technologies</p>


          <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:mx-64 lg:p-8   ">

            <div className='flex flex-col items-center lg:border lg:border-black justify-around cursor-pointer hover:scale-105 duration-1000  lg:mx-6  rounded-md '>
              <FaHtml5 className='text-7xl lg:text-8xl  text-orange-600' />
              <p className='font-medium lg:font-semibold lg:text-xl  '>HTML5</p>
            </div>
            <div className='  lg:mx-6  rounded-md lg:border lg:border-black flex  flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>
              <FaCss3Alt className='text-7xl lg:text-8xl  text-blue-500' />
              <p className='font-medium lg:font-semibold lg:text-xl'>CSS3</p>
            </div>
            <div className=' lg:mx-6  rounded-md lg:border lg:border-black flex flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>
              <TbBrandJavascript className='text-7xl lg:text-8xl  text-amber-400' />

              <p className='font-medium lg:font-semibold lg:text-xl'>JavaScript</p>
            </div>
            <div className=' lg:mx-6  rounded-md lg:border lg:border-black flex  flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000'>
              <FaReact className='text-7xl lg:text-8xl  text-blue-500' />
              <p className='font-medium lg:font-semibold lg:text-xl'>React.Js</p>
            </div>
            <div className=' lg:mx-6 rounded-md lg:border lg:border-black flex flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000'>
              <FaAngular className='text-7xl lg:text-8xl  text-red-500' />
              <p className='font-medium lg:font-semibold lg:text-xl'>Angular.Js</p>
            </div>
            <div className=' lg:mx-6 mx-10 rounded-md lg:border lg:border-black flex flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>
              <FaBootstrap className='text-7xl lg:text-8xl  text-purple-700' />
              <p className='font-medium lg:font-semibold lg:text-xl'>Bootstrap</p>
            </div>
            <div className=' lg:mx-6 mx-10 rounded-md lg:border lg:border-black flex flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>
              <SiMui className='text-6xl lg:text-8xl  text-blue-500' />
              <p className='font-medium lg:font-semibold lg:text-xl'>Material UI</p>
            </div>
            <div className=' lg:mx-6 mx-10  rounded-md lg:border lg:border-black flex flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>
              <RiTailwindCssFill className='text-6xl lg:text-8xl  text-cyan-400' />
              <p className='font-medium lg:font-semibold lg:text-xl'>Tailwind CSS</p>
            </div>
          </div>


          <p className='text-2xl hover:text-[#8464aa] lg:text-3xl text-center font-medium lg:font-semibold mt-8 lg:mt-12'>Backend Technologies</p>

          <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:mx-64 lg:p-8   ">

            <div className='flex flex-col items-center lg:border lg:border-black justify-around cursor-pointer hover:scale-105 duration-1000  lg:mx-6 mx-10 rounded-md '>
              <FaNode className='text-6xl  lg:text-8xl  text-green-600' />
              <p className='font-medium lg:font-semibold lg:text-xl  '>Node.Js</p>
            </div>
            <div className='  lg:mx-6 mx-10  rounded-md lg:border lg:border-black flex  flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>

              <SiExpress className='text-6xl lg:text-8xl' />

              <p className='font-medium lg:font-semibold lg:text-xl'>Express.Js</p>
            </div>
            <div className=' lg:mx-6 mx-10  rounded-md lg:border lg:border-black flex flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>

              <SiMongodb className='text-6xl lg:text-8xl  text-green-700' />

              <p className='font-medium lg:font-semibold lg:text-xl'>MongoDB</p>
            </div>
            <div className=' lg:mx-6 mx-10  rounded-md lg:border lg:border-black flex  flex-col items-center justify-around cursor-pointer hover:scale-105 duration-1000 '>
              <IoLogoFirebase className='text-6xl lg:text-8xl  text-yellow-400' />
              <p className='font-medium lg:font-semibold lg:text-xl'>Firebase</p>
            </div>
          </div>

          <p className=' hover:text-[#8464aa] text-2xl lg:text-3xl text-center font-medium lg:font-semibold mt-8 lg:mt-12'>Programming  Languages</p>

          <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-6 lg:mx-64 lg:p-8   ">

            <div className='flex flex-col items-center lg:border lg:border-black justify-around cursor-pointer hover:scale-105 duration-1000  lg:mx-6 mx-10 rounded-md '>
              
              <FaJava  className='text-6xl  lg:text-8xl  text-orange-700' />
              <p className='font-medium lg:font-semibold lg:text-xl  '>Java</p>
            </div>

            <div className='flex flex-col items-center lg:border lg:border-black justify-around cursor-pointer hover:scale-105 duration-1000  lg:mx-6 mx-10 rounded-md '>
              
              <FaPython className='text-6xl  lg:text-8xl  text-yellow-500' />

              <p className='font-medium lg:font-semibold lg:text-xl  '>Python</p>
            </div>
            </div>


          </div>


        </div>































    </section>
  )
}

export default Skills