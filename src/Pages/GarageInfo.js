import React from 'react';

import { useNavigate } from 'react-router-dom';

const GarageInfo = ({service}) => {
   const {_id,name,img}=service
    
   const navigate=useNavigate();

   const garageDetailsInfo = id =>{
    navigate(`/garage/${id}`)
   }
   return (
      <div className="card w-full-max glass mt-10  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300   ">
  <div><img src={img}  alt="" /></div>
  <div className="card-body">
    <h2 className="card-title text-primary font-bold text-2xl text-center ">{name}</h2>
    
   
    <button onClick={()=> garageDetailsInfo(_id) }  className='btn btn-warning'>Go to  {name}</button>
    
  </div>
</div>
    );
};

export default GarageInfo;