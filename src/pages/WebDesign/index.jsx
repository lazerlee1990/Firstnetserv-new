import React, { useState, useEffect } from 'react'
import { SlidingCards, SlidingCard } from '../../components/SlidingCards'
import { BreadCrumb } from '../../components/BreadCrumb';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import watchScroll from '../../components/WatchScroll';
import './webdesign.css';

export default function WebDesign() {
    const history = useHistory();
    // function handleClick() {
    //     history.push('/contact')
    // }
    
    
    const [deg, setDeg] = useState(0)
    
    const SetDegrees = async () => {
        const axis = await watchScroll()
        setDeg(axis.y);
    }
    useEffect(() => {
        window.addEventListener('scroll', SetDegrees)
        return () => {
            window.removeEventListener('scroll', SetDegrees);
        }
    }, [])

    return (
        <Container className="web-wrapper" style={{ maxWidth: "100%", padding: "0" }}>
            <BreadCrumb title="Website Design" />
            <Container fluid style={{ maxWidth: "100%", padding: "0" }}>
                <Container fluid style={{ width: "70%", maxWidth: "1440px" }}>

                    <div className="top-para-wrapper">
                        <p>The majority of our clients are funded start-ups or established businesses. They tend to recognise that their website and by extension, their web design team, plays a pivotal part in marketing in this 20th century digital world. Businesses typically engage with us because we provide forward-thinking research-driven plans backed by a range of design, development, digital marketing skills. We deliver value by creating super-fast loading websites. </p>
                    </div>
                </Container>
            </Container>
            <Container fluid style={{ width: "70%", maxWidth: "1440px" }}>
                <Row style={{ flexDirection: "column", justifyContent: "center", textAlign: "center", paddingTop: "110px", paddingBottom: "50px" }}>
                    <h3 className="web-design-heading">Web Portfolio</h3>
                    <h5 className="web-design-para">Take a peek at our previous work</h5>
                </Row>
                <SlidingCards deg={deg} />
                <Row style={{ flexDirection: "column", justifyContent: "center", textAlign: "center", paddingTop: "110px", paddingBottom: "50px" }}>
                    <h3 className="web-design-heading">DESIGN </h3>
                </Row>
                <Row>
                    <Col>
                        <SlidingCard
                            style={{ maxHeight: "300px", padding: "0 150px" }}
                            image="/kdr.png"
                            link="/video"
                            text="Video"
                            linkText={"Video"}
                        />
                    </Col>
                    <Col>
                        <SlidingCard
                            style={{ maxHeight: "300px", padding: "0 150px" }}
                            image="/grathics.png"
                            link="/football"
                            text="FLYER"
                            linkText={"Grathics"}
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}
