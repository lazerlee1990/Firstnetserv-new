import React from 'react'
import { Card, Container, Col } from 'react-bootstrap';
import './bigCard.css'
export default function BigCard({title, image, price, space, parked, sub, databases, email, ram, cla, button}) {
    return (
        <Col xs={6} lg={6} className="big-card-wrapper">
            <Card className={"text-center p-3 blue-border bg-card "+cla}>
                <Card.Body>
                    {cla ? 
                        <span data-testid='card-span' className='table-highlight'>
                            Popular
                        </span> : null 
                    }
                    <Card.Title>
                        <b data-testid='b-title' className="bg-card-title">{title}</b>
                    </Card.Title>
                    <Container className="image-wrapper">
                        <Card.Img className="card-image" src={image} />
                    </Container>
                    <Card.Title className='big-card-title'>
                        <sup>
                            <span className='currency'>
                                £
                            </span>
                        </sup>
                        <span className='price-text'>{price}</span> 
                        <span className='subscription'>
                            /Monthly
                        </span> 
                    </Card.Title>
                    <Card.Text><span className="bg-card-text"><b>{space}</b> Space</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>Free</b> cPanel Interface</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>Unlimited</b> Bandwidth</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>{parked}</b> Parked Domains</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>{sub}</b> Sub Domains</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>{databases}</b> Databases</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>{email}</b> Email Accounts</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>{ram}</b> Dedicated Ram</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>100MB</b> Shared Upload/Download</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>Free</b> SSL Certificates</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>Shared</b> IP</span></Card.Text>
                    <Card.Text><span className="bg-card-text"><b>Unlimited</b> Support</span></Card.Text>
                    {button}
                </Card.Body>
            </Card>
        </Col>
    )
}
