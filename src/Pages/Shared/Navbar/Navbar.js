import React from 'react';
import { Container,Nav,Button, Navbar } from 'react-bootstrap';
import {HashLink as Link} from 'react-router-hash-link'
import useAuth from '../../Hooks/useAuth';

const MainNavbar = () => {
  const { user,logout } = useAuth();
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
       <Navbar.Brand>
              
              <img width="200" className="mx-5" src="https://i.ibb.co/cCw9yY8/logo.png" alt="" />    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link className="fw-bold" as={Link} to="/home">Home   
      </Nav.Link>
              <Nav.Link className="fw-bold" as={Link} to="/about">About Us </Nav.Link>
              
        <Nav.Link className="fw-bold" href="/home#doctors">Doctors </Nav.Link>
        <Nav.Link className="fw-bold" as={Link} to="/departments">Departments </Nav.Link>
        <Nav.Link className="fw-bold" as={Link} to="/contact"> Contact Us </Nav.Link >
        
      
    </Nav>
            <Nav>
              {/* user toggle */}
              {user?.email && <h5 className="text-dark mt-auto mx-3">{user.displayName}</h5> }
              {user?.email ?
                <Button onClick={logout} variant="info" >LogOut</Button> :
                <Nav.Link className="fw-bold" as={Link} to="/login"> Login </Nav.Link>}
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default MainNavbar;