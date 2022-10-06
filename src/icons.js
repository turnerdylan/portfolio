import { FaGamepad, FaDatabase, FaMapMarkerAlt, FaCodepen } from 'react-icons/fa';
import {BsCodeSlash, BsFillTelephoneFill} from 'react-icons/bs';
import {MdComputer, MdOutlineEmail} from 'react-icons/md';
import {IoMdBrush} from 'react-icons/io';
import React from 'react';

class GameIcon extends React.Component {
    render() {
        return <FaGamepad />
    }
}

class CodeIcon extends React.Component {
    render() {
        return <BsCodeSlash />
    }
}

class FrontIcon extends React.Component {
    render() {
        return <MdComputer />
    }
}

class BackIcon extends React.Component {
    render() {
        return <FaDatabase />
    }
}

class FrameIcon extends React.Component {
    render() {
        return <FaCodepen />
    }
}

class CreativeIcon extends React.Component {
    render() {
        return <IoMdBrush />
    }
}

class MapIcon extends React.Component {
    render() {
        return <FaMapMarkerAlt />
    }
}

class PhoneIcon extends React.Component {
    render() {
        return <BsFillTelephoneFill />
    }
}

class EmailIcon extends React.Component {
    render() {
        return <MdOutlineEmail />
    }
}

//scripting, databases, cloud, game dev, front end, back end, frameworks, creative
//web frameworks/tech: nodejs, react, express, npm

export { 
    GameIcon, 
    CodeIcon,
    FrontIcon,
    BackIcon,
    FrameIcon,
    CreativeIcon, 
    MapIcon,
    PhoneIcon,
    EmailIcon
}