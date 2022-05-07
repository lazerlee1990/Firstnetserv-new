import React from 'react';
import './individual.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BreadCrumb} from '../../../components/BreadCrumb';

export default function Individual() {
    return (
        <div className="individual-wrapper">
            <BreadCrumb title="Streamhostlink"/>
            <Container  fluid style={{width: "100%"}}>
               {/* Full Width Container. Code Below */}
                
                    <Container fluid style={{width: "70%", maxWidth: "1440px"}}>
                        {/* Restricted Container. Code Below*/}
                        <Row>
                            <Col className="textdescription" xxl={6} md={12}><h2>Hosting & Development</h2>
                            <Container> <p>Humeka Systems GmbH, also known as Streamhostlink is a German hosting and development company. In the summer of 2015, the founder decided to hire me to setup and configure their business, I worked with a system administrator to setup the hosting and billing infostructure WHM & WHMCS software which is built specifically for hosting companies, I also designed the brand and frontend website.   </p> 
                            <p>After the company was setup, my role transitioned into building websites and maintaining their clients websites, during my time I worked on another tech start-up called Flowcite, which was a tool for students working on papers to research and get the correct format for citations.</p></Container></Col>
                        

                        </Row>
                        <Row>
                        </Row>
                    </Container>
                <Col className="projectdetails" xxl={6} md={12}><img src="/Streamhostlink.jpg" alt="features" className="top-img flip" /></Col>
            </Container>
        </div>
    )
}
