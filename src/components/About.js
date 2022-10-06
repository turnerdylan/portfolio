import React from "react"

export default class About extends React.Component {
    render() {
        return (
            <section class="about" id="about">
                <h2 class="heading">About Me.</h2>
                <div class="about-content">
                    <div class="content-side">
                        <p>
                            Hey there! Welcome to my portfolio! I'm Dylan, a designer and a developer who loves bringing new
                            ideas to life!
                            With experience in software and game development, I've worked on a number of projects,
                            ranging from simple blogs to a phone-based computer vision arcade!
                        </p>
                        <br />
                        <p>
                            I'm inspired by my love of both technical and creative work. Always eager to learn new technologies
                            and concepts,
                            I consider myself 'Always a student', and continually strive to find fun and unique perspectives to
                            show in my work.
                        </p>
                        <br />
                        <p>
                            Recently I've worked on a few games projects but I'm making a move towards web development.
                            Im always working on something new, so feel free to contact me for more information.
                        </p>
                    </div>
                    <div class="image-side">
                        <img src={require("../assets/img/selfie.jpg")} class="my-img" alt="Dylan Turner" title="Dylan Turner" />
                    </div>
                </div>
            </section>
        )
    }
}