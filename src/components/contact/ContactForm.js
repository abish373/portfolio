import React from 'react'
import NavBar from '../menu/NavBar'
import NetlifyForm from 'react-netlify-form'
import './contactform.css'

function ContactForm() {


    return (
        <div className="contact-form">
            <NavBar />
        <div className="form-wrapper">
        <NetlifyForm name='Contact Form'>
            {({ loading, error, success }) => (
                <div>
                    {loading &&
                        <div>Loading...</div>
                    }
                    {error &&
                        <div>Your information was not sent. Please try again later.</div>
                    }
                    {success &&
                        <div>Thank you for contacting us!</div>
                    }
                    {!loading && !success &&
                        <div className="form">
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="text" name="name" placeholder="Enter your Name(optional)" />
                            <input type="email" name="email" placeholder="Enter your Email(optional)" />
                            <textarea name="text" placeholder="Write something to me">

                            </textarea>
                            <button type="submit">Send</button>
                        </div>
                    }
                </div>
            )}
        </NetlifyForm>
        </div>
        </div>
    )

    // return (
    //     <div className="contact-form">
    //         <NavBar />
    //         <div className="form-wrapper">
    //             <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    //                 <input type="hidden" name="form-name" value="contact" />
    //                 <input type="text" name="name" placeholder="Enter your Name(optional)" />
    //                 <input type="email" name="email" placeholder="Enter your Email(optional)" />
    //                 <textarea name="text" placeholder="Write something to me">

    //                 </textarea>
    //                 <button type="submit">Send</button>
    //             </form>
    //         </div>
    //     </div>
    // )
}

export default ContactForm
