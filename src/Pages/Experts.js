import React from 'react';

import Slider from 'react-slick';
const Experts = ({e}) => {
   const {img,name}=e

   
    return (
   <div className='p-4' data-aos="flip-left"
   data-aos-easing="ease-out-cubic"
   data-aos-duration="2000">
     
      
      <div className="card card-compact w-full-max bg-base-100 shadow-xl">
  <figure className='p-2 rounded'><img className='rounded' src={img}/></figure>
  <div className="card-body">
    
    <p className='font-bold text-center'>Name: {name}</p>
   
  </div>
</div>
     
    
   </div>
      
      
    );
};

export default Experts;