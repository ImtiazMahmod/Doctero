import { faMailBulk, faMedkit, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactDetail = () => {
    return (
        <Container fluid="md">
        <div className="d-flex m-auto ">
    
            <Row  className="mx-auto">
         <Col  sm={12} md={6} lg={4}  className="info mx-auto" style={{ width: '15rem' }}>
         <FontAwesomeIcon className="infoIcon " icon={faMedkit} />
               
          <h5>Our Location​​</h5>
           <p> Dhaka,Bangladesh </p>
                
               
          </Col>
          <Col sm={12} md={6} lg={4} className="info   mx-auto" style={{ width: '15rem' }}>
                <FontAwesomeIcon className="infoIcon  " icon={faPhoneAlt} />
               
                    <h5>Phone Number</h5>
                    <p>
                   Phone:+880 185 456 888
                    </p>
            </Col>
                
          <Col sm={12} md={6} lg={4}  className="info   mx-auto" style={{ width: '15rem' }}>
            <FontAwesomeIcon className="infoIcon" icon={faMailBulk} />
                
                    <h5>Email Address</h5>
                    <p>
                  Contact@doctero.com
                    </p>
                
               
            </Col>
           
        </Row>
            </div>
            </Container>
    );
};

export default ContactDetail;