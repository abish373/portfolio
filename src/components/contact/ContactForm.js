import React from 'react'
import NavBar from '../menu/NavBar'
import SocialIcons from '../socialicon/SocialIcons'
import './contactform.css'

function ContactForm() {


    return (
        <>
        <SocialIcons />
        <div className="contact-form">
            <NavBar />
            <div className="form-wrapper">
                <form className="form" name="contact" action="/contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" placeholder="Enter your Name" />
                    <input type="email" name="email" placeholder="Enter your Email" />
                    <textarea name="text" placeholder="Write something to me">

                    </textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ContactForm
