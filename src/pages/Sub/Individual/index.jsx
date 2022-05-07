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
                            <Col className="textdescription" xxl={6} md={12}><h2>Bespoke E-commerce Checkout</h2>
                            <Container> <p>They needed new digital infrastructure as they were using an old vulnerable version of Magento, and their checkout design tool was broken and didn’t include new materials and patterns the business started offering since the old website was built.  </p> 
                            <p>They came to us with the request for a new website which included a design tool for their main product, so customers could design their seat covers and see how they would turn out before buying, the checkout design tool had millions of combinations between materials, styles, and stitching patterns.</p></Container></Col>
                        

                        </Row>
                        <Row>
                        </Row>
                    </Container>
                <Col className="projectdetails" xxl={6} md={12}><img src="/Individual.jpg" alt="features" className="top-img flip" /></Col>
            </Container>
        </div>
    )
}
