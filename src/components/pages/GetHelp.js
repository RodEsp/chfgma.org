import "./GetHelp.css"

import { COVID_TEXTING_HOTLINE, FOOD_RESOURCES_ENGLISH, MUTUAL_AID_AIRTABLE_LINK, MUTUAL_AID_EMAIL_ADDRESS_HELLO, MUTUAL_AID_NYC_LINK, MUTUAL_AID_PHONE_NUMBER, MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE, MUTUAL_AID_REQUEST_FORM, NOTIFY_NYC_LINK, NYC_WELL_LINK } from "../../config.js"

import React from 'react';

/** deleted community fridge component for now 11/5/2023 */
const GetHelp = () => (
    <div className="page get-help">
        <section className="jumbo-title">The neighborhood's got you</section>
        <SubmitARequest />
        <OtherResources />
    </div>
)

function SubmitARequest() {
    const phoneNumberLink = <a href={`tel:${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`} alt={`mutual aid phone number: ${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`}>(862)-277-0747</a>,
        bulletList = ["Funds to help cover groceries and essentials", "Connect you with a neighbor who can help with errands", "Help identify other useful resources"].map((item) => <li key={item}>{item}</li>)
    return (
        <section className="submit-a-request">
            <div className="row-container">
                <div className="split-wrapper">
                    <div className="text-group">
                        <div className="title">Submit a request</div>
                        <p className="subtitle">
                            You can make a request for assistance by texting or calling our hotline at {phoneNumberLink} or by <a href={MUTUAL_AID_REQUEST_FORM} target="_blank" rel="noreferrer">filling out this form</a>.
                        </p>
                    </div>
                    <div className="text-box">
                        <div className="title">Examples of requests you can make</div>
                        <ul className="list">
                            {bulletList}
                        </ul>
                        <p>We’re resourceful and flexible—let us know what you need, and we’ll do our best to help</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function OtherResources() {
    const covidTextingHotlineLink = <a href={COVID_TEXTING_HOTLINE} alt="covid texting hotline">{COVID_TEXTING_HOTLINE}</a>
    const databaseLink = <a href={MUTUAL_AID_AIRTABLE_LINK} alt="mutual aid database">database</a>
    const mutualAidHelloEmailLink = <a href={MUTUAL_AID_EMAIL_ADDRESS_HELLO} alt="mutual aid email address">{MUTUAL_AID_EMAIL_ADDRESS_HELLO}</a>

    return (
        <section className="other-resources">
            <div className="row-container">
                <div className="text-group">
                    <h1 className="title">Other Resources</h1>
                    <div className="header2">NYC Resources</div>
                    <p><b><u><a href={MUTUAL_AID_NYC_LINK} alt="mutual aid nyc link" target="_blank" rel="noreferrer">Mutual Aid NYC</a></u></b> is a citywide network of groups like ours organizing to provide aid and support to New Yorkers in the midst of the COVID-19 pandemic. If you’re outside our neighborhood, we recommend visiting mutualaid.nyc to find a group closer to you.</p>
                    <p><b><u><a href={NYC_WELL_LINK} alt="nyc well link" target="_blank" rel="noreferrer">NYC Well</a></u></b> is New York City's free and confidential 24/7 mental health support service. </p>
                    <p><b><u><a href={NOTIFY_NYC_LINK} alt="notify nyc link" target="_blank" rel="noreferrer">Notify NYC</a></u></b> is the city’s official source of information about emergency alerts and important city services. Text COVID to {covidTextingHotlineLink} to get the latest updates on COVID-19 in NYC.</p>
                    <p>
                        <b><a href="https://www.hungerfreeamerica.org/" target="_blank" rel="noreferrer">Hunger Free NYC</a></b>'s neighborhood guide to food and assistance in Brooklyn.
                        <br />
                        <span>Available in </span>
                        <b><u>
                            <a href={FOOD_RESOURCES_ENGLISH} alt="food resources link english" target="_blank" rel="noreferrer">
                                English
                            </a>
                        </u></b>
                        <span> and </span>
                        <b><u>
                            <a href={FOOD_RESOURCES_ENGLISH} alt="food resources link" target="_blank" rel="noreferrer">
                               Spanish
                            </a>.
                        </u></b>

                    </p>

                    <div className="header2">Local Organizations</div>
                    <p>We’ve created a {databaseLink} of organizations and resources that serve a range of different needs throughout our community. Click on each one to expand it and see more information. This list is always evolving. If you think any of them can help you (or if you can help them!), they are all available for you to contact or pursue directly.</p>
                    <p>If you have information that will allow us to update or add to this list, please email us at {mutualAidHelloEmailLink} to let us know.</p>
                </div>
            </div>
        </section>
    )
}

export default GetHelp;