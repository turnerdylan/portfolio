import React from "react"

export default class NavBar extends React.Component {
    render() {
        return (
            // <nav class="navbar navbar-expand-lg navbar-light bg-light">
            //     <a class="navbar-brand logo" href="#home">Dylan Turner</a>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>
            //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            //         <div class="navbar-nav">
            //             <a class="nav-item nav-link active" href="#home">Home</a>
            //             <a class="nav-item nav-link" href="#about">About</a>
            //             <a class="nav-item nav-link" href="#services">What I do</a>
            //             <a class="nav-item nav-link" href="#work">Portfolio</a>
            //         </div>
            //     </div>
            // </nav>

            <header>
                <a href="#home" class="logo">Dylan</a>
                <div class="toggle"></div>
                <ul class="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">What I do</a></li>
                    <li><a href="#work">Portfolio</a></li>
                </ul>
            </header>
        );
    }
}