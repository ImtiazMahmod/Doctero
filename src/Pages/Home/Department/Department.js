import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Department.css'

const Department = ({ department }) => {
  const { id, name, img, description } = department
  
  ///for dynamic route
  const history = useHistory();
  const handleOnclick = () => {
    history.push(`/departments/${id}`)
  }
    return (
        <Card>
        <Card.Img className="cardimg" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-secondary">
           {description.slice(0,100)}...
                </Card.Text>
                <Button onClick={handleOnclick} variant="info">View More</Button>
        </Card.Body>
      </Card>
    );
};

export default Department;