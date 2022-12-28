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
        stat: "$568,000",
        text: "total contributed to our Groceries & Essentials and Direct Action Funds",
    }, {
        stat: "$562,800",
        text: "total distributed to neighbors through our funds",
    }, {
        stat: "78",
        text: "volunteers matched as regular shoppers for their neighbors",
    }, {
        stat: "1,524",
        text: "requests fulfilled for groceries and essential supplies",
    }, {
        // to be updated
        stat: "8,837",
        text: "responses to calls, texts, and voicemails",
    }, {
        stat: "1,826",
        text: "members of our Slack community",
    }
]
