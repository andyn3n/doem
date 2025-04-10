import { useState } from 'react';
import './index.css';

export default function Tabs() {

    const [active, setActive] = useState("tab-1");

    const handleClick = (event) => {
        setActive(event.target.id);
    }

    return(
        <div>
            <div className="tabs">
                <div className="tabs-first-column">
                    <h2>Solutions</h2>
                    <button className={`tab-button ${active === 'tab-1' ? 'active' : ''}`} id="tab-1" onClick={handleClick}>For marketing teams</button>
                    <button className={`tab-button ${active === 'tab-2' ? 'active' : ''}`} id="tab-2" onClick={handleClick}>For businesses</button>
                    <button className={`tab-button ${active === 'tab-3' ? 'active' : ''}`} id="tab-3" onClick={handleClick}>For sales</button>
                    <button className={`tab-button ${active === 'tab-4' ? 'active' : ''}`} id="tab-4" onClick={handleClick}>For product teams</button>
                    <button className={`tab-button ${active === 'tab-5' ? 'active' : ''}`} id="tab-5" onClick={handleClick}>For support teams</button>
                </div>
                <div className="tabs-content">
                    <div className={`tab-page ${active === 'tab-1' ? 'active' : ''}`}>
                        <div className="package-1">
                            <div className="heading-icon-set">
                                <h3>Audience Pro</h3>
                                <svg className="package-image">
                                    <image href="images\Group 35.svg" width="40px" />
                                </svg>
                            </div>
                            <p>This tool helps you attrack more audience and convert visitors into customers</p>
                            <h4>Features</h4>
                            <ul>
                                <li>Marketing automation</li>
                                <li>Analytics dashboard</li>
                                <li>Over 46 additional features</li>
                                <li>79 integrations</li>
                            </ul>
                            <button className="button-primary-invert">Try free</button>
                        </div>
                        <div className="package-2">
                            <div className="heading-icon-set">
                                <h3>Share it!</h3>
                                <svg className="package-image">
                                    <image href="images\Group 40.svg" width="40px" />
                                </svg>
                            </div>
                            <p>Create content to most important social media platforms of yours.</p>
                            <h4>Features</h4>
                            <ul>
                                <li>6 different platforms</li>
                                <li>Social media tools</li>
                                <li>Over 30 additional features</li>
                                <li>52 integrations</li>
                            </ul>
                            <button className="button-primary-invert">Get free demo</button>
                        </div>
                        <div className="package-3">
                            <div className="heading-icon-set">
                                <h3>Power CMS</h3>
                                <svg className="package-image">
                                    <image href="images\Group 39.svg" width="40px" />
                                </svg>
                            </div>
                            <p>Create kick ass websites and blogs.</p>
                            <h4>Features</h4>
                            <ul>
                                <li>Website creation tools</li>
                                <li>Website hosting and management</li>
                                <li>Blog and content creation tools</li>
                                <li>Over 38 additional features</li>
                                <li>126 integrations</li>
                            </ul>
                            <button className="button-primary-invert">It's free, try it</button>
                        </div>
                    </div>
                    <div className={`tab-page ${active === 'tab-2' ? 'active' : ''}`}>
                        <h2 className="centered">Coming soon for businesses!</h2>
                    </div>
                    <div className={`tab-page ${active === 'tab-3' ? 'active' : ''}`}>
                        <h2 className="centered">Coming soon for sales!</h2>
                    </div>
                    <div className={`tab-page ${active === 'tab-4' ? 'active' : ''}`}>
                        <h2 className="centered">Coming soon for product teams!</h2>
                    </div>
                    <div className={`tab-page ${active === 'tab-5' ? 'active' : ''}`}>
                        <h2 className="centered">Coming soon for support teams!</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

