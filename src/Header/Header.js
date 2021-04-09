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
        <div className='socialMedial bg-red-900 w-screen h-9 pl-64 pr-64'>
          <ul className='flex flex-row float-left justify-center'>
            <li className='mr-8 mt-2 text-sm flex'><MdEmail className='mr-2'/><p>Info@haapastore.com</p></li>
            <li className='mt-2 text-sm flex'><FaPhone className='mr-2'/><p>(+250) 783185866</p></li>
          </ul>
          <ul className='flex flex-row float-right my-1'>
            <li className='flex justify-between w-32 h-6'>
              <div><AiFillInstagram className='my-1' /></div>
              <div>< AiFillTwitterCircle className='my-1' /></div>
              <div><SiFacebook className='my-1' /></div>
            </li>
            <li className='ml-40 flex content-between'> Eng </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;