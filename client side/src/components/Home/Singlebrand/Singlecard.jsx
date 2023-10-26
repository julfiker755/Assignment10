import React from 'react';
import { Rating } from 'react-simple-star-rating'
import './Singlecard.css'
import { useNavigate } from 'react-router-dom';

const Singlecard = ({data}) => {
    const {_id,name,image,price,rating}=data || {}
    const navigate=useNavigate()
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
           <div className='flex justify-between gap-6 py-2'>
            <button onClick={()=>navigate(`/details/${_id}`)} className='bg-[#2e81d4] text-white py-2 px-3 rounded-md'>Show Details</button>
            <button onClick={()=>navigate(`/update/${_id}`)} className='bg-[#285a8d] text-white py-2 px-3 rounded-md'>Update</button>
           </div>
        </div>
    );
};

export default Singlecard;