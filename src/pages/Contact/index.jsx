import React from 'react';
import { Container, Row, Col, SafeAnchor } from 'react-bootstrap';
import { BreadCrumb } from '../../components/BreadCrumb'; 
import './contact.css'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 53.5394503, lng: -2.635746 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 53.5394503, lng: -2.635746 }} />}
  </GoogleMap>
))

const BlueCircle = ({logo}) => {
    return (
        <div className='blueCircle'>
            {logo}
        </div>
    )
}

const IconRow = () => {
    return (
        <Row className='justify-content-center align-items-center icon-wrapper'>
            <Col className='blue-circle-wrapper'>
                <BlueCircle logo={<lord-icon style={{width: '150px', height: '150px'}} animation="auto" speed=".7"  autoplay src='/json/icons/424-question-bubble-outline-edited.json'></lord-icon>} />
                <h3>Phone</h3>
                <a href='tel:012345 678 910'>
                    <p>012345 678 910</p>
                </a>
                
            </Col>
            <Col className='blue-circle-wrapper'>
                <BlueCircle logo={<lord-icon style={{width: '150px', height: '150px'}} animation="auto" speed=".7"  autoplay src='/json/icons/488-bicycle-outline-edited.json'></lord-icon>} />
                <h3>Address</h3>
                <SafeAnchor onClick={() => window.scroll({top: 600, behavior: 'smooth'})}>
                    <p>Wigan Investment centre</p>
                </SafeAnchor>
                
            </Col>
            <Col className='blue-circle-wrapper'>
                <BlueCircle logo={<lord-icon style={{width: '150px', height: '150px'}} animation="auto" speed=".7"  autoplay src='/json/icons/177-envelope-mail-send-outline-edited.json'></lord-icon>} />
                <h3>Email</h3>
                <a href='mailto:admin@firstnetserv.co.uk'>
                    <p>admin@firstnetserv.co.uk</p>
                </a>
                
            </Col>
        </Row>
    )
}

export default function Contact() {
    return (
        <Container fluid style={{width: '100%', padding: '0'}}>
            <BreadCrumb title='Contact Us'/>
            <Container fluid style={{width: '70%', maxWidth: '1440px', height: '100%'}}>
                <IconRow />
            </Container>
                <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3JPdHZXw8tsq3KJXtWwZ3VxMPHfnKSjI&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
        </Container>
    )
}
