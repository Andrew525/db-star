import React from 'react';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
            <button className="toggleService btn btn-primary btn-sm"
                    onClick={ onServiceChange }>
                Service Change
            </button>
        </div>
    );
};

export default Header;