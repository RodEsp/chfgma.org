import React from 'react';
import "./GetHelp.css"
import { ButtonLink } from "../layout/buttons/ButtonLink.js"
// import airTableScreenshot from "../../assets/airtable-screenshot.png"
import config from "../../config.js"

const {
    MUTUAL_AID_AIRTABLE_LINK,
    MUTUAL_AID_EMAIL_ADDRESS_HELLO,
    MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE,
    MUTUAL_AID_PHONE_NUMBER,
    MUTUAL_AID_FRIDGE_LOCATION_LINK,
    MUTUAL_AID_INSTAGRAM_FRIDGE_LINK
} = config;


function GetHelp() {

    return (
        <div className="page get-help">
            <section className="jumbo-title">The neighborhood's got you</section>
            <section className="submit-a-request">
                <div className="row-container">
                    <div className="split-wrapper">
                        <div className="text-group">
                            <div className="title">Submit a request</div>
                            <p className="subtitle">
                                If you’re new to Clinton Hill Fort Greene Mutual Aid, we recommend calling our hotline at <a href={`tel:${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`} alt={`mutual aid phone number: ${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`}>{MUTUAL_AID_PHONE_NUMBER}</a>. A member of our intake team will respond as soon as possible to take your request. You can also submit your request via the link below or email us at <a href={`mailto:${MUTUAL_AID_EMAIL_ADDRESS_HELLO}`} alt={`mutual aid email address: ${MUTUAL_AID_EMAIL_ADDRESS_HELLO}`}>{MUTUAL_AID_EMAIL_ADDRESS_HELLO}</a>.
                            </p>
                        </div>
                        <div className="text-box">
                            <div className="title">SOME WAYS WE CAN HELP</div>
                            <ul className="list">
                                <li>Groceries </li>
                                <li>Prescription medicine pickup </li>
                                <li>Sourcing and delivering gently-used furniture and electronics </li>
                                <li>Translation, paperwork, tech support</li>
                            </ul>
                        </div>
                    </div>
                    <ButtonLink className="button-request-help" linkTo="/get-help" text="Request aid" styles={{ backgroundColor: "#432BFA" }} />
                </div>
            </section>
            <section className="community-fridge">
                <div className="row-container">
                    <div className="split-wrapper">
                        <div className="text-group">
                            <div className="title">Community fridge</div>
                            <p className="subtitle">
                                Located at <a href={MUTUAL_AID_FRIDGE_LOCATION_LINK} alt="mutual aid fridge location link">357 Myrtle Ave</a>, outside of Farmer in the Deli, our community fridge and pantry provides a regular source of groceries and prepared meals to our community. Everyone is welcome to take what they need, no questions asked. Both fridge and pantry are stocked by neighbors, local businesses, and anyone wishing to donate fresh produce, frozen foods, and pantry items. It is maintained and cleaned by volunteers daily.
                            </p>
                            <p className="subtitle">
                                Follow <a href={MUTUAL_AID_INSTAGRAM_FRIDGE_LINK} alt="mutual aid fridge instagram link">@fgcommunityfridge</a> for updates throughout the day.
                            </p>
                        </div>
                        <img />
                    </div>
                </div>
            </section>
        </div>
    )
}




export default GetHelp;