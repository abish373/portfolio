import React from 'react'
import NavBar from '../menu/NavBar'
import './contactform.css'

function ContactForm() {
    return (
        <div className="contact-form">
            <NavBar />
            <div className="form-wrapper">
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" placeholder="Enter your Name(optional)" />
                    <input type="email" name="email" placeholder="Enter your Email(optional)" />
                    <textarea name="text" placeholder="Write something to me">

                    </textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
