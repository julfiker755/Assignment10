import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Singlecard from './Singlecard';
import Axiosinstance from '../../Hooks/Axiosinstance';
import ad1 from '../../../assets/add/ad1.jpg'
import ad2 from '../../../assets/add/ad2.jpg'
import ad3 from '../../../assets/add/ad3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useAuthState from '../../Hooks/useAuthState';


const Singlebrand = () => {
    const {name}=useParams()
    const [allbrand,setallbrand]=useState([])
    const {user}=useAuthState()
    const navigate=useNavigate()
    console
    useEffect(()=>{
        (async()=>{
           const {data}=await Axiosinstance.get('/allbrand') 
           const branddata=data.filter(filbrand=>filbrand.brand === name)
          setallbrand(branddata)
        })()
    },[name])


    return (
        <div>
            <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ad1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ad2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ad3} alt="" /></SwiperSlide>
      </Swiper>
            </div>
            <div className='w-11/12 lg:max-w-7xl m-auto'>
            <div className='grid grid-cols-1 gap-3 py-10 md:grid-cols-3 lg:grid-cols-4'>
            {!!allbrand.length && allbrand.map(d=> <Singlecard  key={d._id}  data={d}></Singlecard>)}
        </div>
        </div>
        </div>
    );
};

export default Singlebrand;