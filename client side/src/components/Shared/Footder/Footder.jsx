import React from 'react';
import logo from '../../../assets/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const Footder = () => {
    return (
       <div className='bg-[#F7F7F7] text-black'>
         <div className='w-11/12 md:grid-cols-2 lg:max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-4 gap-4 py-4'>
           <div>
           <img className='h-[40px]' src={logo} alt="" />
           <p className='py-5'>We are a team of designers and developers who creates high quality premium Shopify themes.</p>
           </div>
           <div>
             <h2 className='text-xl font-bold mb-2'>Main Menu</h2>
             <ul>
                <li>Home</li>
                <li>Catalog</li>
                <li>Featured Products</li>
                <li>Product Pages</li>
                <li>Pages</li>
                <li>FAQ Page</li>
             </ul>
           </div>
           <div>
             <h2 className='text-xl font-bold mb-2'>Main Menu</h2>
             <ul>
                <li>Home</li>
                <li>Catalog</li>
                <li>Featured Products</li>
                <li>Product Pages</li>
                <li>Pages</li>
                <li>FAQ Page</li>
             </ul>
           </div>
           <div>
             <h2 className='text-xl font-bold mb-2'>Follow Us</h2>
             <ul className='flex gap-2'>
                <li className='bg-[#3C5B9B] p-3 rounded-md cursor-pointer'><FaFacebookF color='white'/></li>
                <li className='bg-[#40C1DF] p-3 rounded-md cursor-pointer'><BsTwitter color='white'/></li>
                <li className='bg-[#ED3C32] p-3 rounded-md cursor-pointer'><BsGoogle color='white'/></li>
                <li className='bg-[#3C5B9B] p-3 rounded-md cursor-pointer'><BsInstagram color='white'/></li>
             </ul>
             <h2 className='mt-3'>Join Our Newsletter Now</h2>
             <div className='flex'>
                <input className='focus:outline-none border py-2 px-3' type="text" placeholder='Enter you email address here..."' />
                <button className='bg-[#29a0c4] text-white px-3'>Subscribe</button>
             </div>
           </div>
        </div>
        {/* copy right */}
        <hr/>
        <div className='text-center py-2'>
             <p className='text-[#9f9d9d]'>Copyright ©2023 Star Tech Ltd. All Rights Reserved.</p>
        </div>
       </div>
    );
};

export default Footder;




