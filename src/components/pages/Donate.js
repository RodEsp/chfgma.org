import React from "react";
// Components
import GenericElement from "../layout/GenericElement.js"
// Services
import { rows } from "./Donate.service.js"
// Styles
import "./Donate.css"

function Donate() {
    console.log("DONATE :::", {rows})
    // const { rows } = data;
    return (
        <div className="page-donate">
            <div className="page-row row jumbo-title donate-font-color donate-background-color">Support mutual aid financially</div>
            {rows && rows.length > 0 && rows.map((row, key) => {
                return (
                    <Row {...row} key={key}/>
                )
            })}
        </div>
    )
}

function Row(props) {
    return (
        <div className="row">
            <div className="row-container">
                <GenericElement {...props} />
            </div>
        </div>
    )
}

export default Donate;