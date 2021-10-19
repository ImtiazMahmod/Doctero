import {  faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const {setError,setUser,setIsLoading, googleSignIn,error,login,setEmail,setPassword,githubSignIn } = useAuth()
    ///user desired destination path
    const location = useLocation();
    const redirectUri = location.state?.from || '/home'
    const history = useHistory()

    ///google sign in
    const handleGoogle = () => {
        googleSignIn()
        .then((result) => {
            setUser(result.user)
            history.push(redirectUri)
        }).finally(setIsLoading(false))
            ;
   }
   const handleEmail = (e) => {
    setEmail(e.target.value)
   
    }
    ///github sign in
    const handleGithub = () => {
        githubSignIn()
        .then((result) => {
            setUser(result.user)
            history.push(redirectUri)
        })
            .catch(error =>
                setError(error.message)
                )
            .finally(setIsLoading(false))
            ;
    }
const handlePassword = (e) => {
    setPassword(e.target.value)
    }
    ///login using email
    const handleLogin = () => {
        login()
        .then((result) => {
            setUser(result.user)
            setError('');
            // history.go(0);
            history.push(redirectUri);
          
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        }).finally(setIsLoading(false));
    }
    const inputStyle="p-3 m-3 outline-none rounded border-0 shadow"
    return (
        <div className="my-5">
            <Container>
            <Row>
                <Col  lg={8} className="d-none d-lg-block mt-0">
                    <img className="img-fluid h-75" src="https://i.ibb.co/ZS7LqdY/5821152.jpg" alt="" />
                </Col>
                    <Col md={12} lg={4} className="mt-3">
                        <h2 className="fw-bold">Welcome Back Doctor !</h2>
                        <p>Lets Get you Logged in</p>
                    <form className="d-flex flex-column  ">
                        <input onBlur={handleEmail} className={inputStyle} type="email" placeholder="Your Email" required/>
                            <input onBlur={handlePassword} className={inputStyle} type="password" placeholder="Your Password" required />
                            
                            {/* error show */}
                            {error ? <p className="text-danger mt-2">{error}</p> : ""}
                        <Button onClick={handleLogin} className={inputStyle} variant="info">Login</Button>
                        </form>
                        <div className="py-3">
                            <p className="border-bottom pb-3 mx-5 border-info">Alternative Login Options</p>
                            <Button onClick={handleGoogle}  className="m-3 w-75" variant="outline-info"> <FontAwesomeIcon icon={ faGoogle } /> Login With Google</Button>
                            <Button onClick={handleGithub} className=" m-3 w-75" variant="outline-info">
                            <FontAwesomeIcon  icon={ faGithub} /> Login With Github</Button>
                        </div>
                        <div className="mt-3">
                            <p>Don't have an Account.  <Link to="/register" className="text-info fw-bold">SignUp</Link> </p>
                            
                        </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;