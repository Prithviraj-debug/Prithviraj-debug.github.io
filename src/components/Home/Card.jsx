import React, { Component } from 'react'
import "./card.css"

export default class Card extends Component {
    render() {
        return (
            <div class="card">
                <img src={this.props.pic} class="thumb" alt="" />
                <div class="info">
                    <h1>{this.props.name}</h1>
                    <button><a href={this.props.link}>visit site</a> </button>
                </div>
            </div>
        )
    }
}
