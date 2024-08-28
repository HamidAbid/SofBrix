import React from 'react';
import textimage from "../Images/textimage.png";
import uximage from "../Images/uximage.png";
import mobileapp from "../Images/mobileapp.png";
import social from "../Images/social.png";
import web from "../Images/web.png";
import manuka from "../Images/manuka.jpeg";
import thrillzone from "../Images/thrillzone.jpeg";
import babayvillage from "../Images/babayvillage.jpeg";
import saffana from "../Images/saffana.png";
import founder from "../Images/founder.png";
import cheif from "../Images/cheif.png";
import manager from "../Images/manager.png";

import brixlogo from '../Images/brixlogo.png';
import iconfacebook from '../Images/iconfacebook.png';
import linkden from '../Images/linkden.png';
import instagram from '../Images/instagram.png';
import vectoricon from '../Images/vectoricon.png';
import bannericon from '../Images/bannericon.png';
import ScrollButton from '../Components/ScrollButton';
import NavBar from './Navbar';
import { div } from 'react-router-dom';
import Portfolio from './Portfolio';


const HomePage = ({setActivePage}) => {


    return (
        <>
           

            <div className="sofbrix-banner_wrapper">

                {/* <div className="sofbrix_banner">
                        <img src={bg} width="100%" alt="banner" />
                   
                    </div> */}
                <div className="container">

                    <div className="text_banner">

                        <div className="banner-heading  Poppins tc-white">Crafting your fantasies with a twist of  <span className="color_text  Poppins tc-sky">creativity.</span> </div>
                        <p className="banner_descrption  Poppins tc-white pt-3">We are a digital agency focusing on creating and expanding state-of-the-art digital solutions for both startups and industry leaders.</p>

                        {/* <a href="#" > */}
                        <div className="d-flex align-items-baseline gap-2 py-5">

                            <div className="Poppins tc-white fs_20 fw-500 tc-sky pt-5">Explore your solution</div>

                            <img src={bannericon} width="15px" />

                        </div>

                        {/* </a> */}



                    </div>
                </div>

            </div>

            {/* section-2 */}


            <div id="section1" className="container">

                <div className="image-text_section row mt-5 pt-5">
                    <div className="col-sm-12 col-lg-5 ">
                        <img src={textimage} width="100%" alt="banner" />
                    </div>
                    <div className=" image-text col-sm-12 col-lg-7 ">
                        <p className="fs_10 tc-sky Poppins image-title ">Learn more about Sofbrix</p>
                        <h5 className="image-heading  fs_34 fw-600 tc-black lh_56  Poppins">Offering exceptional services with  <span className="color_text fs_34 fw-600 lh_56 Poppins tc-sky">pioneering ideas</span> that embrace uniqueness.</h5>
                        <h6 className="fs_18 fw-400  lh_32  Poppins">Help find solutions with UI / UX designs that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/ UX Design & Development.</h6>
                    </div>

                </div>
                <div className="divider mt-5 pt-5"></div>

                {/* section-=3 */}

                <div id="section2" className=" col-sm-12 col-lg-9 ">
                    <p className="fs_10 tc-sky Poppins image-title ">Learn more about Sofbrix</p>
                    <h5 className="image-heading  fs_34 fw-600 tc-black lh_56  Poppins">We offer ingenious concepts while infusing the  <span className="color_text fs_34 fw-600 lh_56 Poppins tc-sky">essence of success </span>  into your brand</h5>
                    <h6 className="fs_18 fw-400  lh_32  Poppins">Help find solutions with UI / UX designs that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/ UX Design & Development.</h6>
                </div>
                <div className="row pt-5 mt-5 ">
                    <div className="slider-section col-sm-12 col-lg-3 ">
                        <div className="sofbrix-card ">
                            <img src={uximage} width="50px" />
                            <h4 className="pt-2 tc-darkblack fs_26 Poppins">UI/UX Design</h4>
                            <p className="pt-2 tc-darkblack fs_14 Poppins">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium dolor emque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                        </div>
                    </div>
                    <div className="slider-section col-sm-12 col-lg-3">
                        <div className="sofbrix-card ">
                            <img src={web} width="50px" />
                            <h4 className="pt-2 tc-darkblack fs_26 Poppins">Web Development</h4>
                            <p className="pt-2 tc-darkblack fs_14 Poppins">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium dolor emque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                        </div>
                    </div>
                    <div className="slider-section col-sm-12 col-lg-3">
                        <div className="sofbrix-card ">
                            <img src={mobileapp} width="50px" />
                            <h4 className="pt-2 tc-darkblack fs_26 Poppins">Mobile App Dev</h4>
                            <p className="pt-2 tc-darkblack fs_14 Poppins">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium dolor emque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                        </div>
                    </div>
                    <div className="slider-section col-sm-12 col-lg-3">
                        <div className="sofbrix-card ">
                            <img src={social} width="50px" />
                            <h4 className="pt-2 tc-darkblack fs_26 Poppins">Social Marketing</h4>
                            <p className="pt-2 tc-darkblack fs_14 Poppins">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium dolor emque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                        </div>


                    </div>
                </div>
                {/* section-4 */}
                <div id="section3" className="row align-items-center pt-5 pb-5">
                    <div className=" col-sm-12 col-lg-9 ">
                        <p className="fs_10 tc-sky Poppins image-title mt-4">Sofbrix Portfolio</p>
                        <h5 className="image-heading  fs_34 fw-600 tc-black lh_56  Poppins">Enhancing the  <span className="color_text fs_34 fw-600 lh_56 Poppins tc-sky">Value of Our Clients </span>  Products to Unmatched Heights.</h5>

                    </div>
                    <div className="col-lg-3">
                        <div onClick={()=>setActivePage('Portfolio')} className='text-style-none'>
                            <button className="footer-button border-0 mx-1 mx-md-0">

                                <div className="Poppins tc-white fs_16 fw-500">Check our work</div>
                                <img src={vectoricon} />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="row">

                    <div className="sofbrix-portfolio col-sm-12 col-lg-6">
                        <a href="https://nz.manukahealth.com/en/">
                            <img src={manuka} width="100%" />
                            <h4 className="tc-darkblack fs_30 Poppins fw-500 pt-3 text-decoration-none">Manuka Health</h4>
                            <p className="fs-18 Poppins fw-500 tc-darkgrey">Health Has Evolved into a Global Leader in Manuka Honey. A Collective of 200 Humans , Working in Holistic Harmony with 1.5 Billion Bees.</p>
                        </a>
                    </div>
                    <div className="sofbrix-portfolio col-sm-12 col-lg-6">
                        <img src={babayvillage} width="100%" />
                        <h4 className="tc-darkblack fs_30 Poppins fw-500 pt-3">Baby Viilage</h4>
                        <p className="fs-18 Poppins fw-500 tc-darkgrey">Baby Village is one of the most experienced baby stores in Australia. Our range has been carefully selected yet has a highly comprehensive offering for mum and Bub all under one roof</p>
                    </div>
                    <div className="sofbrix-portfolio col-sm-12 col-lg-6 ">
                        <a href="https://www.thrillzoneuae.com/dubai">
                            <img src={thrillzone} width="100%" />
                            <h4 className="tc-darkblack fs_30 Poppins fw-500 pt-3">Thrill Zone</h4>
                            <p className="fs-18 Poppins fw-500 tc-darkgrey">Thrill Zone Entertainment Centre is well designed and equipped to cater to your requirements. Laser Tag is a safe and hi-tech combat team game suitable for kids and adults. </p>
                        </a>
                    </div>

                    <div className="sofbrix-portfolio col-sm-12 col-lg-6 ">
                        <img src={saffana} width="100%" />
                        <h4 className="tc-darkblack fs_30 Poppins fw-500 pt-3">Pueblo</h4>
                        <p className="fs-18 Poppins fw-500 tc-darkgrey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque aperiam.</p>
                    </div>
                </div>


                {/* section-5 */}

                <div id="section4" className=" col-sm-12 col-lg-9 ">
                    <p className="fs_10 tc-sky Poppins image-title mt-4">Our Superheroes</p>
                    <h5 className="image-heading  fs_34 fw-600 tc-black lh_56  Poppins">Introducing our  <span className="color_text fs_34 fw-600 lh_56 Poppins tc-sky"> team of superheroes </span>  committed to assisting your business in reaching the pinnacle</h5>

                </div>
                <div className="row">
                    <div className="colo-12 col-lg-4">
                        <img src={founder} width="100%" />
                        <h3 className="Poppins fs_24 pt-2 ">Hassan Bashrat</h3>
                        <h4 className="Poppins fs_20 pt-2">Founder & CEO</h4>
                    </div>
                    <div className="colo-12 col-lg-4">
                        <img src={cheif} width="100%" />
                        <h3 className="Poppins fs_24 pt-2 ">Wahid Khan</h3>
                        <h4 className="Poppins fs_20 pt-2">CTO</h4>
                    </div>
                    <div className="colo-12 col-lg-4">
                        <img src={manager} width="100%" />
                        <h3 className="Poppins fs_24 pt-2 ">Zeeshan Idrees</h3>
                        <h4 className="Poppins fs_20 pt-2">Project Manager</h4>
                    </div>
                    
                </div>

            </div>
            {/* Footer */}
            <div className="footer-section mt-5">

                <div className="pt-5 text-center footer-text">
                    <h5 className=" footer-heading fs_40 fw-600 tc- lh_56  Poppins  mx-0 tc-white pt-3">Create something awesome
                        and extraordinary with us</h5>
                    <h6 className="fs_18 fw-400  lh_32  Poppins tc-white pt-3 pb-5">With a lot of creativity, we can make your dream come true</h6>
                    <div className="d-flex justify-content-center">
                        <div onClick={()=>setActivePage('Contact')} className='text-style-none'>
                            <button className="footer-button border-0 mx-1 mx-md-0">
                                <div className="Poppins tc-white fs_16 fw-500">Let’s work together</div>
                                <img src={vectoricon} />
                            </button>
                        </div>
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
                                <div onClick={()=>setActivePage('Contact')} className='text-style-none'> <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Home </li></div>
                                <div onClick={()=>setActivePage('AboutUs')} className='text-style-none'>  <li className=" footer-area  Poppins fs_14 fw-500 tc-white pt-3"  >About Us</li></div>
                                <div onClick={()=>setActivePage('Portfolio')} className='text-style-none'>   <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Portfolio</li></div>
                                <div onClick={()=>setActivePage('Contact')} className='text-style-none'>  <li className=" footer-area  Poppins fs_14 fw-500 tc-white pt-3"  >Contact</li></div>
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

        </>
    )
}

export default HomePage;




