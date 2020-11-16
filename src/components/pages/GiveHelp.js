import React from 'react';
import "./GiveHelp.css";
import flyerPreviewIMG from "../../assets/flyer-preview.png"
import pullingBoxesIMG from "../../assets/pulling-boxes.png"

function GiveHelp() {
    return (
        <div className="page give-help polygon-page">
            <section className="jumbo-title">Join our growing community</section>
            <Help />
            <Stats />
            {/* Comment out until we have the correct links */}
            {/* Comment out until we have more info */}
            {/* <HelpfulResources /> */}
        </div>
    )
}

function Help() {
    return (
        <section className="help">
            <div className="row-container">

                <div className="text-group">
                    <div className="header1">How you can help</div>
                    <ul>
                        <li>Shop for groceries and essential supplies to people isolating at home</li>
                        <li>Provide transportation for making deliveries</li>
                        <li>Make wellness calls to seniors</li>
                        <li>Donate working laptops, air conditioners, and other necessities</li>
                    </ul>
                </div>

                <img className="pulling-boxes-img" src={pullingBoxesIMG} alt="image of person pulling boxes" />

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
        </section>
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
        <section>
            <div className="give-help-stats row-container">
                {tiles && tiles.map(({ title, subtitle }, i) => (
                    <div className="tile" key={i}>
                        <div className="tile-title header1 font-color-primary">{title}</div>
                        <div className="tile-subtitle standard-text">{subtitle}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function HelpfulResources() {
    // TODO: Add link hrefs and alts
    const resources = [{
        title: "Face Masks",
        links: [
            { title: "CDC: Use of Cloth Face Coverings to Help Slow the Spread of COVID-19" },
            { title: "Washington Post: Answers to your DIY face mask questions, including what material you should use" },
            { title: "HuffPost: Coronavirus Face Masks: Everything You Need To Know" },
        ]
    }, {
        title: "Safe Deliveries",
        links: [
            { title: "QueerCare: Protocols for delivering items to and collecting items from someone in self-isolation during the COVID-19 Pandemic" }
        ]
    }, {
        title: "Supporting Local Businesses",
        links: [
            { title: "Myrtle Business Guide: Who’s Open & Delivering" }
        ]
    }, {
        title: "Other Information",
        links: [
            { title: "Wirecutter: Your Coronavirus Questions Answered" },
            { title: "New York Times: Neighbors Not Practicing Social Distancing? Here’s What to Do" }
        ]
    }]
    return (
        <section className=" helpful-resources-spread standard-text">
            <div className="row-container">


                <div className="help-us-spread split-wrapper">
                    <div className="split-col text-group">
                        <div className="title">Help us spread the word</div>
                        <div className="text-group-content">
                            <p>If you have access to a printer, print and share our flyers, or make one of your own. Flyering your building/street/block is key to connecting those in need to our resources.</p>
                            {/* TODO: links */}
                            <p>Our flyer is available in <a href="" alt="" className="download-link">English</a>, <a href="" alt="" className="download-link">Spanish</a>, and <a href="" alt="" className="download-link">Chinese</a>. Download all three at once here.</p>
                        </div>
                    </div>
                    <div className="split-col">
                        <img className="split-col-img" src={flyerPreviewIMG} alt="flyer preview" />
                    </div>
                </div>

                <div className="helpful-resources">
                    <div className="header1">Helpful resources</div>
                    <div className="helpful-resources-content">
                        {resources.map(({ title, links }) => (
                            <React.Fragment>
                                <div className="resource-title">{title}</div>
                                <div className="resource-links">
                                    {links.map(({ title }) => (
                                        <div key={title}>{title}</div>
                                    ))}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GiveHelp;