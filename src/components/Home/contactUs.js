import React from "react";
import contactimg from '../../assets/contact-us.svg';

const ContactUs = () => {
    // onNameChange = (event) => {
    //     this.setState({ name: event.target.value })
    // }

    // onEmailChange = (event) => {
    //     this.setState({ email: event.target.value })
    // }

    // onMessageChange = (event) => {
    //     this.setState({ message: event.target.value })
    // }

    // handleSubmit = (event) => {
    // }

    return (
        <div className="p-5 bg-light">
            <h1 className="text-center">Feel free to contact us</h1>

            <div className="row my-2">
                <div className='col-md-6 my-auto mx-0 p-0'>
                    <img className="img-responsive" src={contactimg} />
                </div>

                <div className='col-lg-5 col-md-6 my-5'>
                    <form id="contact-form mx-auto" method="POST" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="example@email.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" placeholder="Type your message here..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form >
                </div>
                <div className="col"></div>

            </div>

        </div >

    );
}


export default ContactUs;