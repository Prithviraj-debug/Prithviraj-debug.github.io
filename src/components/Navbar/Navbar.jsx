import React, { Component } from 'react'
import "./Navbar.css"
import logo from "./logo.png"

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar">
                <div class="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="links">
                    <li><a href="#details">about</a> </li>
                    <li><a href="#projects">projects</a> </li>
                </ul>
            </nav>
        )
    }
}
