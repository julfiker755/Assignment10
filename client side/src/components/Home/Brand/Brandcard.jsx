import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Brandcard = ({brandata}) => {
    const {name,image}=brandata
    const navigate=useNavigate()
    
    return (
        <div onClick={()=>navigate(`/brand/${name}`)} className='border w-full rounded-md p-3 m-auto relative cursor-pointer'>
          <img className='h-[150px] m-auto' src={image} alt="" />
          <div className='absolute bg-[#6E2594] text-white left-0 py-[1px] rounded-r-full px-2 top-4 !capitalize'>{name}</div>
        </div>
    );
};

export default Brandcard;