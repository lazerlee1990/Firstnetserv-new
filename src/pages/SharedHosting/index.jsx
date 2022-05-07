import React from 'react'
import './sharedhosting.css';
import { Button, Container, Row} from 'react-bootstrap'
import { BreadCrumb } from '../../components/BreadCrumb';
import SmallCard from '../../components/SmallCard';
import PriceTable from '../../components/PriceTable';
import { Banner1 } from '../../components/Banner';
export default function SharedHosting() {
    const sty = {
        boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"
    }
    return (
        <Container className="shared-wrapper" style={{maxWidth: "100%", padding: "0"}}>
            <BreadCrumb title='Shared Hosting'/>
            <Container fluid style={{width: "70%", maxWidth: '1440px'}}>
                <Row id='heading-container'>
                    <h1 id='page-title' className='small-card-block-heading'>Shared Hosting</h1>
                    <img src='/icon.fw_.svg' alt='logo' />
                </Row>
                <Row id="card-box" className='justify-content-center align-items-center'>
                        <SmallCard
                            style={sty}
                            image='/json/icons/45-clock-time-outline-edited.json'
                            heading='99.8% Uptime' 
                            text='We guarantee  99.8% uptime no matter what, or your money back.'
                        />
    
                        <SmallCard 
                            style={sty}
                            image='/json/icons/423-key-outline-edited.json'
                            heading='Free SSL Certificates' 
                            text='Free SSL certificates & installation powered by Lets Encrypt.'
                        />
            
             
                        <SmallCard 
                            style={sty}
                            image='/json/icons/220-arrow-9-edited.json'
                            heading='Super Flexible' 
                            text='All of our packages have a wide variety of custom options.'
                        />
                </Row>
                <Row id='heading-container'>
                    <h1 id='page-title'>Shared Hosting Plans</h1>
                    <img src='/icon.fw_.svg' alt='logo'/>
                </Row>
                <Row>
                    <PriceTable 
                        packages={[
                            [
                                "Personal", 
                                "£4.99"
                            ],
                            [
                                "Business", 
                                "£9.99"
                            ],
                            [
                                "Enterprise",
                                "£14.99"
                            ]
                            
                            
                            
                        ]}
                        options={
                            [
                                [
                                    "Disk Space",
                                    "70 GB",
                                    "150 GB",
                                    "250 GB"
                                ],
                                [
                                    "cPanel Access",
                                    "Free",
                                    "Free",
                                    "Free"
                                ],
                                [
                                    "Bandwidth",
                                    "Unlimited",
                                    "Unlimited",
                                    "Unlimited"
                                ],
                                [
                                    "RAM",
                                    "1.2 GB",
                                    "2.4 GB",
                                    "4 GB"
                                ],
                                [
                                    "Email Accounts",
                                    "3",
                                    "5",
                                    "Unlimited"
                                ],
                                [
                                    "Databases",
                                    "5",
                                    "10",
                                    "Unlimited"
                                ],
                                [
                                    "Parked Domains",
                                    "5",
                                    "Unlimited",
                                    "Unlimited"
                                ],
                                [
                                    "Sub Domains",
                                    "25",
                                    "Unlimited",
                                    "Unlimited"
                                ],
                                [
                                    "Setup Fee",
                                    "Free Setup",
                                    "Free Setup",
                                    "Free Setup"
                                ],
                                [
                                    "Internet Speed",
                                    "100MB Upload/Download Shared",
                                    "100MB Upload/Download Shared",
                                    "100MB Upload/Download Shared"
                                ],
                                [
                                    "Customer Support",
                                    "9:00AM/9:00PM  (Mon/Fri)",
                                    "9:00AM/9:00PM  (Mon/Fri)",
                                    "9:00AM/9:00PM  (Mon/Fri)"
                                ]

                            ]
                           
                        }
                    />
                </Row>
            </Container>
            <Banner1 text='Plan your brand and online identity with FirstNetServ' button={<Button>Get Started</Button>}/>
        </Container>
    )
}