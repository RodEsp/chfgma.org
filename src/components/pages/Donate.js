import React from "react";
import "./Donate.css"
import { IOBY_LINK } from "../../config"

function Donate() {
    const Left = () => <div>
        <div className="header1">Groceries & Essential Fund</div>
        <div className="paragraph">This fund helps cover the costs of essentials like food, medicine, body care items, baby supplies, cleaning supplies, and PPE for neighbors who can't afford them at this time.<br /><br />We have distributed $562,800 since March 2020 as of December 2022.</div>
    </div>

    const Right = () => {
        const vendors = [{
            name: "ioby campaign",
            description: <span>To make a tax-deductible one-time, weekly, or monthly donation, use <a href={IOBY_LINK} alt="ioby link" target="_blank" rel="noreferrer">our ioby campaign</a>.</span>
        }, {
            name: "Venmo",
            description: <span><a href="https://account.venmo.com/u/bklynneighbors" alt="venmo" target="_blank" rel="noreferrer">@bklynneighbors</a><br />(if prompted, enter digits 4944)</span>,
        }, {
            name: "CashApp",
            description: <a href="https://cash.app/$bklynneighbors" alt="cashapp" target="_blank" rel="noreferrer">$bklynneighbors</a>,
        }, {
            name: "PayPal, Google Pay",
            description: <a href="mailto: bklynneighbors@gmail.com" alt="paypal, google pay link">bklynneighbors@gmail.com</a>
        }]

        return <div className="right">
            <div className="title">HOW TO CONTRIBUTE</div>
            <div className="vendors">
                {vendors.map(({ name, description }) => {
                    return <div className="vendor" key={name}>
                        <div className="name">{name}</div>
                        <div className="description">{description}</div>
                    </div>
                })}
            </div>
        </div>
    }

    return <div className="page page-donate">
        <section className="jumbo-title donate-font-color donate-background-color">Support mutual aid financially</section>
        <section className="group-1">
            <div className="row-container split-wrapper">
                <Left />
                <Right />
            </div>
        </section>
    </div>
}

export default Donate;