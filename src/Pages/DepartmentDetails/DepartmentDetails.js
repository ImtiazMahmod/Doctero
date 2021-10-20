import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDepartment from '../Hooks/useDepartment';
import CompanyInfo from '../Shared/companyinfo/CompanyInfo';
import Emergency from '../Shared/Emergency/Emergency';

const DepartmentDetails = () => {
    const { departmentId } = useParams();
    const [departments] = useDepartment([]);   
   
    const exactMatch = departments?.filter(department => department.id == departmentId);

    return (
        <div className="my-5">
            <Container>
            <Row className="mx-auto">
                <Col className="mx-auto" md={3}>
                    <Emergency></Emergency>
                </Col>
                <Col className="mx-auto" md={9}>
                    <img className="img-fluid "  width="700" src={exactMatch[0]?.img} alt="" />
                    <div className="text-start"><h2 className="my-3 fw-bold">{exactMatch[0]?.name}</h2>
                    <p className="text-secondary">{ exactMatch[0]?.description}</p></div>
                    <CompanyInfo></CompanyInfo>
                    </Col>
           </Row>
           </Container>
        </div>
    );
};

export default DepartmentDetails;