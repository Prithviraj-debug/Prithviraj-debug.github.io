import React, { Component } from 'react'
import "./Footer.css"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { name, email, message } = this.state;
        return (
            <footer>
                <div class="visit">
                    <h1>Let's Connect..</h1>
                    <div class="socials">
                        <a href="https://twitter.com/Raj0690" className='social'>Twitter</a>
                        <a href="https://medium.com/@prithvie" className='social'>Medium</a>
                        <a href="https://www.linkedin.com/in/prithviraj-mahamulkar-1b4b861b1/" className='social'>LinkedIn</a>
                        <a href="https://github.com/Prithviraj-debug" className='social'>Github</a>
                        <a href="https://www.behance.net/rajmahamulkar" className='social'>Behance</a>
                    </div>
                </div>



                <form onSubmit={this.handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <h1>Write Me!!</h1>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Name </label><input type="text" name="name" id="fname" autocomplete="off" aria-labelledby="placeholder-fname" value={name} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label>Email </label><input type="email" name="email" value={email} onChange={this.handleChange} />
                    </p>
                    <p>
                        <textarea name="message" id="feedback" cols="30" rows="10" placeholder="please leave your feedback.." value={message} onChange={this.handleChange} ></textarea>
                    </p>
                    <p>
                        <button id="submit" type="submit" onClick={this.handleChange}>Send</button>
                    </p>
                </form>
            </footer>
        )
    }
}
