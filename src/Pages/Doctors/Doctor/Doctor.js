import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useSpring, animated, config } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Doctor = ({doctor}) => {
  const { id, name, img, designation } = doctor;
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
  
  ///for dynamic route
  const history = useHistory();
  const handleOnclick = () => {
    history.push(`/doctors/${id}`)
  }
    return (
      <Card className="h-100 border-0 shadow">
        <animated.div
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
        >
        <Card.Img className="cardimg p-2 mt-2 " variant="top" src={img} />
        </animated.div>
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