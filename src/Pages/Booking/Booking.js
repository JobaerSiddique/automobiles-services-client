import React, { useState } from 'react';
import AvailableBooking from './AvailableBooking';
import BookingBanner from './BookingBanner';

const Booking = ({service}) => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <BookingBanner service={service} date={date} setDate={setDate}></BookingBanner>
            <AvailableBooking service={service} date={date}></AvailableBooking>
        </div>
    );
};

export default Booking;