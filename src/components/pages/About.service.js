// Icons
import iconPicIMG from "../../assets/icons/icon-pic.png";
import iconMailboxIMG from "../../assets/icons/icon-mailbox.png";
import iconMessagesIMG from "../../assets/icons/icon-message.png";
import { MUTUAL_AID_INSTAGRAM_LINK, MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK, MUTUAL_AID_WHATSAPP_GROUP_LINK } from "../../config"

export const stayUpToDateCards = [{
    image: iconMailboxIMG,
    alt: "newsletter link icon",
    text: "Subscribe to our newsletter",
    link: MUTUAL_AID_NEWSLETTER_SUBSCRIBE_LINK,
}, {
    image: iconMessagesIMG,
    alt: "whatsapp link icon",
    text: "Join the conversation on WhatsApp",
    link: MUTUAL_AID_WHATSAPP_GROUP_LINK,
}, {
    image: iconPicIMG,
    alt: "instagram link icon",
    text: "Follow us on Instagram for updates",
    link: MUTUAL_AID_INSTAGRAM_LINK,
}];

export const stats = [
    // updated as of July 2025
    {
        stat: "$840,312",
        text: "total distributed to neighbors through our funds",
    }, {
        stat: "824",
        text: "households helped since inception",
    }, {
        stat: "62",
        text: "volunteers matched as regular shoppers for their neighbors",
    }, {
        stat: "1,020",
        text: "requests fulfilled so far in 2025",
    }, {
        stat: "10,341",
        text: "total requests fulfilled",
    }, {
        stat: "14,348",
        text: "responses to calls, texts, and voicemails",
    }, {
        stat: "1,737",
        text: "newsletter subscribers",
    }, {
        stat: "3,708",
        text: "followers on Instagram"
    }
]
