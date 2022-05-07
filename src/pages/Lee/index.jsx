import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BreadCrumb } from '../../components/BreadCrumb';
import { PortfolioLeft, PortfolioRight } from '../../components/Portfolio';

export default function Lee() {
    return (
        <Container fluid style={{maxWidth: "100%", padding: "0"}}>
            <BreadCrumb title='About Me' text='Lee'/>
            <Container  fluid style={{width: "70%", maxWidth: '1440px', zIndex: '100'}}>
                <Row className='portfolio-wrapper justify-content-start'>
                    <PortfolioLeft
                        name='Liam Barnett'
                        image='/liam-oth9yftr5cdd3ne5vawbaazeqwy3prn2bj43bf389k.jpg'
                        projects={[
                            [
                                "Falling Leaf ",
                                "– 2013",
                                "Volunteered to pack groceries bags to help raise money for Joining Jack Charity."
                            ],
                            [
                                "Kinetic Promotions ",
                                "– 2007",
                                "Web Designer for a Reunion Event"
                            ],
                            [
                                "Lazer UK",
                                "– 2006",
                                "Webmaster and Resident DJ"
                            ]

                        ]}
                        typeWriterNames={[
                            "Administrator", 
                            "Webmaster",
                            "Designer",
                            "Animator"
                        ]}

                        skills={[
                            ["HTML", 100],
                            ["CSS", 100],
                            ['Javascript', 90],
                            ["React", 40],
                            ["Graphics Design", 100],
                            ["Video Design", 100],
                            ["SEO", 90]
                        ]}
                    />
                   <PortfolioRight
                        aboutMe='i’m a designer who codes. I’ve worked in-house, and remotely on projects for SMEs, Startups, and Charities. I care deeply about creating world-class, useful, and beautiful products that help people and make a difference. I can be as involved in your project as you need me to be; from the seed of the idea to sketches, creative direction, design, system design, and development. I’ve been building websites for 14 years, I have worked with clients in Germany, Spain, and the UK. Being dyslexic, I have had to learn to continuously adapt and enjoy thinking outside of the box.'
                        projects={[
                            [
                                "Co-Founder of Firstnetserv",
                                "2020",
                                "Hosting, design and marketing services."
                            ],
                            [
                                "Freelance Web Designer",
                                "2012 – 2020",
                                "Web Designer in the Northwest of England. I create websites using the latest web technology. I design and code allowing me to focus in on user experience, Being naturally creative assists in this commitment."
                            ],
                            [
                                "Web Designer for Hampson Group Ltd ( Individual Auto Design )",
                                "2019 – 2020",
                                "Moved them from outdated Magento CMS to a new WordPress website, recruited a friend to customise the e-commercial design tool that needed to be implemented for the checkout process. I managed the website and marketing materials, advertising, Flyers, Flags, Mail campaigns, and social media. I also problem-solve IT issues, I upgraded the office computers with SSD’s to breathe a bit of life into them as they were showing signs of dying by crashing often and being really slow which affected staff productivity."
                            ],
                            [
                                "Web Designer for Humeka Systems GmbH ( Streamhostlink )",
                                "2015 – 2018",
                                "The web design of a corporate & e-commercial shop that ties in an all-in-one client management, billing and support system for the hosting startup- after setting up the company infrastructure and marketing material my role evolved into creating and managing websites for new hosting clients, during my time I project managed research and development of a tool for another startup called Flow-cite the tool designed to make research and citations for academic papers easier while stopping user error with formating mistakes that could get you a fail. "
                            ],
                            [
                                "Web Designer for Brand a Trend GmbH ( Summics )",
                                "2014 – 2015",
                                "Creation of a corporate & case study websites and maintenance for a text sentiment analytics tech start-up. Crunch base article"
                            ],
                            [
                                "Canvasser @ Pure People Ltd",
                                "2013 – 2014",
                                "Lead generation and gather evidence for eligibility for a government-funded initiative to replace old boilers with newer efficient boilers."
                            ]

                           
                        ]}
                   />
                </Row>
            </Container>
        </Container>
    )
}
