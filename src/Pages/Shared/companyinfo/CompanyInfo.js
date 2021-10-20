import {  faPortrait, faSearchPlus, faUserMd, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CompanyInfo = () => {
    return (
        <div className="p-4">
            <Container>
            <Row>
                <Col  sm={12} md={6} lg={6}>
                    <div  className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon style={{fontSize: '4rem'}}  className="text-info me-3" icon={faSearchPlus }/>
                        <div className="text-start ps-2">
                                <h5 className="fw-bold"> Standards of Treatment</h5>
                            <p className="text-secondary">We provide standard treatment and latest medical technology with best facility in our clinic.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon style={{fontSize: '4rem'}}   className=" text-info me-3"  icon={faUserNurse }/>
                        <div  className="text-start ps-2">
                        <h5  className="fw-bold">Infection Prevention</h5>
                        <p className="text-secondary">We provide infection prevention and latest medical technology with best facility in our clinic.</p>
                        </div>
                    </div>
                </Col>

                <Col sm={12} md={6} lg={6}>
                    <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon style={{fontSize: '4rem'}}   className="text-info me-3" icon={faPortrait}/>
                        <div  className="text-start ps-2">
                        <h5  className="fw-bold">Well Communication</h5>
                        <p className="text-secondary">We provide well communication and latest medical technology with best facility in our clinic.</p>
                       </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon style={{fontSize: '4rem'}}  className="text-info me-3" icon={faUserMd }/>
                        <div className="text-start ps-2">
                        <h5 className="fw-bold">20+ Years Experience</h5>
                        <p className="text-secondary">We have a 20+ Years Experience and latest medical technology with best facility in our clinic.</p>
                        </div>
                    </div>
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default CompanyInfo;