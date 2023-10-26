import React, { useEffect, useState } from 'react';
import Axiosinstance from '../../Hooks/Axiosinstance';
import Brandcard from './Brandcard';

const Brand = () => {
    const [brand,setbrand]=useState([])
    useEffect(()=>{
        (async()=>{
            const {data}=await Axiosinstance.get('/brand')
            setbrand(data)
        })()
    },[])

    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
            <div className='text-center'>
                <h1 className='text-xl lg:text-3xl font-semibold'>Top Brand</h1>
                 <h1 className='text-[#7f7e7e]'>Choose Your Popular Brand</h1>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-5'>
            {!!brand.length && brand.map(d=> <Brandcard key={d._id} brandata={d}></Brandcard>)}
           </div>
        </div>
    );
};

export default Brand;