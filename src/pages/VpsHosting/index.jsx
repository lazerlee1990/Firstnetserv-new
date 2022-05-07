import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function VpsHosting() {

    const [opacity, setOpac] = useState("0") 

    const handleChange = () => {
        setOpac("1")
    }

    useEffect(() => {
       handleChange();
    }, [])

    return (
        <Container className="vps-wrapper" style={{opacity: opacity, maxWidth: "100%", padding: "0"}}>
            <Container fluid style={{maxWidth: "100%", padding: "0"}}>
                <Container fluid style={{maxWidth: "70%"}}>
                    <div className="top-para-wrapper">
                        <p>Shared Hosting</p>
                    </div>
                </Container> 
            </Container>
        </Container>
    )
}
