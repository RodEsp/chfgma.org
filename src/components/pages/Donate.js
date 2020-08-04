import React from "react";
import GenericElement from "../layout/GenericElement.js"
import data from "./Donate.service.js"
import "./Donate.css"

function Donate() {
    console.log(data)
    const { rows } = data;
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

//////////////////////////////
// OLD HTML
///////////////////////////
/***************************
<div className="row">
    <div className="row-container">
        <div className="split-wrapper">
            <div className="split-col text-group padded">
                <div className="header1">Mutual Aid Fund</div>
                <p>This fund makes it possible to support anyone in this crisis regardless of individual financial resources. 100% goes towards purchasing groceries and essential supplies for people in our community (transparent fund tracking is being handled via the Slack). These essentials are then dropped off by delivery volunteers.</p>
                <div className="stats-wrapper">
                    <div>
                        <div className="header2">+$45k</div>
                        <div>total raised</div>
                    </div>
                    <div>
                        <div className="header2">-$36.7k</div>
                        <div>total disbursed</div>
                    </div>
                </div>
            </div>
            <div className="split-col text-box y-space-between">
                <div className="bold">CONTRIBUTE</div>
                <div>
                    <div className="donate-font-color bold">Venmo</div>
                    <a href="" alt="">@bklynneighbors </a>
                    <div>if prompted, enter digits 1139</div>
                </div>
                <div>
                    <div className="donate-font-color bold">CashApp</div>
                    <a href="" alt="">$bklynneighbors</a>
                </div>
                <div>
                    <div className="donate-font-color bold">PayPal</div>
                    <a href="mailto:bklynneighbors@gmail.com" alt="">bklynneighbors@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="row-container">
        <div className="split-wrapper">
            <div className="split-col text-group">

                <div className="header1">Direct Action Fund</div>
                <p>This fund provides material support (water, snacks, PPE, basic medical supplies) to protesters at actions in and adjacent to Clinton Hill/Fort Greene. 100% of all donations are used to purchase supplies, which will be distributed by neighbors at the actions. For more info, email us at directaction@chfgma.org.</p>
                <div className="stats-wrapper">
                    <div>
                        <div className="header2">+$300</div>
                        <div>total raised</div>
                    </div>
                    <div>
                        <div className="header2">-$29</div>
                        <div>total disbursed</div>
                    </div>
                </div>

            </div>
            <div className="split-col">

            </div>
        </div>
    </div>
</div>
****************************/