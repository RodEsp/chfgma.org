import React from "react";
import "./Donate.css"
import { DONORBOX_LINK, IOBY_LINK } from "../../config"

function Donate() {
    const Left = () => <div>
        <div className="header1">Groceries & Essential Fund</div>
        <div className="paragraph">This fund covers the costs of essentials like food, medicine, personal hygiene items, baby supplies, cleaning supplies, and PPE for neighbors isolating at home or struggling financially.<br /><br />We have disbursed $145,491 since March as of November 2020.</div>
    </div>

    const Right = () => {
        const vendors = [{
            name: "ioby campaign",
            description: <span>Only contributions made through our <a href={IOBY_LINK} alt="ioby link">our ioby campaign</a> campaign are tax-deductible.</span>
        }, {
            name: "Donorbox",
            description: <span>Contribute weekly or monthly through <a href={DONORBOX_LINK} alt="donorbox link">Donorbox</a> to keep our fund healthy and sustainable.</span>
        }, {
            name: "Venmo",
            description: <span>@bklynneighbors<br />(if prompted, enter digits 1139)</span>,
        }, {
            name: "CashApp",
            description: "$bklynneighbors"
        }, {
            name: "PayPal, Google Pay",
            description: <a href="mailto: bklynneighbors@gmail.com" alt="paypal, google pay link">bklynneighbors@gmail.com</a>
        }]

        return <div className="right">
            <div className="title">HOW TO CONTRIBUTE</div>
            <div className="vendors">
                {vendors.map(({ name, description }) => {
                    return <div className="vendor">
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