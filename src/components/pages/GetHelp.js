import React from 'react';
import "./GetHelp.css"
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
import airTableScreenshot from "../../assets/airtable-screenshot.png"

function GetHelp() {

    return (
        <div className="get-help">
            <div className="page-row row jumbo-title font-color-primary">The neighborhood's got you</div>
            <Request />
            <OtherResources />
            <div className="page-row row">
                <img className="section-image" src={airTableScreenshot} style={{ maxWidth: "1144px", marginBottom: "100px" }} alt="airtable screenshot" />
            </div>
        </div>
    )
}

function Request() {
    return (
        <div className="page-row row">
            <div className="row-container">
                <div className="split-wrapper">
                    <div className="split-col text-group" style={{ justifyContent: "space-evenly" }}>
                        <div className="header1">Submit a request</div>
                        {/* TODO: make phone number and email links? */}
                        <p className="standard-text">The best way to submit a request is to go through our aid request form. After you submit a request, we’ll respond as soon as possible. You can also call/text us at 862-277-0747 or email us at hello@chfgma.org.</p>
                        <ButtonLink linkTo="/get-help" text="Request aid" styles={{ backgroundColor: "#432BFA", width: "50%", flex: "0" }} />
                    </div>
                    <div className="split-col some-ways-we-can-help">
                        <div className="title">SOME WAYS WE CAN HELP</div>
                        <ul className="list">
                            <li>Groceries</li>
                            <li>Prescription medicine pickup</li>
                            <li>Wellness check calls</li>
                            <li>Sourcing material resources like laptops and air conditioners</li>
                            <li>Translation, tech support, paperwork</li>
                        </ul>
                        <p className="standard-text">We’re resourceful and flexible—let us know what you need, and we’ll do our best to help.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OtherResources() {
    return (
        <div className="page-row row">
            <div className="row-container" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <div className="other-resources">
                    <div className="header1">Other resources</div>

                    <div className="text-group">
                        <div className="header2">NYC Resources</div>
                        <p><span className="text-important">Mutual Aid NYC</span> is a citywide network of groups like ours organizing to provide aid and support to New Yorkers in the midst of the COVID-19 pandemic. If you're outside our neighborhood, you can look here for a group closer to you.</p>
                        <p><span className="text-important">Help Now</span> NYC has a large list of citywide assistance resources for New Yorkers.</p>
                        <p><span className="text-important">NYC Well</span> is New York City's free and confidential 24/7 mental health support service.</p>
                        <p><span className="text-important">Notify NYC</span> is New York City's official source for information about emergency alerts and important city services. You can get regular updates on the latest developments with coronavirus in New York City by texting COVID to 692-692.</p>
                    </div>

                    <div className="text-group">
                        <div className="header2">Local Organizations</div>
                        <p>The organizations and resources below serve a range of different needs throughout our community. Click on each one to expand it and see more information. This list is always evolving. If you think any of them can help you (or if you can help them!), they are all available for you to contact or pursue directly.</p>
                        {/* TODO: Make hello@chfgma.org a link? */}
                        <p>If you have information that will allow us to update or add to this list, please email us at hello@chfgma.org to let us know.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetHelp;