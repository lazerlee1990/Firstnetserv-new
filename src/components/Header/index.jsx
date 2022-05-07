import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { Headset } from '../../components/Icons'
import './header.css';

const Rlink = ({text, url, lit}) => {
  
    return (
    lit ? <li><a href={"tel:"+url}>{text}</a></li> : <li><Link to={url}>{text}</Link></li>
    )
}


export default function Header() {
    return (
        <header className="header-top-area">
            <Container fluid className="headd" style={{width: "70%", maxWidth: "1440px", height: '100%'}}>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col className='top-left'>
                        <div className="phone-wrapper">
                            <Headset style={{color: "white", margin: "5px"}}/>
                            <ul style={{padding: "0"}}>
                                <Rlink text={"07305220193"} lit={true} url={"073 0522 0193"}/>   
                            </ul>
                        </div>
                    </Col>
                    <Col className="top-right"  style={{paddingRight: "25px"}}>
                        <div className="menu-top-container">
                            <ul>
                                <Rlink text={"Support"} lit={false} url="/support" />
                                <p style={{color: 'white', cursor: 'default'}}>|</p>
                                <Rlink text={"Client Info"} lit={false} url="/client-info" />
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </header>
    )
}
