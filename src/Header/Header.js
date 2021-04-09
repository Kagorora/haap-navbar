import React, { useState } from "react";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { IoCloseSharp } from 'react-icons/io5';
import logo from '../assets/images/happa logo.png';
import { HiMenuAlt2 } from 'react-icons/hi';

const Header = () => {

  const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

  const handleSideBar = () => {
    setIsSmallNavOpen(!isSmallNavOpen);
  }

  return (
    <div className={isSmallNavOpen ? 'w-screen h-1/2 shadow-md transform overflow-auto ease-in-out transition-all duration-300' : 'w-screen h-16 shadow-md transform overflow-auto ease-in-out transition-all duration-300' }>
        <div className='h-16 pl-5 pt-3 pr-5'>
          <div className='w-11 h-11 inline-block float-left '>
            <img src={logo} alt="logo" className="w-9 m-auto"/>
          </div>
          <div className='w-11 h-11 inline-block float-right' onClick={handleSideBar}>
            {
              !isSmallNavOpen ? (
                <HiMenuAlt2 className='h-7 w-7 m-auto mt-2'/>
              ) : (
                <IoCloseSharp className='h-7 w-7 m-auto mt-2'/>
              )
            }
          </div>
        </div>
        <div className={isSmallNavOpen ? 'h-11/12 flex justify-center flex' : 'ease-in-out	 hidden'}>
            <ul className='w-screen text-center'>
              <li className='pt-3 pb-2 text-xs uppercase'>Home</li>
              <li className='pt-3 pb-2 text-xs uppercase'>Our Publishers</li>
              <li className='pt-3 pb-2 text-xs uppercase'>All Categories</li>
              <li className='pt-3 pb-2 text-xs uppercase'>Made Into Animations</li>
              <li className='pt-3 pb-2 text-xs uppercase'>Books</li>
              <li className='pt-3 pb-2 text-xs uppercase'>Login</li>
              <div className='w-screen flex justify-center mt-3'>
              <li className='pt-2 pb-3 bg-black rounded w-3/6 text-white text-center text-sm uppercase'>SignUp</li>
              </div>
            </ul>
        </div>
    </div>
  );
};

export default Header;