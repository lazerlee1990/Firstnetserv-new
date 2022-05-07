import React from 'react';
import {Link} from 'react-router-dom';
import "./fancybuttons.css";


export const PurpleButton = ({text, link, style, lbt}) => {
    return (
        <div className="sl-button-wrapper">
            <div className="purple-button purple-button-1" style={style}>
                <Link id='purple-button-link' to={link}>
                    {text}
                </Link>
            </div>
        </div>
    )
}

export const CardButton = ({text, link}) => {
    return (
        <div data-testid='button' className="card-button" >
            <Link to={link}>
                {text}
            </Link>
        </div>
)
}
