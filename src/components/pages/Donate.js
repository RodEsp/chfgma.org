import React from "react";
// Components
import GenericElement from "../layout/GenericElement.js"
// Services
import { rows } from "./Donate.service.js"
// Styles
import "./Donate.css"

function Donate() {
    // console.log("DONATE :::", {rows})
    return (
        <div className="page-donate">
            <div className="jumbo-title donate-font-color donate-background-color">Support mutual aid financially</div>
            <div className="page-row">
                {rows && rows.length > 0 && rows.map((row, key) => {
                    return (
                        <Row {...row} key={key} />
                    )
                })}
                <div className="grid-row ">
                    <p className="grid-row-span-center">These numbers were last updated on July 8, 2020.</p>
                </div>
            </div>

        </div>
    )
}

function Row(props) {
    return (
        <section className="row">
            <div className="row-container">
                <GenericElement {...props} />
            </div>
        </section>
    )
}

export default Donate;