import React from 'react';
import './doem/index.css';

export default function HeaderRow() { 
    return(
        <header className="header-row">
            <ul className="links">
                <li className="dropdown">Products</li>
                <li className="dropdown">Solutions</li>
                <li>Plans</li>
            </ul>
            <object width="150" data="doem/images/DOEM.svg" type="image/svg+xml">
                <img src="doem/images/DOEM.svg" />
            </object>
            <div className="header-buttons">
                <ul>
                    <li>Log in</li>
                </ul>
            <button className="button-primary">Start free</button>
            </div>
        </header>
    )
};
