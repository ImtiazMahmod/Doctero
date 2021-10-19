import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Banner from '../Shared/Banner/Banner';
import ContactDetail from './ContactDetail';

const Contact = () => {
    return (
        <div>
            <Banner>

            <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faAddressBook} />
          <h1 className="ms-3 fw-bold" >Contact Us</h1>
            </Banner>
            <div className="py-5 bg-light">
                <p className="text-secondary">Get in touch</p>
                <h1 className="fw-bold">Call now or write a message</h1>
                <p></p>
            </div>
            <ContactDetail></ContactDetail>
        </div>
    );
};

export default Contact;