import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import background from "../images/details.jpg"
import Experts from './Experts';



const GarageDetails = () => {
    const {garageId}=useParams()
const [service,setService]= useState({})
const [experts,setExperts]=useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/service/${garageId}`)
    .then(res=> res.json())
    .then(data=>{
        setService(data)
        console.log(data)
    })
},[])
useEffect(()=>{
    fetch('http://localhost:5000/experts')
    .then(res=>res.json())
    .then(data=>setExperts(data))
   },[])


    return (
       <div>
         <div style={{backgroundImage:`url(${background }) `,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div className='container mx-auto p-4'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-20 mt-10'>
                <div>
                    <img className='border-2 border-amber-500 ' src={service.img} alt="" />
                </div>
                <div className='container mx-auto'>
                    <h2 className='text-center text-5xl text-warning'>
                    <Typewriter
      options={{
        strings:[`${service.name}`],
        autoStart:true,
        loop:true
      }}
      />
      <h3 className='text-2xl mt-10'>Location : {service.location}</h3>
       <p className='text-2xl mt-10'><small>Phone : {service.phone}</small></p>
                    </h2>
                </div>
            </div>
          <div className='mt-20'>
          <h2  className='text-justify p-4 text-warning'>{service.description}</h2>
          </div>
        </div>
        </div>
        <div className='bg-warning p-4'>
        <h2 className='text-black font-bold text-5xl text-center mt-10 underline animate-bounce data-aos="fade-up-right" '>Our Experts</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-10 container mx-auto '>
                {
                    experts.map(e=><Experts
                    key={e._id}
                    e={e}
                    />)
                }
            </div>
        </div>
        <button  className='btn btn-primary'><Link to="/booking">Go to Booking</Link></button>
       </div>
    );
};

export default GarageDetails;