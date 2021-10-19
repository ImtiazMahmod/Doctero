import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({doctor}) => {
    const { id, name, img, designation } = doctor
  
  ///for dynamic route
  const history = useHistory();
  const handleOnclick = () => {
    history.push(`/doctors/${id}`)
  }
    return (
        <Card className="h-100">
        <Card.Img className="cardimg img-fluid" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-secondary">
           {designation}
                </Card.Text>
                <Button onClick={handleOnclick} variant="info">View More</Button>
        </Card.Body>
      </Card>
    );
};

export default Doctor;