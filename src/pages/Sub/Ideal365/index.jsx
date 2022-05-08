import React from 'react';
import './individual.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BreadCrumb} from '../../../components/BreadCrumb';

export default function Ideal365() {
    return (
        <div className="individual-wrapper">
            <BreadCrumb title="IDEAL365"/>
            <Container  fluid style={{width: "100%"}}>
               {/* Full Width Container. Code Below */}
                
                    <Container fluid style={{width: "70%", maxWidth: "1440px"}}>
                        {/* Restricted Container. Code Below*/}
                        <Row>
                            <Col className="textdescription" xxl={6} md={12}><h2>Next.js Landing & Shop </h2>
                            <Container> <p>Ideal365 are a workwear & janitorial supplier for businesses in northwest, We was hired to sort their web shop by going through their 20,000 products which needed to go up on the website, we cleaned up the product data they had in their warehouse management software, by finding product images, descriptions and setting attributes for sizes and colours on the website, we also built a landing website in next.js so the website loads quicker than any of their competitors which gains them more organic traffic from search engines.  </p> 
                            <p>We also helped with graphic design by creating product mock-ups which helped them make sales and flyers for charity events. </p>
                            </Container>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Container>
                <Col className="projectdetails" xxl={6} md={12}><img src="/ideal365.jpg" alt="features" className="top-img" /></Col>
                <p></p>
            </Container>
        </div>
    )
}
