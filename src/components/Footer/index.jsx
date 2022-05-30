import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';



const Block = ({title, links}) => {
    return (
        <>
            <h2 id='footer-title'>{title}</h2>
            <ul id='footer-ul'>
                {links ? links.map((i,l) => (
                    <li style={{listStyle: "none"}} key={l}>
                        <Link id='footer-link'  to={i[0]}>{i[1]}</Link>
                    </li>
                    
                )): null}
            </ul>
        </>
    )
}


export default function Footer() {
    return (
        <Container fluid className="footer-wrapper" style={{maxWidth: "100%", padding: '0'}}>
            <Container fluid className="footer-container" style={{width: "70%", maxWidth: "1440px"}}>
                <Row id='footer-inner-wrapper'>
                    <Col lg={4} id='no-padding'>
                        <img id='footer-image' src='/whitemainlogo.fw_.png' alt='footer-logo'/>
                        <p id='footer-text'>Firstnetserv's goal is to make lifetime clients by providing satisfaction through efficient support and providing exceptional service by delivering high quality and secure IT systems and solutions that allow our clients to meet their business goals.</p>
                    </Col>
                    <Col className='footer-block'  lg={2} id='no-padding'>
                        <Block 
                            title='Quick Links'
                            links={[
                                ["/search-domain", "Search domain"],
                                ["/my-account", "My Account"],
                                ["/terms", "Terms and Conditions"],
                                ["/privacy-policy", "Privacy Policy"]
                            ]}
                        />
                    </Col>
                    <Col className='footer-block' id='no-padding' lg={2}>
                        <Block 
                            title='About us'
                            links={[
                                ["/Luke", "Luke Falla"],
                                ["/Liam", "Liam Barnett"],
                            ]}
                        />
                    </Col>
                    <Col className='footer-block' id='no-padding' lg={3}>
                        <h2 id='footer-title'>Latest News</h2>
                        <Card id='footer-card'>
                            <Card.Body>
                                <div>
                                    <h6 id='footer-card-text'>5th June 2020</h6>
                                    <Link id='f-link' to='/blog'>http vs http2 and upcoming http3</Link>
                                </div>
                                <div style={{paddingTop: '20px'}}>
                                    <h6 id='footer-card-text'>7th June 2019</h6>
                                    <Link id='f-link' to='/blog'>Creative Aesthetics Design</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <p style={{color: 'white', fontSize: '12px', paddingTop: '50px'}}>© 2020 Firstnetserv LTD</p>
                </Row>
                
            </Container>
           
        </Container>
    )
}
