import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from '../../Doctors/Doctor/Doctor';
import useDocter from '../../Hooks/useDocter';

const HomeDoctors = () => {
    const [doctors] = useDocter()
    return (
        <>
       
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

export default HomeDoctors;