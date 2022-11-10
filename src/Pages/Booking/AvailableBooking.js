import React from 'react';
import { format } from 'date-fns';



const AvailableBooking = ({date}) => {


return (
        <div>
            <h1 className='text-center text-3xl font-bold text-cyan-500 mt-10'>Available booking for Services on {format(date, 'PP')}</h1>
            
        </div>
    );
};

export default AvailableBooking;