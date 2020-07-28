import React from 'react'
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
import { ReactComponent as MapNeighborhood } from "../../assets/map-neighborhood.svg"

import './About.css'

function About() {
    return (
        <React.Fragment>
            {/* The Neighborhood */}
            <div className="row" id="the-neighborhood">
                <div className="row-container">
                    <div className="section">Picture Here</div>
                    <div className="section">
                        <p style={sectionTitle}>We are neighbors in Clinton Hill and Fort Greene coming together to care for one another through the COVID-19 pandemic and beyond.</p>
                        <div className="buttonsContainer btns-container">
                            <ButtonLink linkTo="/get-help" text="I need help" />
                            <ButtonLink linkTo="/give-help" text="I can help" />
                        </div>
                        <p style={sectionSubtitle}>Want to help financially? You can <b><u>donate</u></b> to our Mutual Aid Fund—100% of funds raised go towards purchasing essentials for people in the community.</p>
                    </div>
                </div>
            </div>

            {/* Where We Act */}
            <div className="row" id="where-we-act">
                <div className="row-container">
                    <div className="section">
                        <p style={{
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "34px",
                            lineHeight: "41px",
                            color: "#212121",
                        }}>Where we act</p>
                        <p>We live and act in the neighborhoods of Clinton Hill and Fort Greene in Brooklyn. If you’re outside this area, you can find a group closer to you through <b><u>Mutual Aid NYC</u></b>.</p>
                    </div>
                    <div className="section">
                        <MapNeighborhood style={{ width: "100%", minWidth: "380px" }} />
                    </div>
                </div>
            </div>

            {/* Our Principles */}
            <OurPrinciples />

            {/* Since March 2020 */}
            <Since />

        </React.Fragment>
    )
}

function Since() {
    return (
        <div className="row">
            <div className="row-container">
                <div style={sinceStyles.content}>
                    <div style={sinceStyles.title}>Since March 2020</div>
                    <div style={sinceStyles.subtitle}>In just a few short months, we’ve done a lot together—and this is just the start. These numbers were last updated on July 8, 2020.</div>
                    <div style={sinceStyles.items}>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>$44,997</div>
                            <div style={sinceStyles.itemDescription}>total contributed to our Mutual Aid Fund and Direct Action Funds</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>10,000</div>
                            <div style={sinceStyles.itemDescription}>grocery packages delivered through our weekly collaboration with food pantries</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>658</div>
                            <div style={sinceStyles.itemDescription}>requests fulfilled for groceries and essential supplies</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>135+</div>
                            <div style={sinceStyles.itemDescription}>people attended training sessions</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>533</div>
                            <div style={sinceStyles.itemDescription}>callbacks to requests on our hotline</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>988</div>
                            <div style={sinceStyles.itemDescription}>people have joined our Slack community</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>948</div>
                            <div style={sinceStyles.itemDescription}>wellness check calls made</div>
                        </div>
                        <div style={sinceStyles.item}>
                            <div style={sinceStyles.itemTitle}>760</div>
                            <div style={sinceStyles.itemDescription}>people have followed our Instagram account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const sinceStyles = {
    content: {
        width: "66%",
    },
    title: {
        fontWeight: "bold",
        fontSize: "34px",
        lineHeight: "41px",
    },
    subtitle: {
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "28px",
    },
    items: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        
    },
    item: {
        // width: "50%",
        flex: "0 0 49%",
        display: "flex",
        flexDirection: "column",
        // flexWrap: "wrap",
        // justifyContent: "space-between",
    },
    itemTitle: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "34px",
        lineHeight: "41px",
        textTransform: "capitalize",
    },
    itemDescription: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "28px",
    }
}

function OurPrinciples() {
    return (
        <div className="row" id="our-principles">
            <div className="row-container" >
                <p style={principleStyles.title}>Our principles</p>
                {principles.map(({ title, description }) => (
                    <div className="principle-container" style={principleStyles.container}>
                        <div class="principle-name" style={principleStyles.name}>{title}</div>
                        <div class="principle-description" style={principleStyles.description}>{description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Principles
const principles = [{ title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, { title: "Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }]
const principleStyles = {
    container: {
        padding: "20px 0",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        color: "#212121",
        borderTop: "2px solid #8F8F8F",
        // width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: "34px",
        lineHeight: "41px",
    },
    name: {
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "28px",
        textTransform: "capitalize",
        flex: ".30",
    },
    description: {
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "28px",
        flex: ".60",
    },
}

// Section
const sectionTitle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "38px",
    color: "#212121",
}

const sectionSubtitle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#212121",
}


export default About;


