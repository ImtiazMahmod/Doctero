import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Department from '../Home/Department/Department';
import useDepartment from '../Hooks/useDepartment';
import Banner from '../Shared/Banner/Banner';

const AllDepartment = () => {
    const [departments]= useDepartment()
    return (
        <div>
        <Banner>
        <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faClinicMedical} />
          <h1 className="ms-3 fw-bold" >Departments</h1>
        </Banner>
                 <Container className="my-5">
            <Row xs={1} md={2} lg={4} className="g-4">
  {departments.map(dp => (
    <Col key={dp.id}>
      <Department department={dp}></Department>
    </Col>
  ))}
</Row>
        </Container>
        </div>
    );
};

export default AllDepartment;