import React from 'react';
import "./GiveHelp.css";
import peopleMakingDonationsIMG from "../../assets/people-making-donations.png"
import newsletterIMG from "../../assets/newsletter.png"
import pullingBoxesIMG from "../../assets/pulling-boxes.png"
import { MUTUAL_AID_SLACK_LINK, MUTUAL_AID_INSTAGRAM_FRIDGE_LINK, MUTUAL_AID_WIKIPEDIA, MUTUAL_AID_NOTION_LINK, FLYER_PDF_LINK } from "../../config.js"

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
    const communityFridgeLink = <a href="/get-help" alt="community fridge link" className="img">Community Fridge</a>,
        HowYouCanHelp = () => <div className="section-1 text-group">
            <div className="header1">How you can help</div>
            <ul>
                <li>Shop for groceries and essential supplies for people isolating at home</li>
                <li>Help clean and stock our {communityFridgeLink}</li>
                <li>Provide transportation for making deliveries of groceries and essential supplies</li>
                <li>Create connections with neighbors and neighborhood groups</li>
                <li>Donate gently-used goods like mattresses, electronics, clothing, and other necessities</li>
            </ul>
        </div>,
        List = () => <div className="fancy-list-wrapper section-2">
            <div className="header1">New to Mutual Aid?</div>
            <div>
                <div className="fancy-list-container standard-text">
                    <span><b>01</b></span>
                    <span>Learn what <a className="text-important" href={MUTUAL_AID_WIKIPEDIA} alt="mutual aid wikipedia link">mutual aid</a> means (we practice solidarity, not charity)</span>
                </div>
                <div className="fancy-list-container standard-text">
                    <span><b>02</b></span>
                    <span>Take a minute to fill out our <a className="text-important" href={MUTUAL_AID_NOTION_LINK} alt="mutual aid notion link">volunteer intake form</a></span>
                </div>
                <div className="fancy-list-container standard-text">
                    <span><b>03</b></span>
                    <span>Join us on <a className="text-important" href={MUTUAL_AID_SLACK_LINK} alt="mutual aid slack link">Slack</a> to organize with other volunteers</span>
                </div>
            </div>
        </div>

    return <section className="how-you-can-help standard-text">
        <div className="row-container">
            <HowYouCanHelp />
            <img className="pulling-boxes-img" src={pullingBoxesIMG} alt="image of person pulling boxes" />
            <List />
        </div>
    </section>
}

const Stats = () => {
    const tiles = [{
        title: "1,325",
        subtitle: "Slack members",
    }, {
        title: "145",
        subtitle: "neighbors making deliveries",
    }, {
        title: "52",
        subtitle: "intake and dispatch volunteers",
    }, {
        title: "50",
        subtitle: "neighbors supporting the Community Fridge",
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
        <ol>
            <li><b>Grocery shop for a neighbor:</b> Volunteer to take a one-time request, or sign up to be someone’s weekly shopper. You can be reimbursed from our Groceries & Essentials Fund.</li>
            <li><b>Help stock and/or clean our Community Fridge:</b> Help stock and/or clean our Community Fridge: You can stop by and donate food any time, or sign up to help clean and organize the fridge regularly. Follow <a href={MUTUAL_AID_INSTAGRAM_FRIDGE_LINK} alt="mutual aid fridge instagram link">@fgcommunityfridge</a> to learn more.</li>
            <li><b>Support weekly food pantry distributions:</b> We help with large scale food pantry and meal deliveries in collaboration with community organizations, which benefit 1,000+ families each week.</li>
        </ol>
    </div>

    const WorkingGroups = () => <div className="working-groups section-2">
        <div className="header1">Working groups</div>
        <div>Our working groups coordinate on specific focuses within our mutual aid effort. Anyone is welcome to join and contribute in whatever capacity they can. Some of our active working groups include:</div>
        <ul>
            <li>Advocacy</li>
            <li>Community Building</li>
            <li>Community Fridge</li>
            <li>Design</li>
            <li>Fundraising</li>
            <li>Intake</li>
            <li>Tech Support</li>
        </ul>
    </div>

    return <section className="food-security-and-working-groups">
        <div className="row-container standard-text two-in-one-v2">
            <FoodSecurity />
            <img className="people-making-donations-img" src={peopleMakingDonationsIMG} alt="people making donations" />
            <WorkingGroups />
        </div>
    </section>
}

const HelpUsSpreadTheWord = () => (
    <section className="help-us-spread-the-word">
        <div className="row-container standard-text split-wrapper">
            <div>
                <div className="header1">Help us spread the word</div>
                <div>
                    <div>If you have access to a printer, print and share our flyers, or make one of your own. Flyering your building/street/block is key to connecting those in need to our resources.<br /><br />Our flyer is available in English, Spanish, and Chinese. Download all three in one PDF <a href={FLYER_PDF_LINK} alt="flyer pdf link">here</a>.</div>
                </div>
            </div>
            <img src={newsletterIMG} alt="newsletter" />
        </div>
    </section>
)


export default GiveHelp;