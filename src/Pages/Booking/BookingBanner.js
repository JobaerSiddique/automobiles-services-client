import React from 'react';

import bookingbg from "../../images/booking.jpg";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const BookingBanner = ({date,setDate}) => {
   
    return (
        <div>
           <div className="hero min-h-screen bg-info">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bookingbg} className="max-w-md rounded-lg shadow-2xl" />
    <div >
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
     
      />
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingBanner;