import React, { useEffect, useState } from 'react';
import {Carousel, Row, Col, Container} from 'react-bootstrap';
import './slider.css';

export default function Slider() {
    const breakPoint = 788;
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(
        function setupListener() {
            function handleWidth() {
                setWidth(window.innerWidth)
            }
            window.addEventListener('resize', handleWidth)

            return function cleanup() {
                window.removeEventListener('resize', handleWidth)
            }
    }, [])
    return (
        <Carousel >
            <Carousel.Item interval={30000}>
                <img
                height='800px'
                className="d-block w-100 slider-img"
                src="/home-2-slider-2.png"
                alt="First slide"
                />
               <Carousel.Caption className='slider-svg-wrapper' style={{alignItems: 'start'}}>
                <Container fluid style={{width: '100%', maxWidth: '1440px', maxHeight: '100%'}}>
                        <Row style={{justifyContent: 'center', alignItems: 'center', height: '800px', width: '100%'}}>
                            {width > breakPoint ? 
                                <Col sm={5} md={4} className="slider-svg">
                                    <img
                                        style={{height: "auto", width: 'auto'}}
                                        className="d-block w-100 "
                                        src="/homepage-img-5.png"
                                        alt="First slide"
                                    />
                                </Col>
                                :
                                <></>    
                            }
                            <Col sm={8} md={8} style={{textAlign: 'end'}}>
                                <h3 id='slider-title' style={{fontSize: '38px',  paddingBottom: '15px', color: 'white'}} >Web Design App Development</h3>
                                <p  style={{color: "white"}}>For individuals and SME businesses. Fast, Secure & Always Online - Free SSL setup and configuration.</p>
                            </Col>
                        </Row>     
                    </Container>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                height='800px'
                className="d-block w-100 slider-img"
                src="/home-2-slider-2.png"
                alt="First slide"
                />
               <Carousel.Caption className='slider-svg-wrapper-2' style={{alignItems: 'start'}}>
                <Container fluid style={{width: '100%', maxWidth: '1440px', maxHeight: '100%'}}>
                        <Row style={{justifyContent: 'center', alignItems: 'center', height: '800px', width: '100%'}}>
                            <Col sm={12} md={8} style={{textAlign: 'start'}} >
                                <h3 id='slider-title' style={{fontSize: '38px', paddingBottom: '15px'}}>Managed Hosting Plans</h3>
                                <p style={{maxWidth: '500px', color: "white"}}>For individuals and SME businesses. Fast, Secure & Always Online - Free SSL setup and configuration included.</p>
                            </Col>
                            {width > breakPoint ? 
                                <Col className="slider-svg" sm={5} md={4}>
                                    <img
                                        style={{height: "auto", width: 'auto'}}
                                        className="d-block w-100"
                                        src="/header-img-2-1.png"
                                        alt="First slide"
                                    />
                                </Col>
                                :
                                <></>
                            }
                        </Row>     
                    </Container>
               </Carousel.Caption>
            </Carousel.Item>
           
        </Carousel>
    )
}
