import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as MapNeighborhood } from "../../assets/map-neighborhood.svg"
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg"

import './About.css'

function About() {
    return (
        <div>
            <div  className="row" id="the-neighborhood" style={{ ...rowStyle, background: "#F1FDF7", clipPath: "polygon(0 0, 100% 0%, 100% 97%, 0% 100%)" }}>
                <div className="section" style={sectionStyle}>
                    <div className="sectionLeft" style={sectionSideStyle}>Picture Here</div>
                    <div className="sectionRight" style={sectionSideStyle}>
                        <p style={sectionTitle}>We are neighbors in Clinton Hill and Fort Greene coming together to care for one another through the COVID-19 pandemic and beyond.</p>
                        <div className="buttonsContainer" style={buttonsContainer}>
                            <Link style={buttonStyle} to="/get-help">I need help {buttonChevron}</Link>
                            <Link style={buttonStyle} to="/give-help">I can help {buttonChevron}</Link>
                        </div>
                        <p style={sectionSubtitle}>Want to help financially? You can <b><u>donate</u></b> to our Mutual Aid Fund—100% of funds raised go towards purchasing essentials for people in the community.</p>
                    </div>
                </div>
            </div>
            <div className="row" id="where-we-act" style={{ ...rowStyle, backgroundColor: "white" }}>
                <div className="section" style={{ ...sectionStyle, backgroundColor: "white" }}>
                    <div className="sectionLeft" style={{...sectionSideStyle}}>
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
                    <div className="sectionRight" style={sectionSideStyle}>
                        <MapNeighborhood style={{width: "100%"}} />
                    </div>
                </div>
            </div>
            <div className="row" id="our-principles" style={{ ...rowStyle, background: "#F1FDF7", }}>
                <div className="section" style={{ ...sectionStyle}}>
                    <p style={principleStyles.title}>Our principles</p>
                    {principles.map(({title, description}) => (
                        <div className="principle-container" style={principleStyles.container}>
                            <div class="principle-name" style={principleStyles.name}>{title}</div>
                            <div class="principle-description" style={principleStyles.description}>{description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
const buttonChevron = <Chevron style={{ marginLeft: "10px" }} />

// Principles
const principles = [{title:"Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, {title:"Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, {title:"Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, {title:"Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, {title:"Principle ipsum lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]
const principleStyles = {
    container: {
        padding: "20px 0",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        color: "#212121",
        borderTop: "2px solid #8F8F8F",
        width: "100%",
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

// Row
const rowStyle = {
    // -webkit-clip-path: polygon(0 0, 1600px 0, 1600px 87%, 0 100%);
    clipPath: "polygon(0 4%, 100% 0%, 100% 97%, 0% 100%)",
    width: "100%",
}
// Section
const sectionStyle = {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyItems: "space-between",
    padding: "0 200px",
    textAlign: "left",
}
const sectionSideStyle = {
    flex: ".5",
    padding: "50px",
}

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

// Buttons
const buttonsContainer = {
    display: "flex",

}
const buttonStyle = {
    background: "#009E78",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "100px",
    width: "174px",
    border: "none",
    padding: "10px",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFFFFF",
    textAlign: "center",

    flex: ".5",
    margin: "10px",
}

export default About;


