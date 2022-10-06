import React from "react"
import { BackIcon, CodeIcon, CreativeIcon, FrameIcon, FrontIcon, GameIcon } from "../icons"

export default class Services extends React.Component {
    render() {
        return (
            <section class="services" id="services">
                <h2 class="heading service-heading"> What I Do. </h2>

                <div class="service-contents">
                    <div class="service-content">
                        <div class="service-icon">
                            <CodeIcon />
                        </div>

                        <h3>Programming/Scripting</h3>
                        <p>Javascript, C#, C++, HTML/CSS</p>
                    </div>
                    <div class="service-content">
                        <div class="service-icon">
                            <GameIcon />
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <h3>Game Development</h3>
                        <p>Unity and Unreal Engine</p>
                    </div>
                    <div class="service-content">
                        <div class="service-icon">
                            <FrontIcon />
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3>Front end</h3>
                        <p>HTML/HTML5, CSS, Bootstrap, Jquery</p>
                    </div>
                    <div class="service-content">
                        <div class="service-icon">
                            <BackIcon />
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3>Back end</h3>
                        <p>NPM, Node, SQL</p>
                    </div>
                    <div class="service-content">
                        <div class="service-icon">
                            <FrameIcon/>
                        </div>
                        <h3>Frameworks</h3>
                        <p>React, Express</p>
                    </div>
                    <div class="service-content">
                        <div class="service-icon">
                            <CreativeIcon />
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h3>Creative</h3>
                        <p>Adobe Suite, Blender, Davinci Resolve</p>
                    </div>
                </div>
            </section>
        )
    }
}