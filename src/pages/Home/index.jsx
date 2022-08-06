import React, { useEffect, useState } from 'react'
import './home.css';
import BigCard from '../../components/BigCard'
import SmallCard from '../../components/SmallCard'
import Slider from '../../components/Slider'
import { Banner1 } from '../../components/Banner'
import { PurpleButton } from '../../components/FancyButtons';
import { Clouds4 } from '../../components/Clouds'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { MDBAnimation } from "mdbreact";
import watchScroll from '../../components/WatchScroll';



export default function Home() {
    const [deg, setDeg] = useState(0)

    const SetDegrees = async() => {
        const axis = await watchScroll()
        setDeg(axis.y / 3);
    }
    useEffect(() => {
        window.addEventListener('scroll', SetDegrees)
        return () => {
            window.removeEventListener('scroll', SetDegrees);
        }
    }, [])
    return(
        <Container fluid className="animated home-wrapper" style={{maxWidth: "100%", padding: "0"}}>
        <Slider/>
        <Container className='wavy-div' fluid style={{maxWidth: "100%", padding: "0", zIndex: '100'}}>
            <Container fluid style={{marginTop: '-140px', padding: '0',  height: '500px'}}>
                <svg className='v-svg' viewBox="0 0 500 300" preserveAspectRatio="none" style={{height: "100%", width: "100%",zIndex: "1000"}}>
                    <defs>
                        <filter id="f3" x="0" y="0" width="100%" height="100%">
                            <feOffset result="offOut" in="SourceAlpha" dx="1" dy="1" />
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                        </filter>
                    </defs>
                    <path d="M-3.67,62.66 C118.22,114.95 240.12,25.16 504.22,83.38 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "white", zIndex: "30", position: "absolute"} } filter="url(#f3)">
                    </path>
                </svg>
            </Container>
            <div className="mid-section-wrapper br-up">
                <Container style={{width: "70%", maxWidth:"1440px",  padding: "0", paddingTop: "180px"}}>
                    <MDBAnimation  type='fadeInRight'  reveal>
                        <Row className="mid-heading home-header">
                                <h1 id='page-title'>Why Choose <span style={{color: '#3464e0'}}>Firstnetserv?</span></h1>
                        </Row>
                        <Row className="justify-content-center" >
                            <img style={{transform: `rotate(${deg}deg)`}} className="logo-svg" src="/icon.fw_.svg" alt="logo-mini" />
                        </Row>
                    </MDBAnimation>
                        <Row className="accessories-section-wrapper justify-content-center align-items-center text-align-center">
                            <MDBAnimation className='small-card-wrapper' type='bounceInLeft' delay='1s'  reveal>
                                <SmallCard 
                                    image={"/json/icons/423-key-outline-edited.json"} 
                                    heading={"Free SSL Certificates"} 
                                    text={"Free SSL certificates & installation powered by Lets Encrypt."}
                                />
                            </MDBAnimation>
                            <MDBAnimation className='small-card-wrapper' type='bounceInLeft' delay='0.5s'  reveal>
                                <SmallCard 
                                    image={"/json/icons/109-box-package-close-outline-edited.json"} 
                                    heading={"Free C-panel Interface"} 
                                    text={"Free C-panel interface with all shared server packages."}
                                />
                            </MDBAnimation>
                            <MDBAnimation className='small-card-wrapper' type='bounceInLeft' delay='0s' reveal>
                                <SmallCard 
                                    image={"/json/icons/220-arrow-9-edited.json"} 
                                    heading={"Super Flexible"} 
                                    text={"All of our packages have a wide variety of custom options."}
                                />
                            </MDBAnimation> 
                    </Row>
                    <Row className="image-slider-wrapper justify-content-center align-items-center p-down"> 
                            <Col className="sl-image-wrapper">
                                <MDBAnimation type='fadeInLeft' delay='.3s'  reveal>
                                <div className="sl-image-container">
                                    <div className="slake-image-with-clouds">                                                               
                                        <Clouds4 />
                                        <img src="/feature-2-21.png" alt="feature" className="top-img" />
                                    </div>
                                </div>
                                </MDBAnimation>
                            </Col>
                            <Col lg={5} className="sl-wrapper">
                                <MDBAnimation className='small-card-wrapper' type='fadeInRight' delay='.3s'  reveal>
                                <div className="sl-text-wrapper">
                                    <div className="sl-Title p-2">
                                        <h2 id='page-title'><span style={{color: '#3464e0'}}>Responsive</span> Web Design</h2>
                                        <p style={{color: '#3464e0'}}>#DesignVision</p>
                                    </div>
                                    <div className="sl-text-wrapper">
                                        <div className="sl-Title p-2">
                                            <h4>Need a professional looking, responsive website ?</h4>
                                            <p>Don’t worry our expert team will create a perfect product tailored to your specifications.</p>
                                        </div>
                                    </div>
                                    <PurpleButton text="Start Design" link="web-design"/>
                                </div>
                                </MDBAnimation>
                            </Col> 
                    </Row> 
                    
                    <MDBAnimation type='fadeIn' delay='.6s'  reveal>
                        <Row className="justify-content-center align-items-center string">
                            <div className="stringtheory" alt="string"/>
                        </Row> 
                    </MDBAnimation>
                    <Row className="image-slider-wrapper justify-content-center align-items-center">
                        <Col lg={5} className="sl-wrapper">
                            <MDBAnimation className='small-card-wrapper' type='fadeInLeft' delay='.3s'  reveal>
                            <div className="sl-text-wrapper">
                                <div className="sl-Title p-2 fadein">
                                    <h2 id='page-title'>Host with <span style={{color: '#3464e0'}}>Firstnetserv</span></h2>
                                    <p style={{color: '#3464e0'}}>#SupremeHosting</p>
                                </div>
                                <div className="sl-text-wrapper">
                                    <div className="sl-Title p-2">
                                        <h4>Speedy support</h4>
                                        <p>We have you covered with super fast, customer focused UK hosting services.</p>
                                    </div>
                                </div>
                                <PurpleButton text="Select Package" link="shared-hosting"/>
                            </div>
                            </MDBAnimation>
                        </Col>
                        <Col xs={4} className="sl-image-wrapper">
                            <MDBAnimation className='small-card-wrapper' type='fadeInRight' delay='.3s'  reveal>
                                <div className="sl-image-container">
                                    <div className="slake-image-with-clouds">                                  
                                        <Clouds4 />
                                        <img src="/feature-1-21.png" alt="features" className="top-img flip" />
                                    </div>
                                </div>
                            </MDBAnimation>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <Banner1 text="Plan your brand and online identity with FirstNetServ" button={<Button onClick={() => window.scroll({top: 1300, behavior: 'smooth'})}>Get Started Now</Button>}/>  
        </Container>      
    </Container>
    ) 
}
