import React from 'react'
import { Link } from 'react-router-dom';

export function ButtonLink({linkTo, text, styles, className}) {
    return (
        <Link className={`button-link ${className}`} style={{...styles}} to={linkTo}>{text}</Link>
    )
}
