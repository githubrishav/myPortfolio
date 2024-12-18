import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';


const Navbar = () => {

        const [open, setOpen] = useState(false);

        const toggle = () => {
                setOpen(!open)

        }
        console.log(open)

        return (
                <>
                        <div className="">
                                <div className="flex justify-between items-center p-3 lg:items-center lg:justify-evenly lg:p-6 ">
                                        <div className="">
                                                <p className=''>rishav</p>
                                        </div>
                                        <div className="lg:hidden text-3xl  ">
                                                <button onClick={toggle}><IoMenu className='hover:' />
                                                </button>
                                        </div>
                                        <div className=" hidden lg:flex  xl:gap-[4rem] ">



                                                <Link to="/" smooth={true} duration={500} className="cursor-pointer">
                                                        Home
                                                </Link>

                                                <Link hashSpy={true} spy={true} to='about' smooth={true} duration={500} className="cursor-pointer">
                                                        About
                                                </Link>

                                                <Link hashSpy={true} spy={true} to='skills' smooth={true} duration={500} className="cursor-pointer">
                                                        Skills
                                                </Link>

                                                <Link hashSpy={true} spy={true} to='projects' smooth={true} duration={500} className="cursor-pointer">
                                                        Projects
                                                </Link>
                                                <Link hashSpy={true} spy={true} to='connect' smooth={true} duration={500} className="cursor-pointer">
                                                        Connect
                                                </Link>

                                        </div>


                                        <div className="lg:border  px-6 py-2 rounded-md hover:bg-[#3b1e54] hover:text-white lg:block hidden">
                                                <button>Download CV</button>
                                        </div>
                                </div>
                                <hr class="border-gray-300 mx-32 hidden lg:block" />



                                {open &&

                                        <div className="  absolute bg-[#3B1E54]  left-0 w-full pl-9 transition-all duration-500 ease-in h-screen top-0 lg:hidden">


                                                <div className="text-5xl flex justify-end mr-1 mt-1 ">
                                                        <IoIosClose onClick={() => { setOpen(!open) }} className='text-white' />
                                                </div>


                                                <div className="flex flex-col bg text-white  mt-20 gap-4 items-center">
                                                       
                                                <Link to="/" smooth={true} duration={500} className="cursor-pointer">
                                                        Home
                                                </Link>

                                                <Link hashSpy={true} spy={true} to='about' smooth={true} duration={500} className="cursor-pointer">
                                                        About
                                                </Link>

                                                <Link hashSpy={true} spy={true} to='skills' smooth={true} duration={500} className="cursor-pointer">
                                                        Skills
                                                </Link>

                                                <Link hashSpy={true} spy={true} to='projects' smooth={true} duration={500} className="cursor-pointer">
                                                        Projects
                                                </Link>
                                                <Link hashSpy={true} spy={true} to='connect' smooth={true} duration={500} className="cursor-pointer">
                                                        Connect
                                                </Link>
                                                </div>

                                        </div>

                                }

                        </div>



                </>
        )
}

export default Navbar