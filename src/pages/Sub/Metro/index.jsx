import React from 'react';
import './individual.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BreadCrumb} from '../../../components/BreadCrumb';

export default function Individual() {
    return (
        <div className="individual-wrapper">
            <BreadCrumb title="Indvidual Auto Design"/>
            <Container  fluid style={{width: "100%"}}>
               {/* Full Width Container. Code Below */}
                
                    <Container fluid style={{width: "70%", maxWidth: "1440px"}}>
                        {/* Restricted Container. Code Below*/}
                        <Row>
                            <Col className="textdescription" xxl={6} md={12}><h2>Boxing Gym</h2>
                            <Container> <p>Metro Boxing is sponsored by Ideal365, we were tasked with creating the gym a new web portal showcasing their work and class time table. </p> 
<p>We had the pleasure of meeting Leigh & Tommy, They gave us the brief for what they was looking for, we designed and developed a website, and integrated a table plugin for their classes. </p>
</Container></Col>
                        

                        </Row>
                        <Row>
                        </Row>
                    </Container>
                <Col className="projectdetails" xxl={6} md={12}><img src="/metromockup.png" alt="features" className="top-img" /></Col>
                <p></p>
            </Container>
        </div>
    )
}
