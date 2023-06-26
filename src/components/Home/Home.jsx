import React, { Component } from 'react';
import "./Home.css"
// import down from "./down.svg"
import img from "./img.svg"
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer';
import Hero from './hero';
import Projects from './Projects';
import Skills from './Skills';

export default class Home extends Component {
    render() {
        return (
            <div id='home'>
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Footer />
            </div>
        )
    }
}