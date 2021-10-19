import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

const Emergency = () => {
    return (
        <div className="bg-dark p-4">
            <div className="text-light">
                <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon  className="text-info fs-1 " icon={faHeadphones} />
                <div className="text-start ms-3">
                    <p >Emergency Cases</p>
                    <h4 className="text-info">0185-456-888</h4>
                </div>
                </div>
                <p>In Emergency case, we always beside of you.We are always try to help in any condition.NO PANIC.</p>
                <Button variant="info" className="my-4 w-100">Contact US</Button>
            </div>
            <div>
                <Button variant="info" className="my-3 w-100">Our company details</Button>
            </div>
        </div>
    );
};

export default Emergency;