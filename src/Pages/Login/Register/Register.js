import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'

const Register = () => {
    const { updateUser, verifyEmail, setError,setUser, error, newUser, setName, setEmail, setPassword } = useAuth()
    
    ///user desired destination path
    
    const history = useHistory()
    const handleName = (e) => {
        setName(e.target.value)
       
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
       
   }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleSignUp = () => {
        newUser()
        .then(result => {
            setUser(result.user);
            updateUser();
            verifyEmail(result.user)
            setError('')
            history.push('/home');
            ///solution for auto login after registration
            /// reload window
            window.location.reload();
        })
      .catch(error=> setError(error.message))
    }
    const inputStyle = "p-3 m-3 outline-none rounded border-0 shadow";
    return (
        <div className="my-5">
            <Container>
            <Row>
                <Col lg={8} className="d-none d-lg-block mt-0">
                    <img className="img-fluid h-75" src="https://i.ibb.co/ZS7LqdY/5821152.jpg" alt="" />
                </Col>
                    <Col md={12} lg={4} className="mt-3">
                        <h2 className="fw-bold">Register as A Doctor.</h2>
                        <p>Lets Get you Registered.</p>
                    <form className="d-flex flex-column  ">
                        <input onBlur={handleName} className={inputStyle} type="text" placeholder="Your Name" required/>
                        <input onBlur={handleEmail} className={inputStyle} type="email" placeholder="Your Email" required/>
                            <input onBlur={handlePassword} className={inputStyle} type="password" placeholder="Your Password" required />

                            {/* error show */}
                            {error ? <p className="text-danger mt-2">{error}</p> : ""}
                        <Button onClick={handleSignUp} className={inputStyle} variant="info">SignUp</Button>
                        </form>
                        
                        <div className="mt-3">
                            <p>Already have an Account.  <Link to="/login" className="text-info fw-bold">Login</Link> </p>
                            
                        </div>
                </Col>
            </Row>
            </Container>
            </div>
    );
};

export default Register;