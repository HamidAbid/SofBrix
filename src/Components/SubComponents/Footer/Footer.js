
import React from 'react';
import vectoricon from '../../../Images/vectoricon.png';
import brixlogo from '../../../Images/brixlogo.png';
import iconfacebook from '../../../Images/iconfacebook.png';
import linkden from '../../../Images/linkden.png';
import instagram from '../../../Images/instagram.png';


const Footer = () => {
    return (
        <>

            <div className="footer-section">

                <div className="pt-5 text-center footer-text">
                    <h5 className=" footer-heading fs_40 fw-600 tc- lh_56  Poppins  mx-0 tc-white pt-3">Create something awesome
                        and extraordinary with us</h5>
                    <h6 className="fs_18 fw-400  lh_32  Poppins tc-white pt-3 pb-5">With a lot of creativity, we can make your dream come true</h6>
                    <div className="d-flex justify-content-center">

                        <button className="footer-button border-0 mx-1 mx-md-0">
                   
                        <div className="Poppins tc-white fs_16 fw-500">Let’s work together</div>
                            
                            <img src={vectoricon} />
                         
                        </button>

                    </div>
                </div>
                <div className="container">
                    <div className="footer-divider my-5"></div>
                    <div className="footer-bottom_section row ">
                        <div className="col-12 col-lg-6 py-5">
                            <img src={brixlogo} />
                            <div className="social-icons d-flex pt-5 mt-4 ">
                            <img src={iconfacebook} />
                                <img src={linkden} />
                                <img src={instagram} />

                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 py-5">
                            <ul className="Poppins fs_14 fw-500 tc-white">
                                Company
                               <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Home </li>
                                <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Portfolio</li>
                                <li className=" footer-area  Poppins fs_14 fw-500 tc-white pt-3"  >About Us</li>
                            </ul>
                        </div>
                        {/* <div className="col-sm-12 col-lg-3 py-5">
            <ul className="Poppins fs_14 fw-500 tc-white">
                Company
                <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Our team</li>
                <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Our team</li>
                <li className=" footer-area  Poppins fs_14 fw-500 tc-white pt-3"  >Our team</li>
            </ul>
        </div> */}

                        <div className="col-sm-12 col-lg-3 py-5">
                            <ul className="Poppins fs_14 fw-500 tc-white">
                                Address
                                <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >   Deerfields mall, level 4,Abu Dhabi, United Arab Emirates</li>


                            </ul>
                        </div>
                        <div className="footer-divider my-5"></div>
                    </div>
                </div>

            </div>
        </>);
}

export default Footer;

