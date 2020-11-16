import React from "react";
import GenericElement from "../layout/GenericElement.js"
import { rows } from "./Donate.service.js"
import "./Donate.css"

function Donate() {
    return (
        <div className="page page-donate">
            <section className="jumbo-title donate-font-color donate-background-color">Support mutual aid financially</section>
            <section className="group-1">
                <div className="row-container">

                    <div className="split">
                        <div className="title">Mutual Aid Fund</div>
                        <div className="paragraph">This fund makes it possible to support anyone in this crisis regardless of individual financial resources. 100% goes towards purchasing groceries and essential supplies for people in our community (transparent fund tracking is being handled via the Slack). These essentials are then dropped off by delivery volunteers.</div>
                        <div className="stats">
                            <div className="stat">
                                <div className="value">+$45k</div>
                                <div className="type">total raised</div>
                            </div>
                            <div className="stat">
                                <div className="value">-$36.7k</div>
                                <div className="type">total disbursed</div>
                            </div>
                        </div>
                    </div>

                    <div className="split">
                        <div className=" contribute">
                            <div className="title">CONTRIBUTE</div>
                            <div>
                                <div className="vendor">Venmo</div>
                                <div className="info">@bklynneighbors if prompted, enter digits 1139</div>
                                <div className="vendor">CashApp</div>
                                <div className="info">$bklynneighbors</div>
                                <div className="vendor">PayPal, Google Pay</div>
                                <div className="info">bklynneighbors@gmail.com</div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </div>
    )
}

export default Donate;