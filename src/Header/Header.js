import React, { useState } from "react";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { IoCloseSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import logo from '../assets/images/happa logo.png';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import './Header.css';

const Header = () => {

  const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

  const handleSideBar = () => {
    setIsSmallNavOpen(!isSmallNavOpen);
  }

  return (
    <>
      <div className={isSmallNavOpen ? 'mob-nav w-screen h-1/2 shadow-md transform overflow-auto ease-in-out transition-all duration-300 overscroll-y-none lg:hidden' : 'mob-nav w-screen h-16 shadow-md transform overflow-auto ease-in-out transition-all duration-300 overscroll-y-none lg:hidden'}>
        <div className='h-16 pl-5 pt-3 pr-5'>
          <div className='w-11 h-11 inline-block float-left '>
            <img src={logo} alt="logo" className="w-9 m-auto" />
          </div>
          <div className='w-11 h-11 inline-block float-right' onClick={handleSideBar}>
            {
              !isSmallNavOpen ? (
                <HiMenuAlt2 className='h-7 w-7 m-auto mt-2' />
              ) : (
                <IoCloseSharp className='h-7 w-7 m-auto mt-2' />
              )
            }
          </div>
        </div>
        <div className={isSmallNavOpen ? 'h-11/12 flex justify-center flex' : 'ease-in-out hidden'}>
          <ul className='w-screen text-center'>
            <li className='pt-3 pb-2 text-xs uppercase'>Home</li>
            <li className='pt-3 pb-2 text-xs uppercase'>Our Publishers</li>
            <li className='pt-3 pb-2 text-xs uppercase'>All Categories</li>
            <li className='pt-3 pb-2 text-xs uppercase'>Made Into Animations</li>
            <li className='pt-3 pb-2 text-xs uppercase'>Books</li>
            <li className='pt-3 pb-2 text-xs uppercase'>Login</li>
            <li className='mx-auto mt-3 pt-3 pb-3 bg-black rounded w-3/6 text-white text-center text-sm uppercase'>SignUp</li>
            {/* </div> */}
          </ul>
        </div>
      </div>
      <div className="largNavBar">
        <div className='socialMedial bg-gray-300 w-screen h-9 pl-64 pr-64'>
         
          <ul className='flex float-left justify-center h-full'>
            <li className='mr-8 text-sm flex flex justify-center items-center'><MdEmail className='mr-4'/><p>Info@haapastore.com</p></li>
            <li className='text-sm flex flex justify-center items-center'><FaPhone className='mr-4'/><p>(+250) 783185866</p></li>
          </ul>

          <ul className='flex float-right justify-center h-full'>
              <div className='flex justify-center items-center mr-8'><AiFillInstagram /></div>
              <div className='flex justify-center items-center mr-8'>< AiFillTwitterCircle /></div>
              <div className='flex justify-center items-center mr-8'><SiFacebook /></div>
              <div className='flex justify-center items-center ml-36'> Eng </div>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Header;