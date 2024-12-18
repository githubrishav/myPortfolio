import React from 'react'
import dp from './../assets/dp.jpg'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
        return (
                <section id='/'>
                        <div className=" ">

                                <div className="hidden lg:block">
                                        <div className="lg:flex lg:justify-around lg:h-screen lg:items-center  ">
                                                <div className="lg:border lg:h-[30rem] lg:w-[30rem]">
                                                        <p>Animated text</p>
                                                </div>
                                                <div className="lg:border  lg:h-[30rem] lg:w-[30rem]">
                                                        <img src="" alt="img" />
                                                </div>
                                        </div>

                                </div>

                                <div className="flex flex-col lg:hidden items-center h-screen justify-around">
                                        <div className="">
                                                <img src={dp} alt="img" />
                                        </div>
                                        <div className=" text-center text-3xl font-bold">
                                                <p>Hi ! I am <br /> Rishav Kumar </p>
                                        </div>

                                        <div className="text-2xl font-medium">
                                                <TypeAnimation
                                                        sequence={[
                                                                
                                                                'A Software Developer',
                                                                2000, 
                                                                'A Designer',
                                                                2000,
                                                                'An Editor',
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