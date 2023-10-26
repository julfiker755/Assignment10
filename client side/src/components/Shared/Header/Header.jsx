import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png'
import avatar from '../../../assets/avatar.png'
import {Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import './Header.css'
import useAuthState from '../../Hooks/useAuthState';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const [toggle, setoogle] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const navigate=useNavigate()
    // dark handleform
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
  
    const {user,logOut}=useAuthState()
    useEffect(() => {
        const handleclick = document.querySelector("#handle");
        const handleadd = document.querySelector(".click_menu");
    
        const handleClickEvent = () => {
          handleadd.classList.toggle("click_add");
        };
    
        handleclick?.addEventListener('click', handleClickEvent);
    
        return () => {
          handleclick?.removeEventListener('click', handleClickEvent);
        };
      }, [])
    return (
        <div className='md:!sticky md:top-0 md:left-0 md:z-[9999]'>
            <div className='bg-[#40cacd] text-white'>
            <div className='w-11/12 lg:max-w-7xl m-auto flex justify-between items-center py-2'>
                <img className='h-[55px]' src={logo} alt="" />
                <ul className='hidden lg:flex items-center space-x-4'>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/addcart">Add Product</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/mycart">My Cart</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/login">Login</NavLink></li>
                    <li className='flex items-center'><input onChange={handleToggle} type="checkbox" className="toggle toggle-info h-5 my-1"/></li>
                </ul>
                <div className='relative hidden z-50 lg:block'>
                        <img id="handle" className='w-10 h-10 rounded-full ring-2 ring-[#387ee0] cursor-pointer' src={user?.photoURL ? user?.photoURL : avatar} alt="" />
                        <div className='click_menu absolute w-[180px] right-0 bg-[#3ac2c6fd] rounded-md'>
                            {user ? <div>
                            <div className='py-1 px-2'>
                                <h1 className='text-xl truncate'>{user?.displayName ?? 'demo Islam'}</h1>
                                <h1 className='text-xs text-[#f1f0f0]'>{user?.email ?? 'demo.bd@gmail.com'}</h1>
                            </div>
                            <h1 className='border-b-2 my-1'></h1>
                            <ul className='my-2'>
                                <li className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'>Dashboard</li>
                                <li className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'>Settings</li>
                                <li onClick={async()=>{
                                  await logOut()
                                  navigate('/')
                                  toast.success('User Logout Successfully')

                                }} className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'>Log Out</li>
                            </ul>
                            </div>:<ul className='my-2'>
                                <li className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'><Link to="/login">Log In</Link></li>
                                <li className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'><Link to="/register">Register</Link></li>
                            </ul>}
                        </div>
                    </div>
                    {/* colse button */}
                    <div onClick={() => setoogle(!toggle)} className="lg:hidden cursor-pointer">
               {toggle ? <FaTimes size={20} /> : <AiOutlineMenu size={20} />}

            </div>
            </div>
        </div>




        {/*!// mobile divice --------------------------------------*/}
        <div className={`${toggle ? 'lg:hidden z-50 bg-[#1BB4B9] fixed left-0 top-0 transition-all w-3/4 h-full' : 'lg:hidden  z-50 bg-[#1BB4B9] fixed left-[-100%] top-0 duration-500 w-3/4 h-full'}`}>
        <div className='p-2'>
          <img className='h-[65px] w-[130px] p-3' src={logo} alt="" />
          <ul className='lg:hidden space-y-3'>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/">Home</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/addcart" >Add Product</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/mycart">My Cart</NavLink></li>
          <li className='flex border-b-[1px] items-center gap-2'><span>Dark/Light</span><input onChange={handleToggle} type="checkbox" className="toggle toggle-info h-5 my-1"/></li>
          </ul>
           {user ?   <div className='relative lg:hidden py-5'>
            <div className='flex items-center'>
              <img className='w-10 h-10 rounded-full ring-2 ring-[#387ee0] cursor-pointer' src={user?.photoURL ? user?.photoURL:avatar} alt="" />
              <div className='py-1 px-2'>
                <h1 className='text-xl'>{user?.displayName ? user?.displayName : 'demo Islam'}</h1>
                <h1 className='text-xs'>{user?.email ? user?.email :'demo.bd@gmail.com'}</h1>
              </div>
            </div>
            <div>
              <h1 className='border-b-[1px] my-1'></h1>
              <ul className='my-2'>
                <li className='hover:bg-[#47cacff7] rounded-md transition-all py-1 px-2 cursor-pointer'>Dashboard</li>
                <li className='hover:bg-[#47cacff7] rounded-md transition-all py-1 px-2 cursor-pointer'>Settings</li>
                <li  onClick={async()=>{
                                  await logOut()
                                  navigate('/')
                                  toast.success('User Logout Successfully')
                }} className='hover:bg-[#47cacff7] rounded-md transition-all py-1 px-2 cursor-pointer'>Log Out</li>
              </ul>
            </div>
          </div> :<ul className='space-y-3'>
          <li className='border-b-[1px] mt-2'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/login">Login</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/register" >Register</NavLink></li>
            </ul>}
        </div>
        </div>
        {/* tost */}
        <Toaster
           position="top-right"
           reverseOrder={false}
/>
        </div>
        
    );
};

export default Header;