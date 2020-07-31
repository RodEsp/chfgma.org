import React from 'react';
import "./GetHelp.css"
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
import airTableScreenshot from "../../assets/airtable-screenshot.png"

function GetHelp() {

    return (
        <div className="get-help">
            <div className="row jumbo-title" style={{padding: "126px 0", marginBottom: "100px"}}>
                    <div className="section title-row" style={{
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "40px",
                        lineHeight: "44px",
                        textAlign: "center",
                        color: "#432BFA",
                    }}>The neighborhood's got you</div>
            </div>

            <Request />
            <OtherResources />
            <div className="row">
                <img className="section-image" src={airTableScreenshot} style={{ maxWidth: "1144px", marginBottom: "100px" }} alt="airtable screenshot" />
            </div>
        </div>
    )
}

function Request() {
    return (
        <div className="row">
            <div className="row-container flex-row">
                <div className="section">
                    <div style={{
                        padding: "0 50px 50px 0",
                        // height: "auto"
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "self-end",
                        // alignContent: "space-between"
                    }}>
                        <div style={{
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "34px",
                            lineHeight: "41px",

                            marginBottom: "20px"
                        }}>Submit a request</div>
                        {/* TODO: make phone number and email links? */}
                        <div style={{
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "28px",
                        }}>The best way to submit a request is to go through our aid request form. After you submit a request, we’ll respond as soon as possible. You can also call/text us at 862-277-0747 or email us at hello@chfgma.org.</div>
                        <ButtonLink linkTo="/get-help" text="Request aid" styles={{ backgroundColor: "#432BFA", marginTop: "40px" }} />
                    </div>
                </div>
                <div className="section">
                    <div style={{
                        boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.05)",
                        borderRadius: "20",
                        padding: "48px 40px 40px 40px",
                    }}>
                        <div style={{
                            fontSize: "18px",
                            lineHeight: "22px",
                            letterSpacing: "0.05em",
                            fontWeight: 600,
                            textTransform: "capitalize",
                        }}>SOME WAYS WE CAN HELP</div>
                        <ul style={{
                            paddingLeft: "1.5em",
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: 500,
                        }}>
                            <li>Groceries</li>
                            <li>Prescription medicine pickup</li>
                            <li>Wellness check calls</li>
                            <li>Sourcing material resources like laptops and air conditioners</li>
                            <li>Translation, tech support, paperwork</li>
                        </ul>
                        <p style={{
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: 500,
                        }}>We’re resourceful and flexible—let us know what you need, and we’ll do our best to help.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OtherResources() {
    return (
        <div className="row">
            <div className="row-container" style={{paddingLeft: "10%", paddingRight: "10%"}}>
                <div style={{ marginRight: "33%", flex: "auto" }}>
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

// TODO: Use Grid instead?
// function FlexRow({ sections }) {
//     // console.log("FlexRow :::", sections)
//     return (
//         <div className="row">
//             <div className="row-container flex-row">
//                 {sections && sections.map((section, i) => {
//                     return (
//                         <div className="section" key={"section" + i}>
//                             {section.content}
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

export default GetHelp;