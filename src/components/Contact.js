import React from "react"
import { EmailIcon, MapIcon, PhoneIcon } from "../icons"

export default class Contact extends React.Component {
    render() {
        return (
            <section class="contact" id="contact">
                <h2 className="heading">Contact me</h2>
                <div class="contact-content">
                    <div class="contact-info-bx">
                        <div class="box">
                            <div class="icon">
                                <MapIcon/>
                            </div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>470 Woodside Ave, #14<br /> Park City UT, 84060</p>
                            </div>
                        </div>

                        <div class="box">
                            <div class="icon">
                                <PhoneIcon/>
                            </div>
                            <div class="text">
                                <h3>Phone</h3>
                                <p>+1 719 238 7150</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <EmailIcon/>
                            </div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>turner.t.dylan@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}