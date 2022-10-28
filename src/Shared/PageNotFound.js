import React from 'react';
import page from "../images/404-error.webp"
const PageNotFound = () => {
    return (
        <div>
            <img style={{width:"100%",ObjectFit:"cover"}} src={page} alt="" />
        </div>
    );
};

export default PageNotFound;