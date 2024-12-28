import React from 'react'
import dp from './../assets/dp.jpg'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
        return (
                <section id='/'>
                        <div className=" ">

                                <div className="hidden lg:block">
                                        <div className="lg:flex lg:justify-evenly lg:h-screen lg:items-center  ">
                                                <div className="lg:flex lg:flex-col gap-7 w-[35rem]       items-center justify-center  ">
                                                        <div className=" font-bold font-inter text-6xl ">
                                                                <p>Hi ! I am <br /> Rishav Kumar </p>
                                                        </div>
                                                        <div className="text-3xl font-medium font-mono w-full    text-start ml-48        mt-4">
                                                                <TypeAnimation
                                                                        sequence={[

                                                                                'A Software Developer...',
                                                                                2000, 
                                                                                'A Designer..',
                                                                                2000,
                                                                                'An Editor.',
                                                                                2000,
                                                                        ]}
                                                                        wrapper="span"
                                                                        speed={20}
                                                                        style={{ display: 'inline-block' }}
                                                                        repeat={Infinity}
                                                                />
                                                                
                                                               
                                                        </div>
                                                        <div className=" mt-10 text-base flex justify-around gap-14 mr-10 items-center  ">
                                                                        <button className=' px-8 py-2 rounded bg-[#3b1e54] text-white hover:scale-125 text-xl duration-500 font-inter  '>Connect</button>
                                                                        <button className= ' font-inter rounded hover:scale-125 duration-500 px-8 text-xl py-2 border border-gray-300'>Projects</button>
                                                                </div>
                                                </div>
                                                <div className=" p-2 ">
                                                        <img src={dp} alt="img" className='lg:h-[35rem] lg:w-[35rem] lg:object-cover rounded-full  hover:scale-110 duration-1000  bg-white ' />
                                                </div>
                                        </div>


                                </div>

                                <div className="flex flex-col lg:hidden items-center  gap-6">
                                        <div className="">
                                        <img src={dp} alt="img" className='lg:h-[30rem] lg:w-[30rem] lg:object-cover rounded-full hover:scale-105 duration-1000  ' />
                                        </div>
                                        <div className=" text-center text-3xl font-inter font-bold">
                                                <p>Hi ! I am <br /> Rishav Kumar </p>
                                        </div>

                                        <div className="text-xl font-mono font-medium">
                                                <TypeAnimation
                                                        sequence={[

                                                                'A Software Developer...',
                                                                2000,
                                                                'A Designer..',
                                                                2000,
                                                                'An Editor.',
                                                                2000,
                                                        ]}
                                                        wrapper="span"
                                                        speed={20}
                                                        style={{ display: 'inline-block' }}
                                                        repeat={Infinity}
                                                />
                                        </div>

                                </div>
                        </div>
                </section>

        )
}

export default Home