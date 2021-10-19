import React from 'react';
import './Banner.css'

const Banner = ({children}) => {
    return (
        <div className="bannersytle d-flex align-items-center ">
       

            <div className=" d-flex w-50 mx-auto">          
               {children[0]} 
        
            {children[1]}
                
        </div>
        </div>
    );
};

export default Banner;