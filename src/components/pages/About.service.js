// Icons
import iconPicIMG from "../../assets/icons/icon-pic.png";
import iconMailboxIMG from "../../assets/icons/icon-mailbox.png";
import iconMessagesIMG from "../../assets/icons/icon-message.png";
import { MUTUAL_AID_INSTAGRAM_LINK, MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK, MUTUAL_AID_SLACK_LINK } from "../../config"

export const stayUpToDateCards = [{
    image: iconMailboxIMG,
    alt: "newsletter link icon",
    text: "Subscribe to our weekly newsletter",
    link: MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK,
}, {
    image: iconMessagesIMG,
    alt: "slack link icon",
    text: "Join the conversation on Slack",
    link: MUTUAL_AID_SLACK_LINK,
}, {
    image: iconPicIMG,
    alt: "instagram link icon",
    text: "Follow us on Instagram for updates",
    link: MUTUAL_AID_INSTAGRAM_LINK,
}];

export const stats = [
    {
        stat: "$146,143",
        text: "total contributed to our Groceries & Essentials and Direct Action Funds",
    }, {
        stat: "25,000",
        text: "grocery packages delivered in collaboration with local food pantries",
    }, {
        stat: "2000",
        text: "requests fulfilled for groceries and essential supplies",
    }, {
        stat: "974",
        text: "unique callbacks to requests on our hotline",
    }, {
        stat: "1,279",
        text: "members of our Slack community",
    }, {
        stat: "948",
        text: "wellness calls made",
    }
]