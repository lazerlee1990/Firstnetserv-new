import React from 'react'
import './banner.css';
import { Container, Row, Col} from 'react-bootstrap';
import {Clouds6} from '../Clouds'


export function Banner1({text, button}) {
    return (
        <Container fluid className="banner-wrapper" style={{maxWidth: "100%"}}>
            <div className="slake-image-with-clouds no-background">
                <Container fluid className="banner-block" style={{width: "70%", maxWidth: "1440px"}}>
                    <div className="banner-text">
                        <h1 data-testid='banner-text' >{text}</h1>
                    </div>
                    <Clouds6 />
                    <div data-testid='button' className="button-container">
                        {button}
                    </div>
                </Container>
            </div>
        </Container>
    )
}

export function Banner2({text, button}) {
    return (
        <Container fluid className="banner2-wrapper" style={{maxWidth: "100%"}}>
                <Container fluid className="banner2-block" style={{width: "70%", maxWidth: "1440px"}}>
                    <Row>
                        <Col data-testid="banner-text" className="banner2-text">                      
                            <h3>{text}</h3>
                        </Col>      
                            <Col data-testid='button' className="button2-container">
                                {button}
                            </Col>
                    </Row>     
                </Container>
        </Container>
    )
}
