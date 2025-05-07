import React from 'react';
import './index.css';

export default function HeaderRow() { 
    return(
        <header className="header-row">
            <ul className="links">
                <li className="dropdown">Products</li>
                <li className="dropdown">Solutions</li>
                <li>Plans</li>
            </ul>
            <object width="150" data="images/DOEM.svg" type="image/svg+xml">
                <img src="images/DOEM.svg" />
            </object>
            <div className="header-buttons">
                <a className="icon">
                    <i className="fa fa-bars"></i>
                </a>
                <ul>
                    <li>Log in</li>
                </ul>
                <button className="button-primary">Start free</button>
            </div>
        </header>
    )
};
