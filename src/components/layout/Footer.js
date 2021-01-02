import React from "react";
import config from "../../config.js"
import "./Footer.css";
import iconFacebook from "../../assets/icons/icon-facebook.svg"
import iconInstagram from "../../assets/icons/icon-instagram.svg"

const {
    MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK,
    MUTUAL_AID_SLACK_LINK,
    MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE,
    MUTUAL_AID_PHONE_NUMBER,
    MUTUAL_AID_EMAIL_ADDRESS_HELLO,
    MUTUAL_AID_INSTAGRAM_LINK,
    MUTUAL_AID_FACEBOOK_LINK
} = config;

export default () => (
    <div className="footer">
        <hr/>
        <div className="content-wrapper">
            <div className="stay-connected">
                <div className="title capitalize"><b>clinton hill fort greene mutual aid</b></div>
                <div className="subtitle"><a href={MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK} alt={`subscribe to newsletter link: ${MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK}`}>Subscribe</a> to our weekly newsletter</div>
                <div className="subtitle">Join us on <a href={MUTUAL_AID_SLACK_LINK} alt={`slack link: ${MUTUAL_AID_SLACK_LINK}`}>Slack</a></div>
            </div>
            <div className="contact-info">
                <div className="section">
                    <div className="title">CALL OR TEXT</div>
                    <div><a href={`tel:${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`} alt={`mutual aid phone number: ${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`}>{MUTUAL_AID_PHONE_NUMBER}</a></div>
                </div>
                <div className="section">
                    <div className="title">EMAIL</div>
                    <div><a className="link-text" href={`mailto:${MUTUAL_AID_EMAIL_ADDRESS_HELLO}`} alt={`mutual aid email address: ${MUTUAL_AID_EMAIL_ADDRESS_HELLO}`}>{MUTUAL_AID_EMAIL_ADDRESS_HELLO}</a></div>
                </div>
                <div className="section">
                    <div className="title">FOLLOW</div>
                    <div className="social-media-icons-wrapper">
                        <a href={MUTUAL_AID_INSTAGRAM_LINK} alt={`mutual aid instagram link: ${MUTUAL_AID_INSTAGRAM_LINK}`}><img src={iconInstagram} alt="mutual aid instagram" /></a>
                        <a href={MUTUAL_AID_FACEBOOK_LINK} alt={`mutual aid facebook link: ${MUTUAL_AID_FACEBOOK_LINK}`}><img src={iconFacebook} alt="mutual aid facebook" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
