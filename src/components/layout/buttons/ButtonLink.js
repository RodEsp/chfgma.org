import React from 'react'
import { Link } from 'react-router-dom';

function ButtonLink({linkTo, text, styles, className}) {
    // console.log("ButtonLink :::", styles)
    return (
        <Link className={`button-link ${className}`} style={{...styles}} to={linkTo}>{text}</Link>
    )
}

export { ButtonLink };


