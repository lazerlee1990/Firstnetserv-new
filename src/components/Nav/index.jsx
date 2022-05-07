import React from 'react'
import { Link, useHistory } from "react-router-dom";
import {Nav, NavDropdown, Container, Row, Col} from 'react-bootstrap';
import HamBurger from '../Hamburger'
import './nav.css';



export default function Navigation(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const history = useHistory();

    const breakPoint = 1369;
    React.useEffect(
        function setupListener() {
            function handleWidth() {
                setWidth(window.innerWidth)
            }
            window.addEventListener('resize', handleWidth)

            return function cleanup() {
                window.removeEventListener('resize', handleWidth)
            }
    }, [])

    const handleSelect = (e) => {
        history.push(e);
    }
    return (
        <Container fluid style={{padding: "0"}} className="nav-wrapper">
            <Container fluid style={{width: "70%", height:"100%", maxWidth: "1440px", paddingRight: '0'}}>
                    <Row style={{height: "100%", width: '100%'}}>
         
                        <Col style={{opacity: `${width > breakPoint ? '1' : '0'}`}} sm={3} xs={3} className="nav-logo-wrapper">
                            <img onClick={() => handleSelect('/')}  className="main-logo" src="/mainlogo.jpg" alt="main-logo"/>
                        </Col>

                        <Col className="link-wrapper">
                            <Nav className="justify-content-end align-items-center" activeKey="1" onSelect={handleSelect}>
                                <Nav.Item >
                                    <Link  className="nav-link" to='/' >HOME</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to='/web-design' >WEB DESIGN</Link>
                                </Nav.Item>
                                <NavDropdown title="ABOUT US" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="/luke">Luke Falla</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="/liam">Liam Barnett</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item >
                                    <Link className="nav-link" to='/contact' >CONTACT</Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>  
                    <div style={{transform: 'translatey(-90px)', transitionDuration: '300ms', opacity: `${width < breakPoint ? '1' : '0'}`}} >
                        <HamBurger />
                    </div>
                    
                 
            </Container>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%", transform: "translatey(-5px)"}}>
                <defs>
                    <filter id="f3" x="0" y="0" width="100%" height="100%">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                
                <path d="M-21.72,23.19 C151.52,101.14 293.16,-29.11 505.36,80.42 L500.84,0.50 L-1.97,-0.48 Z" style={{stroke: "none", fill: "white", zIndex: "30", transform: "translatey(-22px)"} } filter="url(#f3)">
                </path>
            </svg>
        </Container>
     
    )
}
