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
                            <Col className="textdescription" xxl={6} md={12}><h2>Flyers</h2>
                            <Container> <p></p> 
                           </Container></Col>
                        

                        </Row>
                        <Row>
                        </Row>
                    </Container>
                                   
                    <Row style={{width: "60%"}}><Col className="projectdetails" xxl={6} md={12}><img src="/Football-kit.jpg" alt="features" className="center" /></Col></Row>
                
                <p></p>
            </Container>
        </div>
    )
}
