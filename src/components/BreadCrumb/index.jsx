import React from 'react';
import './breadcrumb.css';
import {Link, useLocation} from 'react-router-dom';
import {Row, Container} from 'react-bootstrap';
import {Clouds2} from '../../components/Clouds'

export function BreadCrumb({title}) {
    const location = useLocation();

    return (
        <Container fluid className="bread-1-wrapper" style={{width: "100%", padding: "0", background: "#f7f8fe"}}>        
            <Row className="slake-image-with-clouds no-background cloud-wrap" style={{margin: '0'}}>   
                <Clouds2 />
                <Container style={{width: "70%", maxWidth: "1400px"}}>
                    <p className="bread-title">{title}</p>
                    <Row className="b-title-wrapper">
                        <Link className="b-link" to="/">Home</Link>
                        <p className="space">-</p>
                        <p className="b-link current">{location.pathname.replace("/", "").replace("-", " ")}</p>
                    </Row>
                </Container>
                    <img src="/slake-breatcrumb-img2.png" className="b-img-1" alt="breadcrumb-logo"/>       
                    <img src="/slake-breatcrumb-img1.png" className="b-img-2" alt="breadcrumb-logo-2"/>             
            </Row>
        </Container>
    )
}
