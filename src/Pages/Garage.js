import React, { useEffect, useState } from 'react';
import GarageInfo from "./GarageInfo"
import back from "../images/background.jpg"
const Garage = () => {
  const [services,setServices]= useState([])
   
  useEffect(()=>{
    fetch('https://automobiles-service-server.vercel.app/service')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  
  return (
        <div style={{backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <div className='container mx-auto'>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-20 overflow-hidden  '>
        {
            services.map(service=><GarageInfo
            key={service._id}
            service={service}
            />)
        }
</div>
          </div>
        </div>
    );
};

export default Garage;