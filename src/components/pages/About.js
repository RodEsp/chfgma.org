import React from 'react'
import { NavLink } from 'react-router-dom';
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
// Styles
import './About.css'
// Images
import peoplePassingBoxesIMG from "../../assets/people-passing-boxes.png"
import mapNeighborhoodIMG from "../../assets/map-neighborhood.png"
import instagramUpdatesIMG from "../../assets/instagram-updates.png"
import peopleHoldingTrashIMG from "../../assets/people-holding-trash.png"
// Icons
import iconPicIMG from "../../assets/icons/icon-pic.png"
import iconMailboxIMG from "../../assets/icons/icon-mailbox.png"
import iconMessagesIMG from "../../assets/icons/icon-message.png"

function About() {
    return (
        <React.Fragment>
            {/* The Neighborhood */}
            <TheNeighborhood />
            {/* Where We Act */}
            <WhereWeAct />
            {/* Our Principles */}
            <OurPrinciples />
            {/* Since March 2020 */}
            <Since />
            {/* Stay up to date */}
            <StayUpToDate />
            {/* Instagram Updates */}
            <InstagramUpdates />
        </React.Fragment>
    )
}

/********************************  
Components
- TODO: Alt tags on images
********************************/


// Component: The Neighborhood
function TheNeighborhood() {
    return (
        <div className="row" id="the-neighborhood">
            <div className="row-container flex-row" >
                <div className="section">
                    <div className="section-content">
                        <img className="section-image" src={peoplePassingBoxesIMG} alt="people passing boxes" />
                    </div>
                </div>
                <div className="section">
                    <div className="section-content">
                        <div className="section-title">We are neighbors in Clinton Hill and Fort Greene coming together to care for one another through the COVID-19 pandemic and beyond.</div>
                        <div className="btn-wrapper">
                            <ButtonLink linkTo="/get-help" text="I need help" />
                            <ButtonLink linkTo="/give-help" text="I can help" />
                        </div>
                        <p className="subtitle">Want to help financially? You can <NavLink to="/donate" exact={true}><b><u>donate</u></b></NavLink> to our Mutual Aid Fund—100% of funds raised go towards purchasing essentials for people in the community.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component: Where We Act
function WhereWeAct() {
    return (
        <div className="row" id="where-we-act">
            <div className="row-container flex-row">
                <div className="section">
                    <div className="section-content">
                        <div className="title">Where we act</div>
                        <p>We live and act in the neighborhoods of Clinton Hill and Fort Greene in Brooklyn. If you’re outside this area, you can find a group closer to you through <b><u>Mutual Aid NYC</u></b>.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="section-content">
                        <img className="section-image" src={mapNeighborhoodIMG} />
                    </div>
                </div>
            </div>
        </div>
    )
}

/********************************  
Component: InstagramUpdate
TODO: 
- Instagram tiles
********************************/
function InstagramUpdates() {
    return (
        <div className="row">
            <div className="row-container">
                <div className="title">Instagram updates</div>
                <div className="subtitle" style={{ maxWidth: "720px", marginBottom: "60px" }}>Share photos of you taking action and tag us so that we can share with the community! (Of course, only take and share photos of others with their consent.)</div>
                {/* TODO: Instagram tiles? */}
                <img className="section-image" src={instagramUpdatesIMG} alt="instagram updates" />
            </div>
        </div>
    )
}


/********************************  
Component: Stay Up To Date
TODO: 
- stayUpToDate-tile should be a button
********************************/

const stayUpToDateIcons = [
    {
        image: iconMailboxIMG,
        alt: "mailbox icon",
        text: "Subscribe to our weekly newsletter",
    },
    {
        image: iconMessagesIMG,
        alt: "message icon",
        text: "Join the conversation on Slack",
    },
    {
        image: iconPicIMG,
        alt: "picture icon",
        text: "Follow us on Instagram for updates",
    },
]
function StayUpToDate() {
    return (
        <div className="row stay-up-to-date-row">
            <div className="row-container flex-row">
                <div className="title">Stay up to date</div>
                <div className="stayUpToDate-content">
                    {stayUpToDateIcons.map(({ image, text, alt }, i) => (
                        <div className="responsive-tile stayUpToDate-tile" key={"stayUpToDate-tile-" + i}>
                            <div className="stayUpToDate-icon-image">
                                <img src={image} alt={alt} />
                            </div>
                            <div className="stayUpToDate-icon-text">{text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Since
function Since() {
    return (
        <div className="row since-row">
            <div className="row-container flex-row">
                <div className="since-content" >
                    <div className="title">Since March 2020</div>
                    <p className="since-subtitle">In just a few short months, we’ve done a lot together—and this is just the start. These numbers were last updated on July 8, 2020.</p>
                    <div className="since-items-wrapper">
                        <div className="since-item">
                            <div className="since-item-title">$44,997</div>
                            <div className="since-item-description">total contributed to our Mutual Aid Fund and Direct Action Funds</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">10,000</div>
                            <div className="since-item-description">grocery packages delivered through our weekly collaboration with food pantries</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">658</div>
                            <div className="since-item-description">requests fulfilled for groceries and essential supplies</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">135+</div>
                            <div className="since-item-description">people attended training sessions</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">533</div>
                            <div className="since-item-description">callbacks to requests on our hotline</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">988</div>
                            <div className="since-item-description">people have joined our Slack community</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">948</div>
                            <div className="since-item-description">wellness check calls made</div>
                        </div>
                        <div className="since-item">
                            <div className="since-item-title">760</div>
                            <div className="since-item-description">people have followed our Instagram account</div>
                        </div>
                    </div>
                </div>
                <div className="people-holding-trash-image-wrapper" >
                    <img src={peopleHoldingTrashIMG} className="people-holding-trash-svg" alt="people holding trash" />
                    {/* <peopleHoldingTrashIMG className="people-holding-trash-svg" alt="people holding trash" /> */}
                </div>
            </div>
        </div>
    )
}

// Component: Our Principles
const principles = [{ title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }]
function OurPrinciples() {
    return (
        <div className="row" id="our-principles">
            <div className="row-container flex-row" >
                <p className="title">Our principles</p>
                {principles.map(({ title, description }, i) => (
                    <div className="ourPrinciples-container" key={"our-principles-" + i}>
                        <div className="ourPrinciples-name">{title}</div>
                        <div className="ourPrinciples-description">{description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;


