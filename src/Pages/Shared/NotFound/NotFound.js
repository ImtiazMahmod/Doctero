import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="my-5"> 
            <img  className="img-fluid" src="https://i.ibb.co/R61hTDx/3819552.jpg" alt="" />
            </div>
            <Link to="/home">
                <Button  className="m-5" variant="info">Back to Home</Button>
            </Link>

        </div>
    );
};

export default NotFound;