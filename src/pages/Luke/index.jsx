import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BreadCrumb } from '../../components/BreadCrumb';
import './luke.css';
import { PortfolioLeft, PortfolioRight } from '../../components/Portfolio';

export default function Luke() {
    return (
        <Container fluid style={{maxWidth: "100%", padding: "0"}}>
            <BreadCrumb title='About Me' text='Luke'/>
            <Container  fluid style={{width: "70%", maxWidth: '1440px', zIndex: '100'}}>
                <Row className='portfolio-wrapper justify-content-start'>
                    <PortfolioLeft
                        name='Luke Falla'
                        image='/bob-otid97mnrb35umcvlcg6psiqm5pq996si04s5je4yg.jpg'
                        projects={[
                            [
                                "Firstnetserv Conversion",
                                "Current",
                                "Migrating old wordpress website to a ReactJS frontend."
                            ],
                            [
                                "Local Football Pitch",
                                "2008",
                                "I was part of the team which produced the plan to wigan council to fund an all weather football pitch in platbridge so that the local team had a place to pratice."
                            ],
                            [
                                "Co-Founder of Firstnetserv",
                                "2020 –",
                                "CO Founded Firstnetserv."
                            ]
                        ]}
                        typeWriterNames={[
                            "Developer",
                            "Engineer",
                            "Administrator",
                            "Webmaster",
                            "Designer",
                            "Animator",
                            "Dev Ops"
                        ]}
                        skills={[
                            ["Python", 90],
                            ["HTML/CSS", 80],
                            ['Lamp Stack', 100],
                            ["React", 70],
                            ["ES6/Javascript", 70],
                            ["NodeJs", 50],
                            ["Rest", 100]
                        ]}
                    />
                   <PortfolioRight
                        aboutMe='I’m a web developer. I spend my whole day, practically every day, experimenting. I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of the latest changes in technology. check out my Github page for some examples.'
                        projects={[
                            [
                                "Co-Founder, Web Developer/Designer & Server Administrator of Firstnetserv LTD",
                                "2020 – Current",
                                "Co-founded Firstnetserv with a friend, Helped build website whilst maintaining it on debian server. Also configured Webserver and Database."
                            ],
                            [
                                "Web Developer for Hampson Group Ltd ( Individual Auto Design )",
                                "2019 – 2020",
                                "Created a seat configurator for the checkout, Moved them from a shared server to a dedicated server- which was cheaper and offered more value for money.  I setup and configured the server and managed it, during my time I created marketing script that used Google People and Places API to find the company target audiences websites which then crawled to find their email, then automated emails out about our new PPE screens for taxis."
                            ],
                            [
                                ""
                            ]
                        ]}
                   />
                </Row>
            </Container>
        </Container>
    )
}
