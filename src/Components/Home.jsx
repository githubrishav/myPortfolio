import React from 'react'
import dp from './../assets/dp.jpg'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
        return (
                <section id='/'>
                        <div className=" ">

                                <div className="hidden lg:block">
                                        <div className="lg:flex lg:justify-evenly lg:h-screen lg:items-center  ">
                                                <div className="lg:flex lg:flex-col gap-12  ">
                                                        <div className=" font-bold text-6xl ">
                                                                <p>Hi ! I am <br /> Rishav Kumar </p>
                                                        </div>
                                                        <div className="text-3xl font-semibold font-mono">
                                                                <TypeAnimation
                                                                        sequence={[

                                                                                'A Software Developer...',
                                                                                2000, // wait 1s before replacing "Mice" with "Hamsters"
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
                                                <div className=" lg:h-[30rem] lg:w-[30rem]">
                                                        <img src={dp} alt="img" />
                                                </div>
                                        </div>

                                </div>

                                <div className="flex flex-col lg:hidden items-center  gap-6">
                                        <div className="">
                                                <img src={dp} alt="img" />
                                        </div>
                                        <div className=" text-center text-3xl font-bold">
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