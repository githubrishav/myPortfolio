import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';


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
                                                <p>Logo</p>
                                        </div>
                                        <div className="lg:hidden text-3xl  ">
                                                <button onClick={toggle}><IoMenu className='hover:' />
                                                </button>
                                        </div>
                                        <div className=" hidden lg:flex  xl:gap-[4rem] ">

                                                <Link to="/" >Home</Link>
                                                <Link to="/about" >About</Link>
                                                <Link to="/skills" >Skills</Link>
                                                <Link to="/experience" >Experience</Link>
                                                <Link to="/projects" >Projects</Link>
                                                <Link to="/connect" >Connect</Link>
                                        </div>

                                        <div className="lg:border lg:block hidden">
                                                <button>Download CV</button>
                                        </div>
                                </div>


                                {open &&

                                        <div className="  absolute bg-[#3B1E54]  left-0 w-full pl-9 transition-all duration-500 ease-in h-screen top-0 lg:hidden">


                                                <div className="text-5xl flex justify-end mr-1 mt-1 ">
                                                        <IoIosClose onClick={() => { setOpen(!open) }} className='text-white' />
                                                </div>


                                                <div className="flex flex-col bg text-white  mt-20 gap-4 items-center">
                                                        <Link to="/" className='hover:bg-red-700 px-10 py-2' >Home</Link>
                                                        <Link to="/about" className=' px-10 py-2' >About</Link>
                                                        <Link to="/skills" className='bg-red-500 px-10 py-2' >Skills</Link>
                                                        <Link to="/experience" className='bg-red-500 px-10 py-2' >Experience</Link>
                                                        <Link to="/projects" className='bg-red-500 px-10 py-2' >Projects</Link>
                                                        <Link to="/connect" className='bg-red-500 px-10 py-2' >Connect</Link>
                                                </div>

                                        </div>

                                }

                        </div>



                </>
        )
}

export default Navbar