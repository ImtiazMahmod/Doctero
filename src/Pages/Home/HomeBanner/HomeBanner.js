import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div >
           <div className="py-5">
            <Container>
            <Row sm={1} md={2} className="g-4">
                    <Col className="d-flex justify content-center align-items-center">
                        <div className="text-start"><h1 className="bannertitle">A DOCTERO</h1>
                            <h1 className="bannersub "> The Hospital of the Future, today.</h1>
                                <Link to="/doctors">
                                <Button variant="info">Make An Appointment</Button>
                                </Link>
                        </div>
                    </Col>
                    <Col >
                        <div className="banner img-fluid ">
                        <img src='https://i.ibb.co/gTLDKVj/8-Qualities-in-a-Doctor-2.jpg' alt="" />
                    </div>
                </Col>
          </Row>
          </Container>
        </div>
            
            </div>
    );
};

export default HomeBanner;