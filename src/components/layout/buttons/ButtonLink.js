import { ReactComponent as Chevron } from "../../../assets/icons/chevron.svg"
import React from 'react'
import { Link } from 'react-router-dom';

function ButtonLink({linkTo, text, styles}) {
    // console.log("ButtonLink :::", styles)
    return (
        <Link className="button-link" style={{...styles}} to={linkTo}>{text}</Link>
    )
}
const buttonChevron = <Chevron className="chevron" style={{ marginLeft: "10px" }} />

export { ButtonLink };


