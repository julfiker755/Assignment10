import React from 'react';
import { Rating } from 'react-simple-star-rating'
import '../Home/Singlebrand/Singlecard.css'

const Mycard = ({_id,name,image,price,rating,handledelete}) => {
    return (
        <div className='border p-4 rounded-md'>
        <img className='m-auto h-[220px]'  src={image} alt="" />
        <h1 className='text-base'>{name}</h1>
        <div className='flex justify-between py-[1px]'>
         <div className='star'>
           <Rating  readonly  iconsCount={parseInt(rating)} />
         </div>
         <h1>Price:{price}</h1>
        </div>
        <button onClick={()=>handledelete(_id)} className='bg-[#2c99dd] py-2 px-3 text-white w-full rounded-md mt-3'>Delete</button>
     </div>
    );
};

export default Mycard;