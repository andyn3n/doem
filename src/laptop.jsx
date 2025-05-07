import React from 'react';
import './index.css';

export default function Laptop() { 
    var icon = "./images/map-dot-notActive.svg"
    var iconActive = "./images/pin_active.svg"

    const handleClick = (event) => {
        
        if(event.target.id === "visibility-button-1" || event.target.id === "visibility-button-active-1") {
            var textElement = document.getElementById('top-left');
            var buttonActive = document.getElementById('visibility-button-active-1');
        } else if (event.target.id === "visibility-button-2" || event.target.id === "visibility-button-active-2") {
            var textElement = document.getElementById('top-right');
            var buttonActive = document.getElementById('visibility-button-active-2');
        } else if (event.target.id === "visibility-button-3" || event.target.id === "visibility-button-active-3") {
            var textElement = document.getElementById('bottom-left');
            var buttonActive = document.getElementById('visibility-button-active-3');
        } else if (event.target.id === "visibility-button-4" || event.target.id === "visibility-button-active-4") {
            var textElement = document.getElementById('bottom-right');
            var buttonActive = document.getElementById('visibility-button-active-4');
        }

        if(textElement.style.opacity === '0') {
            textElement.style.opacity = '1';
            buttonActive.style.opacity = '1';
        } else {
            textElement.style.opacity = '0';
            buttonActive.style.opacity = '0';
        }
    }

    return(
        <div className="laptop">
            <svg className="laptop-image" xmlns="images\laptop.svg">
                <image href="images\laptop.svg" width="100%" height="100%" />
            </svg>
            
            <p className="popup-text-top-left" id="top-left"><b>Log in on any device.</b> You get the access of web. desktop and mobile app. On every OS.</p>
            <button className="image-button-1" onClick={handleClick}>
                <svg xmls={icon}>
                    <image href={icon} width="40" height="40" id="visibility-button-1"/>
                </svg>
            </button>
            <button className="image-button-active-1" onClick={handleClick}>
                <svg xmls={iconActive}>
                    <image href={iconActive} width="40" height="40" id="visibility-button-active-1"/>
                </svg>
            </button>
            
            <p className="popup-text-top-right" id="top-right"><b>Includes only the features you really need.</b> Nothing else.</p>
            <button className="image-button-2" onClick={handleClick}>
                <svg xmls={icon}>
                    <image href={icon} width="40" height="40" id="visibility-button-2"/>
                </svg>
            </button>
            <button className="image-button-active-2" onClick={handleClick}>
                <svg xmls={iconActive}>
                    <image href={iconActive} width="40" height="40" id="visibility-button-active-2"/>
                </svg>
            </button>
           
            <p className="popup-text-bottom-left" id="bottom-left"><b>Customize your view.</b> Show the most important information on the frontpage.</p>
            <button className="image-button-3" onClick={handleClick}>
                <svg xmls={icon}>
                    <image href={icon} width="40" height="40" id="visibility-button-3"/>
                </svg>
            </button>
            <button className="image-button-active-3" onClick={handleClick}>
                <svg xmls={iconActive}>
                    <image href={iconActive} width="40" height="40" id="visibility-button-active-3"/>
                </svg>
            </button>

            <p className="popup-text-bottom-right" id="bottom-right"><b>Get realtime analytics</b> The newest information always for you to see.</p>
            <button className="image-button-4" onClick={handleClick}>
                <svg xmls={icon}>
                    <image href={icon} width="40" height="40" id="visibility-button-4"/>
                </svg>
            </button>
            <button className="image-button-active-4" onClick={handleClick}>
                <svg xmls={iconActive}>
                    <image href={iconActive} width="40" height="40" id="visibility-button-active-4"/>
                </svg>
            </button>
        </div>
    )
};