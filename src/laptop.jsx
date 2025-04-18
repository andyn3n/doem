import React from 'react';
import './doem/index.css';

export default function Laptop() { 
    var icon = "doem/images/map-dot-notActive.svg"
    var iconActive = "/doemimages/pin_active.svg"

    const handleClick = (event) => {
        if(event.target.id === "visibility-button-1" || event.target.id === "visibility-button-active-1") {
            var textElement = document.getElementById('top-left');
            var buttonActive = document.getElementById('visibility-button-active-1');
            var buttonNotActive = event.target.id;
        } else if (event.target.id === "visibility-button-2") {
            var textElement = document.getElementById('top-right');
        } else if (event.target.id === "visibility-button-3") {
            var textElement = document.getElementById('bottom-left');
        } else if (event.target.id === "visibility-button-4") {
            var textElement = document.getElementById('bottom-right');
        }

        if(textElement.style.opacity === '0') {
            textElement.style.opacity = '1';
            buttonActive.style.opacity = '1';
            buttonNotActive.style.opacity = '0';
        } else {
            textElement.style.opacity = '0';
            buttonActive.style.opacity = '0';
            buttonNotActive.style.opacity = '1';
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
            <button className="image-button-2" onClick={handleClick} id="visibility-button-2">
                <svg xmls="doem\images\map-dot-notActive.svg">
                    <image href="doem\images\map-dot-notActive.svg" width="40" height="40" id="visibility-button-2"/>
                </svg>
            </button>
            <p className="popup-text-bottom-left" id="bottom-left"><b>Customize your view.</b> Show the most important information on the frontpage.</p>
            <button className="image-button-3" onClick={handleClick} id="visibility-button-3">
                <svg xmls="doem\images\map-dot-notActive.svg">
                    <image href="doem\images\map-dot-notActive.svg" width="40" height="40" id="visibility-button-3"/>
                </svg>
            </button>
            <p className="popup-text-bottom-right" id="bottom-right"><b>Get realtime analytics</b> The newest information always for you to see.</p>
            <button className="doem\image-button-4" onClick={handleClick} id="visibility-button-4">
                <svg xmls="doem\images\map-dot-notActive.svg">
                    <image href="doem\images\map-dot-notActive.svg" width="40" height="40" id="visibility-button-4"/>
                </svg>
            </button>
        </div>
    )
};