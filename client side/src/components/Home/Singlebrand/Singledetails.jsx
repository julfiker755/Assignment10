import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axiosinstance from '../../Hooks/Axiosinstance';
import { Rating } from 'react-simple-star-rating'
import  './Singlecard.css'
import toast, { Toaster } from 'react-hot-toast';

const Singledetails = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [single,setsingle]=useState([])
    useEffect(()=>{
        (async()=>{
            const {data}=await Axiosinstance.get(`/allbrand/${id}`)
            setsingle(data)
        })()
    },[id])

    async function hanldecart(){
        const {data}=await Axiosinstance.post('/addcart',single)
        // serverside message handeling
        if(data.message){
            toast.success(`${data.message}`)
        }
    }
    const {_id,brand,name,image,price,rating,description}=single || {}
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
            <div className='grid lg:grid-cols-2 gap-2'>
            <div className='border rounded-md flex items-center'> <img className='m-auto' src={image} alt="" /></div>
            <div className='border rounded-md p-4'>
                <h1 className='text-xl'>{name}</h1>
                <h1>Price: {price}</h1>
                <div className='star'> <Rating  readonly  iconsCount={rating} /></div>
                <p className='py-5'>{description}</p>
                <div className='flex gap-2'>
                <button onClick={()=>navigate(`/brand/${brand}`)} className='bg-[#279785] px-4 py-2 text-white'>Back</button>
                <button onClick={()=>hanldecart()} className='bg-[#2379a7] px-4 py-2 text-white'>Add to Cart</button>
            </div>
            </div>
           
        </div>
        {/* react host tost */}
        <Toaster
  position="top-right"
  reverseOrder={true}
/>
        </div>
    );
};

export default Singledetails;