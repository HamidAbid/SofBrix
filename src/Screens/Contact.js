import React from "react";


import NavBar from "./Navbar";
import Contactform from "../../src/Components/SubComponents/Contactform";

const Contact = () => {
    return (
        <>
   

            <div className="w-100 m-0  bg-contact-image my-5">
                <div className="container">
                    <div className="Contact-Section_1 col-12 col-md-10  d-flex justify-content-center flex-column  ">
                        <p className="Rubik contact-heading m-0 fs_56 fw-500 lh_60 "> Meet,</p>
                        <p className="Rubik contact-heading m-0 fs_56 fw-500 lh_60 ">Sip, Collaborate:</p>
                        <p className="Rubik contact-heading m-0 pb-3 fs_44 fw-500  lh_60"> Your Success Brews Here.</p>
                        <p className="Poppins contact-description_color fs_22 fw-500  ">Any question or remarks? Just write us a message!
                        </p>
                    </div>
                </div>
            </div>
                <Contactform/>
          
        </>
    )
}
export default Contact;


