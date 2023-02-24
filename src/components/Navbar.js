import React, {useState} from 'react'
import './styling/Navbar.css'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import ComputerIcon from '@mui/icons-material/Computer';

const Navbar = () => {
    const[nav, setNav] = useState(false)

    {/* setNav(!nav) sets useState to opposite state */}
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <ComputerIcon className='logo'/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
                        {/* hides if opposite of 'nav' is false */}
        <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='socialIcons bg-blue-500 '>
                    <a href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='socialIcons bg-blue-600'>
                    <a href="/">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='socialIcons bg-gray-500 '>
                    <a href="https://github.com/johnnysan922">
                        Github <FaGithub size={30}/>
                    </a>
                </li><li className='socialIcons bg-red-600 '>
                    <a href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='socialIcons bg-green-600 '>
                    <a href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar