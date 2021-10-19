import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDepartment from '../Hooks/useDepartment';
import Emergency from '../Shared/Emergency/Emergency';

const DepartmentDetails = () => {
    const { departmentId } = useParams();
    const [departments] = useDepartment([]);   
   
    const exactMatch = departments?.filter(department => department.id == departmentId);

    console.log('match',departmentId,exactMatch)
    console.log('hi',departments)

    return (
        <div className="my-5">
            <Container>
            <Row>
                <Col md={3}>
                    <Emergency></Emergency>
                </Col>
                <Col md={9}>
                    <img className="w-100 " height="600" width="700" src={exactMatch[0]?.img} alt="" />
                    <div className="text-start"><h2 className="my-3 fw-bold">{exactMatch[0]?.name}</h2>
                    <p className="text-secondary">{ exactMatch[0]?.description}</p></div>
                </Col>
           </Row>
           </Container>
        </div>
    );
};

export default DepartmentDetails;