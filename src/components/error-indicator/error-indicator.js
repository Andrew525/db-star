import React from 'react';
import './error-indicator.css';
import icon from './death-planet.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error-icon"/>
            <span className="boom">
                BOOM!
            </span>
            <span>
                something has gone terrible wrong
            </span>
            <span>
                (but we already send droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;