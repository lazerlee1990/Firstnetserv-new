import React from 'react'
import { Card, Col } from 'react-bootstrap';
import "./smallCard.css";

export default function SmallCard({image, heading, text, style}) {
    return (

        <Col className='small-card-wrapper'>
            <Card className="text-center p-4 small-card"  style={style}>
                <Card.Body>                 
                    <lord-icon style={{width: '150px', height: '150px'}} animation="auto" speed=".7"  autoplay src={image}></lord-icon>              
                    <Card.Title className="sm-card-title">
                        {heading}
                    </Card.Title>
                    <Card.Text className="sm1-card-text">
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        
        
    )
}
