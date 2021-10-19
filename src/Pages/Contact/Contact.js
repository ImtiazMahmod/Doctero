import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Banner from '../Shared/Banner/Banner';

const Contact = () => {
    return (
        <div>
            <Banner>

            <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faAddressBook} />
          <h1 className="ms-3 fw-bold" >Contact Us</h1>
            </Banner>
        </div>
    );
};

export default Contact;