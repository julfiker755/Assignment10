import React, { useEffect, useState } from 'react';
import Axiosinstance from '../Hooks/Axiosinstance';
import Mycard from './Mycard';
import toast, { Toaster } from 'react-hot-toast';

const Mycart = () => {
    const [addcarts,setaddcart]=useState([])
    useEffect(()=>{
        (async()=>{
            const {data}=await Axiosinstance.get('/addcart')
            setaddcart(data)
        })()
    },[])
//    handledelete delete
const handledelete=async(id)=>{
    const {data}=await Axiosinstance.delete(`/addcartt/${id}`)
    if(data.deletedCount > 0){
        toast.error("Delete Successfully ")
        const newdata = addcarts.filter(u => u._id !== id)
        setaddcart(newdata)
    }
}
    return (
        <div className='w-11/12 lg:max-w-7xl py-10 m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {!!addcarts.length ? addcarts?.map(d=><Mycard {...d} handledelete={handledelete} key={d._id}></Mycard>):'Please Go Your details page'}
            </div>
            {/* react host tost */}
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default Mycart;