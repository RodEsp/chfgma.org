import { ReactComponent as Chevron } from "../../../assets/icons/chevron.svg"
import React from 'react'
import { Link } from 'react-router-dom';

function ButtonLink({linkTo, text, styles}) {
    // console.log("ButtonLink :::", styles)
    return (
        <Link style={{...buttonLinkStyle, ...styles}} to={linkTo}>{text} {buttonChevron}</Link>
    )
}
const buttonChevron = <Chevron style={{ marginLeft: "10px" }} />

// Styles
const buttonLinkStyle = {
    display: "inline-block",
    // flex: "auto 1 auto",
    flex: "1",

    margin: "2px",
    padding: "9px 25px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    border: "none",
    borderRadius: "100px",

    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    whiteSpace: "nowrap",
    
}

export { ButtonLink };


