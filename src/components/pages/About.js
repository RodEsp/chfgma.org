import React from 'react'
import { NavLink } from 'react-router-dom';
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
// Services
import {ourPrinciples, stayUpToDateCards} from "./About.service.js";
// Styles
import './About.css'
// Images
import peoplePassingBoxesIMG from "../../assets/people-passing-boxes.png"
import mapNeighborhoodIMG from "../../assets/map-neighborhood.png"
import instagramUpdatesIMG from "../../assets/instagram-updates.png"
import peopleHoldingTrashIMG from "../../assets/people-holding-trash.png"

function About({ style }) {
    console.debug("About :::", {style})
    return (
        <div className="about polygon-page">

            {/* The Neighborhood */}
            <div className="row" id="the-neighborhood">
                <div className="row-container flex-row" >
                    <div className="split-wrapper">
                        <div className="split-col y-center">
                            <img className="split-col-img" src={peoplePassingBoxesIMG} alt="people passing boxes" />
                        </div>
                        <div className="text-group split-col y-center">
                            <div className="header2">We are neighbors in Clinton Hill and Fort Greene coming together to care for one another through the COVID-19 pandemic and beyond.</div>
                            <div className="btn-wrapper">
                                <ButtonLink linkTo="/get-help" text="I need help" styles={{ backgroundColor: "#009E78" }} />
                                <ButtonLink linkTo="/give-help" text="I can help" styles={{ backgroundColor: "#009E78" }} />
                            </div>
                            <p className="small-text">Want to help financially? You can <NavLink to="/donate" exact={true}><b><u>donate</u></b></NavLink> to our Mutual Aid Fund—100% of funds raised go towards purchasing essentials for people in the community.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Where We Act */}
            <div className="row">
                <div className="row-container">
                    <div className="split-wrapper">
                        <div className="split-col y-center">
                            <div className="header1">Where we act</div>
                            <p>We live and act in the neighborhoods of Clinton Hill and Fort Greene in Brooklyn. If you’re outside this area, you can find a group closer to you through <b><u>Mutual Aid NYC</u></b>.</p>
                        </div>
                        <div className="split-col">
                            <img className="split-col-img" src={mapNeighborhoodIMG} alt="map of neighborhood" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Principles */}
            <div className="row" id="our-principles">
                <div className="row-container flex-row" >
                    <p className="header1">Our principles</p>
                    {ourPrinciples.map(({ title, description }, i) => (
                        <div className="ourPrinciples-container" key={"our-principles-" + i}>
                            <div className="ourPrinciples-name">{title}</div>
                            <div className="ourPrinciples-description">{description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Since March 2020 */}
            <div className="row since-row">
                <div className="row-container flex-row">
                    <div className="since-content" >
                        <div className="header1">Since March 2020</div>
                        <p className="standard-text">In just a few short months, we’ve done a lot together—and this is just the start. These numbers were last updated on July 8, 2020.</p>
                        <div className="since-items-wrapper">
                            <div className="since-item">
                                <div className="header1">$44,997</div>
                                <div className="standard-text">total contributed to our Mutual Aid Fund and Direct Action Funds</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">10,000</div>
                                <div className="standard-text">grocery packages delivered through our weekly collaboration with food pantries</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">658</div>
                                <div className="standard-text">requests fulfilled for groceries and essential supplies</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">135+</div>
                                <div className="standard-text">people attended training sessions</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">533</div>
                                <div className="standard-text">callbacks to requests on our hotline</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">988</div>
                                <div className="standard-text">people have joined our Slack community</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">948</div>
                                <div className="standard-text">wellness check calls made</div>
                            </div>
                            <div className="since-item">
                                <div className="header1">760</div>
                                <div className="standard-text">people have followed our Instagram account</div>
                            </div>
                        </div>
                    </div>
                    <div className="people-holding-trash-image-wrapper" >
                        <img src={peopleHoldingTrashIMG} className="people-holding-trash-svg" alt="people holding trash" />
                    </div>
                </div>
            </div>


            {/* Stay up to date */}
            <div className="row stay-up-to-date-row">
                <div className="row-container">
                    <div className="header1">Stay up to date</div>
                    <div className="cards-wrapper">
                        {stayUpToDateCards.map(({ image, text, alt }, i) => (
                            <div className="card" key={"stayUpToDate-tile-" + i}>
                                <div className="stayUpToDate-icon-image">
                                    <img src={image} alt={alt} />
                                </div>
                                <div className="stayUpToDate-icon-text">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Instagram Updates */}
            <div className="row">
                <div className="row-container">
                    <div className="header1">Instagram updates</div>
                    <div className="small-text">Share photos of you taking action and tag us so that we can share with the community! (Of course, only take and share photos of others with their consent.)</div>
                    {/* TODO: Instagram tiles? */}
                    <img src={instagramUpdatesIMG} alt="instagram updates" />
                </div>
            </div>
        </div>
    )
}

/********************************  
Component: Stay Up To Date
TODO: 
- stayUpToDate-tile should be a button
********************************/

export default About;


