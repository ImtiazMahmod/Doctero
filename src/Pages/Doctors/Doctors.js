import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useDocter from '../Hooks/useDocter';
import Banner from '../Shared/Banner/Banner';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    
    const [doctors] = useDocter()
    return (
        <>
            <Banner>

                <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faUserMd} />
                <h1 className="ms-3 fw-bold" >Doctors List</h1>
            </Banner>
                <Container className="my-5">
                <Row xs={1} md={2} lg={4} className="g-4">
                {doctors.map(doctor => (
                <Col key={doctor.id}>
                <Doctor doctor={doctor}></Doctor>
                </Col>
                ))}
                </Row>
                </Container>
            </>
    );
};

export default Doctors;