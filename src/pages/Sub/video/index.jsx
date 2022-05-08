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
                            <Col className="textdescription" xxl={6} md={12}><h2>Video Design</h2>
                            <Container> <p> </p> 
                            </Container></Col>
                        

                        </Row>
                        <Row style={{width: "100%"}}>
                            < Col className="center" > <iframe width="100%" height="515" src="https://www.youtube.com/embed/lEq4YT7NWt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                        </Row>
                       
                    </Container>
                <Col className="projectdetails" xxl={6} md={12}><img src="" alt="features" className="top-img" />  </Col>
              
            </Container>
        </div>
    )
}
