import React from 'react'
import { stayUpToDateCards, stats } from "./About.service.js";
import { ButtonLink } from "../layout/buttons/ButtonLink.js";
import './About.css';
import homePassingBoxes from "../../assets/home-passing-boxes.png";
import peopleHoldingTrashIMG from "../../assets/people-holding-trash.png";
import logoBlack from "../../assets/logo-black.png";

import { MUTUAL_AID_NYC_LINK } from "../../config";


/********************************  
Component: Stay Up To Date
TODO: 
- stayUpToDate-tile should be a button. Do I have the links for them?
********************************/

function About() {
    return <div className="about page polygon-page">
        <TheNeighborhood />
        <AboutUs />
        <WhatIsMutualAid />
        <HowItWorks />
        <Stats />
        <StayUpToDate />
    </div>
}

function TheNeighborhood() {
    return <section id="the-neighborhood" className="hero">
        <div className="row-container" >
            <div className="split-wrapper">
                <img src={logoBlack} alt="mutual aid logo" />
                <div className="text-group">
                    <div className="title">We are neighbors in Clinton Hill and Fort Greene coming together to care for one another through the COVID-19 pandemic and beyond.</div>
                    <div className="btn-wrapper">
                        <ButtonLink linkTo="/get-help" text="I need help" />
                        <ButtonLink linkTo="/give-help" text="I can help" />
                    </div>
                    <div className="sub-title small-text">If you’re outside the Fort Greene and Clinton Hill area, you can find a group closer to you through <a href={MUTUAL_AID_NYC_LINK} alt={`Mutual Aid NYC website link: ${MUTUAL_AID_NYC_LINK}`}><b><u>Mutual Aid NYC</u></b></a>.</div>
                </div>
            </div>
        </div>
    </section>
}

function AboutUs() {
    return <section id="about-us">
        <div className="row-container">
            <div className="split-wrapper">
                <div>
                    <div className="header1">About us</div>
                    <p className="subheader standard-text">We came together in March 2020 when the COVID-19 lockdown began. We created a phone hotline, a website, a Slack workspace, and a newsletter. Since then, we’ve organized a network of thousands of neighbors to share what we have and fulfill what we need. Recognizing that our community has been impacted by gentrification and systemic racism, we seek to repair harm and create equity through redistribution and advocacy.</p>
                    <div className="btn-wrapper">
                        <ButtonLink linkTo="/donate" text="Donate" />
                    </div>
                </div>
                <img className="split-col-img" src={homePassingBoxes} alt="people passing boxes" />
            </div>
        </div>
    </section>
}

function WhatIsMutualAid() {
    return <section id="what-is-mutual-aid">
        <div className="row-container">
            <div className="fancy-list-wrapper">
                <div className="header1">What is mutual aid?</div>
                <div className="subheader standard-text">Mutual aid is a form of community organizing where people, not institutions, take on the responsibility of caring for one another. It has a long history of being practiced around the world, and is rooted in Black, Indigenous, and other marginalized communities. Mutual aid rejects charity and the power of a privileged few for the solidarity of our fellow human beings and community.</div>
                <div className="fancy-list">
                    <div className="fancy-list-container standard-text">
                        <span><b>1</b></span>
                        <span>We are accountable to our community, not funders or other third parties.</span>
                    </div>
                    <div className="fancy-list-container standard-text">
                        <span><b>2</b></span>
                        <span>We believe in sharing labor and resources for mutual benefit, where all give and take depending on their current needs and abilities.</span>
                    </div>
                    <div className="fancy-list-container standard-text">
                        <span><b>3</b></span>
                        <span>We value transparency and collaborative decision-making. We operate with a flat, non-hierarchical structure.</span>
                    </div>
                    <div className="fancy-list-container standard-text">
                        <span><b>4</b></span>
                        <span>Our work is inherently political. We mobilize and advocate against injustices that make our work necessary in the first place.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

function HowItWorks() {
    return <section id="howItWorks">
        <div className="row-container">
            <div className="header1">How It Works</div>
            <iframe src="https://www.youtube-nocookie.com/embed/FY1eF66hoo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </section>
}

function Stats() {
    return <section id="stats">
        <div className="row-container">
            <div className="header1">2023 Stats</div>
            <div className="copy">
                <div className="stats-items-wrapper">
                    {stats.map(({ stat, text }) => (
                        <div className="stats-item" key={stat}>
                            <div className="stats-item-title">{stat}</div>
                            <div className="stats-item-description">{text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="img-wrapper">
                <img src={peopleHoldingTrashIMG} className="people-holding-trash-svg" alt="people holding trash" />
            </div>
        </div>
    </section>
}

function StayUpToDate() {
    return <section id="stay-up-to-date">
        <div className="row-container">
            <div className="header1 title">Stay up to date</div>
            <div className="cards-wrapper">
                {stayUpToDateCards.map(({ image, text, alt, link }, i) => (
                    <a className="card" key={"stayUpToDate-tile-" + i} href={link} alt={`${alt} link`}>
                        <span className="stayUpToDate-icon-image">
                            <img src={image} alt={alt} />
                        </span>
                        <div className="stayUpToDate-icon-text">{text}</div>
                    </a>
                ))}
            </div>
        </div>
    </section>
}

export default About;
