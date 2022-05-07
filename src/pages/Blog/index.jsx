import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { ArrowRight, Person, Calendar } from '../../components/Icons';
import "./blog.css";






const Car = ({image, link, title, date, author}) => {
    const [hover, setHover] = useState(false);
    return (
        <Card className='blog-card'>
            <Card.Body style={{padding: '0'}}>
                <Link to={link}>
                    <Card.Img  src={image}/>
                </Link>
                <Link className='go-link' to={link}>
                    <Card.Title className='go-title'>
                        {title}
                    </Card.Title>
                </Link>
                <Row>
                    <Col>
                        <Link to={link}>
                            <Card.Text>
                               <Person style={{transform: 'translatey(-3px)'}}/> {author}
                            </Card.Text>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={link}>
                            <Card.Text>
                              <Calendar style={{transform: 'translatey(-3px)'}}/>  {date}
                            </Card.Text>
                        </Link>
                    </Col>

                </Row>
              
            </Card.Body>
            <Card.Footer>
                <Link className='go-link' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} to={link}>
                    Continue Reading <ArrowRight style={{transitionDuration: '300ms', transform: `${hover ? 'translatex(5px)' : 'translatex(0px)'}`}}/>
                </Link>
            </Card.Footer> 
        </Card>
    )
}


const Build = () => {
    return (
        <Row className='blog-wrapper justify-content-center'>
            <Col sm={8} md={6} lg={4}className='c-block text-center'>
                <Car author='BY: ADMIN' date='5TH JUNE 2020' title='http vs http2 and upcoming http3' image="/blog1-1.jpg" link='/'/>
            </Col >
            <Col sm={8}  md={6} lg={4} className='c-block text-center'>
                <Car author='BY: ADMIN' date='7TH JUNE 2019' title='Creative Aesthetics Design' image="/blog_img1.jpg" link='/'/>
            </Col>
            <Col sm={8}  md={6} lg={4} className='c-block text-center'>
                <Car author='BY: ADMIN' date='6TH JUNE 2019' title='Influential Tech People' image="/blog2-1.jpg" link='/'/>
            </Col>
        </Row>
    )
}


export default function Blog() {
    const [opacity, setOpacity] = useState("0");

    const handleChange = () => {
        setOpacity("1");
    };

    useEffect(() => {
        handleChange();
    }, []);

    return (
        <Container className="web-wrapper" style={{opacity: opacity, maxWidth: "100%", padding: "0"}}>
            <BreadCrumb title="Latest Blog"/>
            <Container fluid style={{width: '70%', maxWidth: "1440px"}}>
                <Build />
            </Container>
        </Container>
    )
}
