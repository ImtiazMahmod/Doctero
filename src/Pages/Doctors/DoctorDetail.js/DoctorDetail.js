import { faArrowRight, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDocter from '../../Hooks/useDocter';
import Banner from '../../Shared/Banner/Banner';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctors] = useDocter([]);   
   
    const exactMatch = doctors?.filter(department => department.id == doctorId);
    return (
        <div>
            <Banner>

            <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faStethoscope} />
          <h1 className="ms-3 fw-bold" >Doctor</h1>
            </Banner>

            <Container className="my-5">
            <Row>
                <Col md={2} lg={4}>
                <Card className="h-100 rounded">
                    <Card.Img className="cardimg img-fluid p-4 rounded" variant="top" src={exactMatch[0]?.img} />
                    <Card.Body>
                    <Card.Title className="fw-bold text-info">{exactMatch[0]?.name}</Card.Title>
                    <Card.Text className="text-secondary">
                    {exactMatch[0]?.designation}
                    </Card.Text>
                            
                    </Card.Body>
                </Card>
                </Col >
                <Col md={9} lg={7}>
                    <h2 className="fw-bold text-start">Qualification:</h2>
                    <div className="mt-4">
                    {
                            exactMatch[0]?.qualification.map(ql => <p className="text-start"><FontAwesomeIcon className="text-info" icon={ faArrowRight }/> { ql}</p>)
                    }
                    </div>
                </Col>

            </Row>
        </Container>
        </div>
    );
};

export default DoctorDetail;