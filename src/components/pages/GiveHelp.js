import React from 'react';
import "./GiveHelp.css";
import peopleMakingDonationsIMG from "../../assets/people-making-donations.png"
import newsletterIMG from "../../assets/newsletter.png"
import pullingBoxesIMG from "../../assets/pulling-boxes.png"
import { MUTUAL_AID_SLACK_LINK, MUTUAL_AID_WIKIPEDIA, MUTUAL_AID_NOTION_LINK, FLYER_PDF_LINK } from "../../config.js"

function GiveHelp() {
    return (
        <div className="page give-help polygon-page">
            <section className="jumbo-title">Join our growing community</section>
            <Help />
            <Stats />
            <FoodSecurityAndWorkingGroups />
            <HelpUsSpreadTheWord />
        </div>
    )
}

function Help() {
    const HowYouCanHelp = () => <div className="section-1 text-group">
            <div className="header1">How you can help</div>
            We appreciate any contributions of your time, money, or skills.
            <ul>
                <li>Shop for people who can't shop for themselves - the cost can be covered by our Groceries & Essentials Fund</li>
                <li>Provide transportation for making deliveries of groceries and essential supplies</li>
                <li>Create connections with neighbors and neighborhood groups</li>
            </ul>
        </div>,
        List = () => <div className="fancy-list-wrapper section-2">
            <div className="header1">New to Mutual Aid?</div>
            <div>
                <div className="fancy-list-container standard-text">
                    <span><b>1</b></span>
                    <span>Learn what <a className="text-important" href={MUTUAL_AID_WIKIPEDIA} alt="mutual aid wikipedia link" target="_blank" rel="noreferrer">mutual aid</a> means (we practice solidarity, not charity)</span>
                </div>
                <div className="fancy-list-container standard-text">
                    <span><b>2</b></span>
                    <span>Take a minute to fill out our <a className="text-important" href={MUTUAL_AID_NOTION_LINK} alt="mutual aid notion link" target="_blank" rel="noreferrer">volunteer intake form</a></span>
                </div>
                <div className="fancy-list-container standard-text">
                    <span><b>3</b></span>
                    <span>Join us on <a className="text-important" href={MUTUAL_AID_SLACK_LINK} alt="mutual aid slack link" target="_blank" rel="noreferrer">Slack</a> to organize with other volunteers</span>
                </div>
            </div>
        </div>

    return <section className="how-you-can-help standard-text">
        <div className="row-container">
            <HowYouCanHelp />
            <img className="pulling-boxes-img" src={pullingBoxesIMG} alt="person pulling boxes" />
            <List />
        </div>
    </section>
}

const Stats = () => {
    const tiles = [{
        title: "1,903",
        subtitle: "Slack members",
    }, {
        // to be updated
        title: "145",
        subtitle: "neighbors making deliveries",
    }, {
        // to be updated
        title: "52",
        subtitle: "intake and dispatch volunteers",
    }]
    return (
        <section className="stats">
            <div className="give-help-stats row-container">
                {tiles && tiles.map(({ title, subtitle }, i) => (
                    <div className="tile" key={i}>
                        <div className="tile-title header1 font-color-primary">{title}</div>
                        <div className="tile-subtitle standard-text">{subtitle}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function FoodSecurityAndWorkingGroups() {
    const FoodSecurity = () => <div className="food-security section-1">
        <div className="header1">Food security</div>
        <div className="title">Addressing food security is a key part of our mutual aid effort. Here’s how you can help:</div>
        <div className="fancy-list-wrapper section-2">
            <div className="fancy-list-container standard-text">
                <span><b>1</b></span>
                <span><b>Grocery shop for a neighbor.</b> Volunteer to take a one-time request, or sign up to be someone’s monthly shopper. You can be reimbursed from our Groceries & Essentials Fund.</span>
            </div>
            <div className="fancy-list-container standard-text">
                <span><b>2</b></span>
                <span><b>Support weekly food pantry distributions.</b> We help with large scale food pantry and meal deliveries in collaboration with community organizations, which benefit 1,000+ families each week.</span>
            </div>
        </div>
    </div>

    return <section className="food-security-and-working-groups">
        <div className="row-container standard-text two-in-one-v2">
            <FoodSecurity />
            <img className="people-making-donations-img" src={peopleMakingDonationsIMG} alt="people making donations" />
        </div>
    </section>
}

const HelpUsSpreadTheWord = () => (
    <section className="help-us-spread-the-word">
        <div className="row-container standard-text split-wrapper">
            <div>
                <div className="header1">Help us spread the word</div>
                <div>
                    <div>If you have access to a printer, print and share our flyers, or make one of your own. Flyering your building/street/block is key to connecting those in need to our resources.<br /><br />Our flyer is available in English, Spanish, and Chinese. Download all three in one PDF <a href={FLYER_PDF_LINK} alt="flyer pdf link" target="_blank" rel="noreferrer">here</a>.</div>
                </div>
            </div>
            <img src={newsletterIMG} alt="newsletter" />
        </div>
    </section>
)


export default GiveHelp;