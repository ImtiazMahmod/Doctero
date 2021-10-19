import { faDiagnoses, faMedkit, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderInfo.css'
const HeaderInfo = () => {
    return (
        <Container fluid="md">
        <div className="d-flex m-auto bg-light">
    
            <Row  className="mx-auto">
         <Col  sm={12} md={6} lg={4}  className="info mx-auto" style={{ width: '15rem' }}>
         <FontAwesomeIcon className="infoIcon " icon={faMedkit} />
               
          <h5>Specialized Consultant & Support</h5>
           <p> Specialized consultant and support available. </p>
                
               
          </Col>
          <Col sm={12} md={6} lg={4} className="info   mx-auto" style={{ width: '15rem' }}>
                <FontAwesomeIcon className="infoIcon  " icon={faDiagnoses} />
               
                    <h5>Diagnosis & Investigation</h5>
                    <p>
                   Diagnosis & investigation is perfectly done on doctero.
                    </p>
            </Col>
                
          <Col sm={12} md={6} lg={4}  className="info   mx-auto" style={{ width: '15rem' }}>
            <FontAwesomeIcon className="infoIcon" icon={faNotesMedical} />
                
                    <h5>Medical Treatment & Surgical</h5>
                    <p>
                    Special medical treatment available on doctero.
                    </p>
                
               
            </Col>
           
        </Row>
            </div>
            </Container>
    );
};

export default HeaderInfo;