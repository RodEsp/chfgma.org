import React from "react";
import "./Footer.css";
import iconFacebook from "../../assets/icons/icon-facebook.svg"
import iconInstagram from "../../assets/icons/icon-instagram.svg"

// TODO: move to config
const MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK = "";
const MUTUAL_AID_SLACK_LINK = "";
const MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE = "+1",
      MUTUAL_AID_PHONE_NUMBER = "862-277-0747";
const MUTUAL_AID_EMAIL_ADDRESS_HELLO = "hello@chfgma.org";
const MUTUAL_AID_INSTAGRAM_LINK = "",
      MUTUAL_AID_FACEBOOK_LINK = "";

// TODO: Style links
// TODO: Links
function Footer() {
    return (
        <div className="footer">
            <div className="footer-content-wrapper">
            <div className="footer-stay-connected">
                <div className="footer-title capitalize footer-title"><b>clinton hill fort greene mutual aid</b></div>
                <div><a className="link-text" href={MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK} alt="subscribe to newsletter link">Subscribe</a> to our weekly newsletter</div>
                <div><a className="link-text" href={MUTUAL_AID_SLACK_LINK} alt="slack link">Join</a> us on Slack</div>
            </div>
            <div className="footer-contact-info">
                <div className="footer-contact-info-section">
                    <div className="footer-contact-info-title footer-title">Call or text</div>
                    <div><a href={`tel:${MUTUAL_AID_PHONE_NUMBER_COUNTRY_CODE}${MUTUAL_AID_PHONE_NUMBER}`} alt="mutual aid phone number">{MUTUAL_AID_PHONE_NUMBER}</a></div>
                </div>
                <div className="footer-contact-info-section">
                    <div className="footer-contact-info-title footer-title">Email</div>
                    <div><a href={`mailto:${MUTUAL_AID_EMAIL_ADDRESS_HELLO}`}>{MUTUAL_AID_EMAIL_ADDRESS_HELLO}</a></div>
                </div>
                <div className="footer-contact-info-section">
                    <div className="footer-contact-info-title footer-title">Follow</div>
                    <div className="footer-contact-info-social-media-icons-wrapper">
                        <a href={MUTUAL_AID_INSTAGRAM_LINK}><img src={iconInstagram} alt="mutual aid instagram" /></a>
                        <a href={MUTUAL_AID_FACEBOOK_LINK}><img src={iconFacebook} alt="mutual aid facebook" /></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;