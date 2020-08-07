import React from 'react';
import "./GiveHelp.css";
import flyerPreviewIMG from "../../assets/flyer-preview.png"
import pullingBoxesIMG from "../../assets/pulling-boxes.png"

function GiveHelp() {
    return (
        <div className="give-help polygon-page">
            <div className="page-row row jumbo-title font-color-primary">Join our growing community</div>
            <Help />
            <Stats />
            <HelpfulResources />
        </div>
    )
}

function Help() {
    return (
        <div className="page-row grid-row help">
            <div className="content-wrapper grid-row-span-66">

                <div className="text-group">
                    <div className="header1">How you can help</div>
                    <ul>
                        <li>Shop for groceries and essential supplies to people isolating at home</li>
                        <li>Provide transportation for making deliveries</li>
                        <li>Make wellness calls to seniors</li>
                        <li>Donate working laptops, air conditioners, and other necessities</li>
                    </ul>
                </div>

                <div className="fancy-list-wrapper">
                    <div className="header1">If you’re new, here’s how to get plugged in...</div>
                    <div>
                        <div className="fancy-list-container standard-text">
                            <span><b>01</b></span>
                            <span>Learn what <span className="text-important">mutual aid</span> means, and read <span className="text-important">our principles</span>
                            </span>
                        </div>
                        <div className="fancy-list-container standard-text">
                            <span><b>02</b></span>
                            <span>Take a minute to fill out our <span className="text-important">volunteer intake form</span></span>
                        </div>
                        <div className="fancy-list-container standard-text">
                            <span><b>03</b></span>
                            <span>Join our <span className="text-important">Slack team</span> to get the latest updates</span>
                        </div>
                    </div>
                </div>

            </div>
            <img className="pulling-boxes-img" src={pullingBoxesIMG} alt="image of person pulling boxes" />
        </div>
    )
}

function Stats() {
    const tiles = [{
        title: "988",
        subtitle: "Slack members",
    }, {
        title: "32",
        subtitle: "Slack channels",
    }, {
        title: "145",
        subtitle: "delivery people",
    }, {
        title: "38",
        subtitle: "wellness callers",
    }];
    return (
        <div className="page-row row give-help-stats">
            <div className="row-container">
                <div className="tiles-container">
                    {tiles && tiles.map(({ title, subtitle }, i) => (
                        <div className="tile" key={i}>
                            <div className="tile-title header1 font-color-primary">{title}</div>
                            <div className="tile-subtitle standard-text">{subtitle}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function HelpfulResources() {
    return (
        <div className="page-row row helpful-resources-spread standard-text">
            <div className="row-container">

                <div className="help-us-spread split-wrapper">
                    <div className="split-col text-group">
                        <div className="header1">Help us spread the word</div>
                        <p>If you have access to a printer, print and share our flyers, or make one of your own. Flyering your building/street/block is key to connecting those in need to our resources.</p>
                        <p>Our flyer is available in English, Spanish, and Chinese. Download all three at once here.</p>
                    </div>
                    <div className="split-col">
                        <img className="split-col-img" src={flyerPreviewIMG} alt="flyer preview" />
                    </div>
                </div>

                <div className="helpful-resources">
                    <div className="header1">Helpful resources</div>
                    <div className="grid-list grid-row-span-3-5 grid-row">

                        <span className="grid-list-key">Face Masks</span>
                        <u className="grid-list-value">
                            <div>CDC: Use of Cloth Face Coverings to Help Slow the Spread of COVID-19</div>
                            <div>Washington Post: Answers to your DIY face mask questions, including what material you should use</div>
                            <div>HuffPost: Coronavirus Face Masks: Everything You Need To Know</div>
                        </u>

                        <span className="grid-list-key">Safe Deliveries</span>
                        <u className="grid-list-value">QueerCare: Protocols for delivering items to and collecting items from someone in self-isolation during the COVID-19 Pandemic</u>

                        <span className="grid-list-key">Supporting Local Businesses</span>
                        <u className="grid-list-value">{`Myrtle Business Guide: Who’s Open & Delivering`}</u>

                        <span className="grid-list-key">Other Information</span>
                        <u className="grid-list-value">
                            <div>Wirecutter: Your Coronavirus Questions Answered</div>
                            <div>New York Times: Neighbors Not Practicing Social Distancing? Here’s What to Do</div>
                        </u>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default GiveHelp;