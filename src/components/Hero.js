import React from 'react';

export default class Hero extends React.Component {
    render() {
        return (
            <section class="banner" id='home'>
                <div class="textBx">
                    <h2>Hello, I'm<br /> <span>Dylan Turner</span></h2>
                    <h6>Developer and Designer</h6>
                    <button class="btn btn-about">
                        <a href="#about">About Me</a>
                    </button>
                </div>
            </section>
        )
    }
}