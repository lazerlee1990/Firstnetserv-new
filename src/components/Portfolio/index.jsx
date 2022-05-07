import React from 'react'
import { Col, ProgressBar } from 'react-bootstrap';
import './portfolio.css';
import Typewriter from 'typewriter-effect';

const Skill = ({name, percent}) => {
    return (
        <ProgressBar label={name} animated now={percent} style={{backgroundColor: '#eee', color: "white", height:'30px'}} />
    )
}

const SmallBlock = ({job, date, text}) => {
    return (
        <>
            <p className='po-text'><strong>{job}</strong></p>
            <h6>{date}</h6>
            <p className='po-text'>{text}</p>
        </>
    )
}


export function PortfolioLeft({name, image, slidingText, projects, typeWriterNames, skills}) {
    return (
        <Col  className='block-wrapper l-wrapper' >
            <h2 className='p-text'>{name}</h2>
            <div className='divider'/>
            <div className='' style={{display: "flex", justifyContent: 'center'}}>
                <img className='pf-logo-wrapper' src={image} alt=''/>
            </div>
            <div className='type-wrapper' >
                <Typewriter
                    options={{
                        deleteSpeed: 130,
                        strings: typeWriterNames,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <h3 className='p-text'>Skills</h3>
            
            {skills ? skills.map((i, l) => (
                <Skill key={l} name={i[0]} percent={i[1]} />
            )) : null}
            
            <div className='divider'/>
            <h3 className='p-text'>Projects</h3>
            <div className='divider'/>
            {projects ? projects.map((i, l) => (
                <SmallBlock key={l} job={projects[l][0]} date={projects[l][1]} text={projects[l][2]} /> 
            )) : null}
        </Col>
    )
}



export function PortfolioRight({aboutMe, slidingText, projects}) {
    return (
        <Col className='l-block-wrapper' lg={9} md={6}>
            <h2 className='p-text'>About Me</h2>
            <div className='divider'/>
            <p>{aboutMe}</p>
            <h2 className='p-text'>Work Experience</h2>
            <div className='divider'/>
            {projects ? projects.map((i, l) => (
                 <SmallBlock key={l} job={projects[l][0]} date={projects[l][1]} text={projects[l][2]} />
            )) : null}
            
    </Col>
    )
}
