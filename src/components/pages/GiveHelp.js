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
            {/* <MoreInfo /> */}
        </div>
    )
}

function MoreInfo() {
    const HowYouCanHelp = () => (
        <div className="text-group">
            <h1 className="header1">How you can help</h1>
            <ul>
                <li>Shop for groceries and essential supplies for people isolating at home</li>
                <li>Provide transportation for making deliveries of groceries and essential supplies</li>
                <li>Create connections with neighbors and neighborhood groups</li>
                <li>Donate gently-used goods like mattresses, electronics, clothing, and other necessities</li>
            </ul>
        </div>
    )
    return (
        <section className="more-info two-in-one">
            <div className="row-container">
                <HowYouCanHelp />
                <img className="pulling-boxes-img" src={pullingBoxesIMG} alt="image of person pulling boxes" />
                <div className="fancy-list-wrapper">
                    <h1 className="header1">New to Mutual Aid?</h1>
                    <div>
                        <div className="fancy-list-container standard-text">
                            <span><b>01</b></span>
                            {/* TODO: Is this a link? */}
                            <span>Learn what <span className="text-important">mutual aid</span> means (we practice solidarity, not charity)</span>
                        </div>
                        <div className="fancy-list-container standard-text">
                            <span><b>02</b></span>
                            {/* TODO: Is this a link? */}
                            <span>Take a minute to fill out our <span className="text-important">volunteer intake form</span></span>
                        </div>
                        <div className="fancy-list-container standard-text">
                            <span><b>03</b></span>
                            {/* TODO: Is this a link? */}
                            <span>Join us on <span className="text-important">Slack</span> to organize with other volunteers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Help() {
    const communityFridgeLink = <a href="/get-help" alt="community fridge link">Community Fridge</a>
    const HowYouCanHelp = () => (
        <div className="text-group">
            <h1 className="header1">How you can help</h1>
            <ul>
                <li>Shop for groceries and essential supplies for people isolating at home</li>
                <li>Help clean and stock our {communityFridgeLink}</li>
                <li>Provide transportation for making deliveries of groceries and essential supplies</li>
                <li>Create connections with neighbors and neighborhood groups</li>
                <li>Donate gently-used goods like mattresses, electronics, clothing, and other necessities</li>
            </ul>
        </div>
    )
    return (
        <section className="help two-in-one">
            <div className="row-container">
                <HowYouCanHelp />
                <img className="pulling-boxes-img" src={pullingBoxesIMG} alt="image of person pulling boxes" />
                <div className="fancy-list-wrapper">
                    <h1 className="header1">New to Mutual Aid?</h1>
                    <div>
                        <div className="fancy-list-container standard-text">
                            <span><b>01</b></span>
                            {/* TODO: Is this a link? */}
                            <span>Learn what <span className="text-important">mutual aid</span> means (we practice solidarity, not charity)</span>
                        </div>
                        <div className="fancy-list-container standard-text">
                            <span><b>02</b></span>
                            {/* TODO: Is this a link? */}
                            <span>Take a minute to fill out our <span className="text-important">volunteer intake form</span></span>
                        </div>
                        <div className="fancy-list-container standard-text">
                            <span><b>03</b></span>
                            {/* TODO: Is this a link? */}
                            <span>Join us on <span className="text-important">Slack</span> to organize with other volunteers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Stats() {
    const tiles = [{
        title: "1,325",
        subtitle: "Slack members",
    }, {
        title: "145",
        subtitle: "neighbors making deliveries",
    }, {
        title: "52",
        subtitle: "intake and dispatch volunteers",
    }, {
        title: "50",
        subtitle: "neighbors supporting the Community Fridge",
    }];
    return (
        <section className="stats">
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


export default GiveHelp;