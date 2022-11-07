import React, { useState } from 'react';
import AvailableBooking from './AvailableBooking';
import BookingBanner from './BookingBanner';

const Booking = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <BookingBanner date={date} setDate={setDate}></BookingBanner>
            <AvailableBooking date={date}></AvailableBooking>
        </div>
    );
};

export default Booking;