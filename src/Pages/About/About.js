import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Banner from '../Shared/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Banner>
            <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faInfoCircle} />
          <h1 className="ms-3 fw-bold" >About Us</h1>
            </Banner>
            <Container className="my-5">
            <Row>
                    <Col className="d-flex justify-content-center align-items-center" sm={12} md={6} lg={6}>
                        <img  width="300" src="https://i.ibb.co/NVnJVWj/doctor-14044.png" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6} className="text-start mt-3">
                        <p className="text-secondary">Visit Our Hospitals</p>
                        <h1>A great place for medico hospital center & health care</h1>
                        <p className="text-secondary my-3">
                            Doctero is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2000. Doctero is one of the ventures of Doctero Group which is the top business group of the country.
                            <br />
                            <br />
                            The reputation of Doctero Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Doctero Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.
                        </p>
                    </Col>
            </Row>
            </Container>
        </div>
    );
};

export default About;