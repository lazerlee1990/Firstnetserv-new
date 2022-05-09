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
                            <Col className="textdescription" xxl={6} md={12}><h2>Sound Equipment</h2>
                            <Container> <p>Designed and setup a wordpress woo-commerce website & modified it for the rental business model, I designed the brand and website.  </p> 
                            </Container></Col>
                        

                        </Row>
                        <Row>
                        </Row>
                    </Container>
                    <Row style={{width: "100%"}}>
                    <Col className="projectdetails">
                        <img src="/DJsoundrental.jpg" alt="features" className="center" />
                    </Col>
                    </Row>
                <div>
                    <p>
                       
                    </p>
                </div>

                
            </Container>
        </div>
    )
}
