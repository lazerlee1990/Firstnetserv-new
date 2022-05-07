import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './slidingcard.css';
import { useHistory } from "react-router-dom";

export function SlidingCard({image, link, text, linkText, style}) {
    const router = useHistory()
    return (
        <Card className="card-body-wrapper">
            <Card.Body className="card-b" style={{display: "flex", flexDirection: "column", textAlign: "center", padding: "30px"}}>
                <Card.Img onClick={() => router.push(link)} style={style} className="f-card-image" src={image} />
                <Link className="card-link f-cards-link" to={link}>
                    {linkText}
                </Link>
                <Card.Text className="f-cards-text">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}





export  function SlidingCards({deg}) {
    let ndeg =  (-300 + deg / 2) < 0  ? (-300 + deg / 2) : 0
    let ndeg1 =  (-400 + deg / 2) < 0  ? (-400 + deg / 2) : 0
    let ndeg2 =  (-600 + deg / 2) < 0  ? (-600 + deg / 2) : 0



    return (
        <Container fluid>
            <Row>
                <Col style={{transform: `translateX(${ndeg}px)`}}>
                    <SlidingCard 
                      image="/O0Cwcw6.jpg"
                      link="/ideal365"
                      text="E-COMMERCE"
                      linkText="Ideal365"
                    />
                </Col>

                <Col style={{transform: `translateX(${-ndeg}px)`}}>
                    <SlidingCard 
                    image="/metro-preview.jpg"
                    link="/metro"
                    text="BOXING GYM"
                    linkText="Metro boxing"
                    />
                </Col>
            </Row>
            <Row>
                <Col style={{transform: `translateX(${ndeg1}px)`}}>
                    <SlidingCard 
                        image="/stream.jpg"
                        link="/stream"
                        text="SALES CONFIGURATION"
                        linkText="StreamHostLink"
                    />
                </Col>
                <Col style={{transform: `translateX(${-ndeg1}px)`}}>
                    <SlidingCard 
                        image="/dj.png"
                        link="/djsoundrental"
                        text="E-COMMERICAL RENTAL"
                        linkText="DJ Sound Rental"
                    />
                </Col>
            </Row>
            <Row>     
                <Col style={{transform: `translateX(${ndeg2}px)`}}>
                    <SlidingCard 
                        image="/coast.jpg"
                        link="/coast"
                        text="SERVICES PORTAL"
                        linkText="Coast Renewable"
                    />
                </Col>
                <Col style={{transform: `translateX(${-ndeg2}px)`}}>
                    <SlidingCard 
                        image="/indi.png"
                        link="/individual"
                        text="WEB SHOP CONFIGURATOR"
                        linkText="Individual"
                    />
                </Col></Row>
        </Container>
    )
}
