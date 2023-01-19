import React from 'react';
import "./GetHelp.css"
import { MUTUAL_AID_REQUEST_FORM, MUTUAL_AID_AIRTABLE_LINK, MUTUAL_AID_EMAIL_ADDRESS_HELLO, MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE, MUTUAL_AID_PHONE_NUMBER, MUTUAL_AID_INSTAGRAM_FRIDGE_LINK, MUTUAL_AID_SLACK_LINK, COVID_TEXTING_HOTLINE, MUTUAL_AID_NYC_LINK, HELP_NOW_NYC_LINK, NYC_WELL_LINK, NOTIFY_NYC_LINK } from "../../config.js"
import communityFridgeImg from "../../assets/community-fridge.png"



const GetHelp = () => (
    <div className="page get-help">
        <section className="jumbo-title">The neighborhood's got you</section>
        <SubmitARequest />
        <CommunityFridge />
        <OtherResources />
    </div>
)

function SubmitARequest() {
    const phoneNumberLink = <a href={`tel:${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`} alt={`mutual aid phone number: ${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`}>(862)-277-0747</a>,
        bulletList = ["Funds to help cover groceries and essentials", "Connect you with a neighbor who can help with errands", "Help identify other useful resources"].map((item) => <li>{item}</li>)
    return (
        <section className="submit-a-request">
            <div className="row-container">
                <div className="split-wrapper">
                    <div className="text-group">
                        <div className="title">Submit a request</div>
                        <p className="subtitle">
                            You can make a request for assistance by texting or calling our hotline at {phoneNumberLink} or by <a href={MUTUAL_AID_REQUEST_FORM} target="_blank">filling out this form</a>.
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

function CommunityFridge() {
    return (
        <section className="community-fridge">
            <div className="row-container">
                <div className="split-wrapper">
                    <div className="text-group">
                        <div className="title">Community fridge</div>
                        <p className="subtitle">The community fridge is not currently in operation, but we're working on finding a new location!</p>
                        <p className="subtitle">Follow <a href={MUTUAL_AID_INSTAGRAM_FRIDGE_LINK} alt="mutual aid fridge instagram link" target="_blank">@fgcommunityfridge</a> for updates.</p>
                    </div>
                    <img className="split-col-img" src={communityFridgeImg} alt="community fridge" />
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
                    <p><b><u><a href={MUTUAL_AID_NYC_LINK} alt="mutual aid nyc link" target="_blank">Mutual Aid NYC</a></u></b> is a citywide network of groups like ours organizing to provide aid and support to New Yorkers in the midst of the COVID-19 pandemic. If you’re outside our neighborhood, we recommend visiting mutualaid.nyc to find a group closer to you.</p>
                    <p><b><u><a href={NYC_WELL_LINK} alt="nyc well link" target="_blank">NYC Well</a></u></b> is New York City's free and confidential 24/7 mental health support service. </p>
                    <p><b><u><a href={NOTIFY_NYC_LINK} alt="notify nyc link" target="_blank">Notify NYC</a></u></b> is the city’s official source of information about emergency alerts and important city services. Text COVID to {covidTextingHotlineLink} to get the latest updates on COVID-19 in NYC.</p>

                    <div className="header2">Local Organizations</div>
                    <p>We’ve created a {databaseLink} of organizations and resources that serve a range of different needs throughout our community. Click on each one to expand it and see more information. This list is always evolving. If you think any of them can help you (or if you can help them!), they are all available for you to contact or pursue directly.</p>
                    <p>If you have information that will allow us to update or add to this list, please email us at {mutualAidHelloEmailLink} to let us know.</p>
                </div>
            </div>
        </section>
    )
}

export default GetHelp;