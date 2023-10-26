import React from 'react';
import svgimage from '../../../assets/svgimage.png'

const Awesome = () => {
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
           <div className='grid grid-cols-1 lg:grid-cols-2'>
             <div className='self-center order-2 lg:order-1'>
                <h2>WELCOME TO OUR COMPANY</h2>
                <h1 className='text-3xl lg:text-6xl font-semibold'>We Make Awesome IT Services For Your Newly Business</h1>
             </div>
             <div className='order-1 lg:order-2'>
                <img className='m-auto' src={svgimage} alt="" />
             </div>
           </div>
        </div>
    );
};

export default Awesome;