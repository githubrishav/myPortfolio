import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false); // Ensure the menu closes when a link is clicked
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center p-3 lg:items-center lg:justify-evenly lg:p-6  z-50 sticky">
                    <div>
                        <p className='font-semibold font-poppins text-4xl text-[#3b1e54]'>rishav</p>
                    </div>
                    <div className="lg:hidden text-3xl">
                        <button onClick={toggle}>
                            <IoMenu className='hover:scale-125 transition duration-300 transform hover:text-[#502971]' />
                        </button>
                    </div>
                    <div className="hidden lg:flex xl:gap-[4rem]">
                        <Link to="/" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-[#3b1e54]  text-lg font-inter">
                            Home
                        </Link>
                        <Link hashSpy={true} spy={true} to="about" smooth={true} duration={500} className="hover:underline cursor-pointer text-lg font-inter hover:text-[#3b1e54] ">
                            About
                        </Link>
                        <Link hashSpy={true} spy={true} to="skills" smooth={true} duration={500} className="cursor-pointer hover:underline text-lg font-inter hover:text-[#3b1e54] ">
                            Skills
                        </Link>
                        <Link hashSpy={true} spy={true} to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline text-lg font-inter hover:text-[#3b1e54] ">
                            Projects
                        </Link>
                        <Link hashSpy={true} spy={true} to="connect" smooth={true} duration={500} className="cursor-pointer hover:underline text-lg font-inter hover:text-[#3b1e54] ">
                            Connect
                        </Link>
                    </div>

                    <div className=" px-6 py-2 rounded-sm lg:border lg:border-black hover:bg-[#3b1e54] hover:text-white lg:block hidden font-inter">
                        <button className=''>Download CV</button>
                    </div>
                </div>
                <hr className="border-gray-300 mx-32 hidden lg:block" />

                {open && (
                    <div className="absolute bg-[#3B1E54] left-0 w-full pl-9 transition-all duration-500 ease-in h-screen top-0 lg:hidden">
                        <div className="text-5xl flex justify-end mr-1 mt-1">
                            <IoIosClose onClick={toggle} className="text-white hover:scale-125 transition duration-300 transform" />
                        </div>

                        <div className="flex flex-col text-2xl bg text-white mt-32 gap-8 items-center">
                            <Link to="/" smooth={true} duration={500} className="px-8  transition duration-300 transform rounded-md cursor-pointer hover:bg-white hover:text-purple-900" onClick={closeMenu}>
                                Home
                            </Link>
                            <Link hashSpy={true} spy={true} to="about" smooth={true} duration={500} className="px-8  transition duration-300 transform rounded-md cursor-pointer hover:bg-white hover:text-purple-900" onClick={closeMenu}>
                                About
                            </Link>
                            <Link hashSpy={true} spy={true} to="skills" smooth={true} duration={500} className="px-8  transition duration-300 transform rounded-md cursor-pointer hover:bg-white hover:text-purple-900" onClick={closeMenu}>
                                Skills
                            </Link>
                            <Link hashSpy={true} spy={true} to="projects" smooth={true} duration={500} className="px-8  transition duration-300 transform rounded-md cursor-pointer hover:bg-white hover:text-purple-900" onClick={closeMenu}>
                                Projects
                            </Link>
                            <Link hashSpy={true} spy={true} to="connect" smooth={true} duration={500} className="px-8  transition duration-300 transform rounded-md cursor-pointer hover:bg-white hover:text-purple-900" onClick={closeMenu}>
                                Connect
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
