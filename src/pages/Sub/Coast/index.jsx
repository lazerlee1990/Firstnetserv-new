import React from 'react';
import './coast.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BreadCrumb} from '../../../components/BreadCrumb';


export default function Coast() {
    return (
        <div className="individual-wrapper">
             <BreadCrumb title="Coast Renewable Services"/>
            <Container fluid style={{width: "100%"}}>
                {/* Full Width Container. Code Below */}
                
                    <Container fluid style={{width: "70%", maxWidth: "1440px"}}>
                        {/* Restricted Container. Code Below*/}
                        <Col className="textdescription" xxl={6} md={12}><h2>Renewable Personnel</h2>
                            <Container> <p> Coast Renewable Services is a company providing diagnostic, repair, maintenance, installation, inspection, and personnel to wind farms in the northern hemisphere. They wanted a website which could showcase their work and to be optimised for organic traffic. We designed and deployed a website with recruitment tools and information for their clients.</p></Container></Col>
                        
                    </Container>
                    <Row style={{width: "100%"}}>
                <Col className="projectdetails" xxl={6} md={12}><img src="/Coast-full.jpg" alt="features" className="center" /></Col>
                    </Row>
                <p></p>
            </Container>
        </div>
    )
}
