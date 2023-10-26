import React from 'react';
import tec4 from '../../../assets/tec3.png'
import {AiOutlineCheckCircle} from 'react-icons/ai';



const Marquee = () => {
    return (
        <div className='bg-[#F2FFF7]'>
         <div className='w-11/12 lg:max-w-7xl m-auto py-2'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
             <img src={tec4} alt="" />
             <div className='self-center'>
                <h2 className='text-[#807e7e] text-xs'>ABOUT US</h2>
                <h1 className='text-2xl lg:text-4xl font-semibold py-5'>We Are Increasing Business Success With Technology</h1>
                <p className='text-[18px]'>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.</p>
                <h2 className='text-xl mt-3 font-semibold mb-2'>Top Features</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                   <ul className='space-y-px'>
                    <li className='flex gap-px items-center'><AiOutlineCheckCircle size={20} color='#3323A8'/>Drag & Drop Newsletter Editor</li>
                    <li className='flex gap-px items-center'><AiOutlineCheckCircle size={20} color='#3323A8'/>Subject Line A/B Testing</li>
                   </ul>
                   <ul className='space-y-px'>
                    <li className='flex gap-px items-center'><AiOutlineCheckCircle size={20} color='#3323A8'/>Content A/B Testing</li>
                    <li className='flex gap-px items-center'><AiOutlineCheckCircle size={20} color='#3323A8'/>List Segmentation</li>
                   </ul>
                </div>
                <button className='bg-[#2cafd3] text-white py-3 px-5 rounded-md mt-2'>Get Started Now </button>
             </div>
          </div>
        </div>
        </div>
    );
};

export default Marquee;