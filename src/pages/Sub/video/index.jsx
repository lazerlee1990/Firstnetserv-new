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
                        <div>
                            <Row style={{width: "100%"}}>
                                < Col className="center" > <iframe width="870px" height="515" src="https://www.youtube.com/embed/jW2rlfUDDrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                            </Row>
                        </div>
                        <div>
                            <Row style={{width: "100%"}}>
                                < Col className="center" > <iframe width="870px" height="515" src="https://www.youtube.com/embed/lEq4YT7NWt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                            </Row>
                        </div>
                       <div> <Row style={{width: "100%"}}>
                            < Col className="center" > <iframe width="870px" height="515" src="https://www.youtube.com/embed/QpUxib7yBuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                        </Row>
                        </div>
                        <div> <Row style={{width: "100%"}}>
                            < Col className="center" > <iframe width="870px" height="515" src="https://www.youtube.com/embed/HYIZt6zfs9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                        </Row>
                        </div>
                        <div> <Row style={{width: "100%"}}>
                            < Col className="center" > <iframe width="870px" height="515" src="https://www.youtube.com/embed/rOYVFYdIE3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                        </Row>
                        </div>
                    </Container>
                <Col className="projectdetails" xxl={6} md={12}><img src="" alt="features" className="top-img" />  </Col>
              
            </Container>
        </div>
    )
}
