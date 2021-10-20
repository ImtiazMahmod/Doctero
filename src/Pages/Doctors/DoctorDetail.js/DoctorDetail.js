import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDocter from '../../Hooks/useDocter';
import Banner from '../../Shared/Banner/Banner';
import CompanyInfo from '../../Shared/companyinfo/CompanyInfo';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctors] = useDocter([]);   
   
    const exactMatch = doctors?.filter(department => department.id == doctorId);
    const style = { borderRadius: '50%', height: '30', width: "30"}

    const iconStyle = "mx-2 fs-1 p-1 text-light  bg-secondary "
    return (
        <div>
            <Banner>

            <FontAwesomeIcon className="fw-bold fs-1 text-secondary"    icon={faStethoscope} />
          <h1 className="ms-3 fw-bold" >Doctor</h1>
            </Banner>

            <Container className="my-5">
            <Row className="justify-content-center">
                <Col sm={12} md={2} lg={3}>
                <Card className="h-100 rounded border-0 shadow py-3">
                    <Card.Img className="cardimg img-fluid  mx-auto" variant="top" src={exactMatch[0]?.img} />
                    <Card.Body>
                    <Card.Title className="fw-bold text-info">{exactMatch[0]?.name}</Card.Title>
                    <Card.Text className="fw-bold text-secondary">
                                    {exactMatch[0]?.designation} <br />
                                    {
                            exactMatch[0]?.qualification.map(ql => <p className="text-center fw-normal d-inline-block"> { ql?.split(" ")[0]}, </p>)
                    }
                    </Card.Text>
                    <Button variant="info">Appointment Now</Button>
                            </Card.Body>
                            <div>
                            <FontAwesomeIcon style={style} className={iconStyle}  icon={faFacebookF}  />
                            <FontAwesomeIcon style={style} className={iconStyle} icon={faTwitter}  />
                            <FontAwesomeIcon style={style} className={iconStyle} icon={faInstagram}  />
                         </div>
                </Card>
                </Col >
                <Col  sm={12} md={9} lg={7}>
                    <h2 className="fw-bold text-start">Qualification:</h2>
                    <div className=" p-4">
                    {
                            exactMatch[0]?.qualification.map(ql => <p className="text-start"><FontAwesomeIcon className="text-info" icon={ faArrowRight }/> { ql}</p>)
                    }
                        </div>
                        <CompanyInfo></CompanyInfo>
                       
                </Col>

            </Row>
        </Container>
        </div>
    );
};

export default DoctorDetail;