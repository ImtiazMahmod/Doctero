import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import useDepartment from '../../Hooks/useDepartment';
import Department from '../Department/Department';

const Departments = () => {
    const [departments] = useDepartment()
    console.log(departments)
    return (
        <Container className="my-5">
            <Row xs={1} md={2} lg={4} className="g-4">
  {departments.slice(0,8).map(dp => (
    <Col key={dp.id}>
      <Department department={dp}></Department>
    </Col>
  ))}
</Row>
        </Container>
    );
};

export default Departments;