import { faHeadphones,faMapMarkedAlt,  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-light p-5'>
            <Container>
                <Row className="g-4">
                    <Col>
                        <a href="/">
                        <img width="200" src="https://i.ibb.co/YXxFB1N/footer.png" alt="" />
                    </a>
                    </Col>
                <Col>
                    <div  className="d-flex justify-content-center align-items-center"> <FontAwesomeIcon
                    className="fs-3 mx-3 text-info"     icon={faMapMarkedAlt} />
                        <div className="text-start"> 
                            <p>Office Address</p>
                            <h5 className="text-secondary">Dhaka,Bangladesh</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex justify-content-center align-items-center"><FontAwesomeIcon
                    className="fs-3 mx-3 text-info"     icon={faHeadphones} />
                        <div className="text-start">
                            <p>24 X 7 online support</p>
                            <h5 className="text-secondary">info@doctero.com</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex justify-content-center align-items-center"><FontAwesomeIcon className="fs-3 mx-3 text-info" icon={faPhoneAlt}/>
                        <div className="text-start">
                            <p>Contact Us Free</p>
                            <h5 className="text-secondary">+880 185 456 888</h5>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;