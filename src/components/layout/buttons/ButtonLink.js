import { ReactComponent as Chevron } from "../../../assets/icons/chevron.svg"
import React from 'react'
import { Link } from 'react-router-dom';

function ButtonLink({linkTo, text}) {
    return (
        <Link style={buttonLinkStyle} to={linkTo}>{text} {buttonChevron}</Link>
    )
}
const buttonChevron = <Chevron style={{ marginLeft: "10px" }} />

// Styles
const buttonLinkStyle = {
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

export { ButtonLink };


