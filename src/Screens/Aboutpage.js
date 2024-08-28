import React from 'react'
import bannericon from '../Images/bannericon.png';
import vectoricon from '../Images/vectoricon.png'
import Video from '../Images/video.png'
import Itimg from '../Images/Itimg.png'
import founder from "../Images/founder.png";
import cheif from "../Images/cheif.png";
import manager from "../Images/manager.png";
import brixlogo from '../Images/brixlogo.png';
import iconfacebook from '../Images/iconfacebook.png';
import linkden from '../Images/linkden.png';
import instagram from '../Images/instagram.png';
import client from "../Images/client.png";
import review1 from "../Images/review1.png";
import sofbrixui from "../Images/sofbrixui.png";
import review3 from "../Images/review3.png";
export default function Aboutpage({setActivePage}) {
  return (
    <div >
    

      <div className="sofbrix-banner_wrapper">

        {/* <div className="sofbrix_banner">
                <img src={bg} width="100%" alt="banner" />
           
            </div> */}
        <div className="container">

          <div className="text_banner ">

            <div className="banner-heading  Poppins tc-white py-4">Let Sofbrix help you Deliver the <span className="color_text  Poppins tc-sky">"it" factor</span> </div>
            <p className="banner_descrption  Poppins tc-white pt-3">We are a digital agency focusing on creating and expanding state-of-the-art digital solutions for both startups and industry leaders.</p>
   
           <div className="d-flex align-items-baseline gap-2 py-5">
                         
                                    <div className="Poppins tc-white fs_20 fw-500 tc-sky pt-5">Explore your solution</div>
                                    
                                <img src={bannericon} width="15px" />

                            </div>
        


          </div>
        </div>

      </div>



      {/* <section 2> */}
      <div className='container-fluid itfactor p-5'>
        <div className='container-xl '>
          <div className='row justify-content-between'>
            <div className='col-md-6 pt-4'>
              <p className="fs_10 tc-sky Poppins image-title ">Learn more about Sofbrix</p>
              <h1 className='it-head pt-5'>Sofbrix embodies the <i className='text-info'>"It" factor </i>, evident in our name, repeated twice.</h1>
              <p className='fs-6 opacity-50 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaba.
                <p className='pt-5'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur out odit aut fugit, sed quia consequuntur magni dolores eas qui ratione voluptatem aquí esciunt</p></p>
            </div>
            <div className='col-md-5'>
              <img src={Itimg} alt='img' className='img-fluid'></img>
            </div>
          </div>


        </div>
        <div className='container-xl mt-5 '>
          <img src={Video} alt='video' className='img-fluid'></img>

          <div className='row mt-5 justify-content-between'>
            <div className='col-md-4 pt-5'>
              <p className="fs_10 tc-sky Poppins image-title ">The "It" Factor</p>
              <div className='it-head2 py-4'>Why We're it</div>
              <div className='pt-5'>
                <div onClick={()=>setActivePage('Contact')} className='text-style-none'>
                  <button className="footer-button border-0 mx-1 mx-md-0">

                    <div className="Poppins tc-white fs_16 fw-500">Meet Our Team</div>

                    <img src={vectoricon} />

                  </button></div></div>
            </div>
            <div className='col-md-6 '>
              <p className='fs-5  opacity-50 py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaba.Nemo enim ipsam voluptatem quia voluptas sit aspernatur out odit aut fugit, sed quia consequuntur magni dolores eas qui ratione voluptatem aquí esciunt.
                <p className='pt-5'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veilt, sed quia non numquam</p></p>
            </div>
          </div>
        </div>
      </div>


    

      {/* section-5 */}
      <div className='container'>
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

{/* section-6 */}
<div className="container-xl">
<div id="section5" className=" col-sm-12 col-lg-9 ">
                        <p className="fs_10 tc-sky Poppins image-title mt-4">Our Clients Reviews</p>
                        <h5 className="image-heading  fs_34 fw-600 tc-black lh_56  Poppins">Here's what ou  <span className="color_text fs_34 fw-600 lh_56 Poppins tc-sky"> fantastic customers </span>  are saying about Sofbrix</h5>

                    </div>
                    <div className="reviews-card row mt-4">
                        <div className="col-12 col-lg-9">
                            <p class="fs_24 fw-500 Poppins tc-darkblack">“Sofbrix Inhouse is very organized and very methodical about how they set up project in Figma, which we loved.”</p>
                            <div className="d-flex pt-3">
                                <div className="client-image">
                                    <img src={client} />
                                </div>
                                <div className="fs_16 fw-600 tc-darkblack Poppins px-2">
                                    Raphael Dwamena
                                </div>
                                <div className=" fs_16 fw-600 tc-darkblack Poppins px-2">
                                    Founder & CEO MetaMarketz
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <img src={review1} width="100%" />
                        </div>
                    </div>
                    <div id="section" className="reviews-card row my-4">
                        <div className="col-12 col-lg-9">
                            <p class="fs_24 fw-500 Poppins tc-darkblack">“Sofbrix has provided UI/UX design for an insurance platform. They are easy to work with and understand our needs very well.”</p>
                            <div className="d-flex pt-3">
                                <div className="client-image">
                                    <img src={client} />
                                </div>
                                <div className="fs_16 fw-600 tc-darkblack Poppins px-2">
                                    Trever Engelson
                                </div>
                                <div className=" fs_16 fw-600 tc-darkblack Poppins px-2">
                                    Co-founder AmercianDeliver
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <img src={sofbrixui} width="100%" />
                        </div>
                    </div>
                    <div className="reviews-card row my-4">
                        <div className="col-12 col-lg-9">
                            <p class="fs_24 fw-500 Poppins tc-darkblack">“The high-quality Sofbrix’s team was able to deliver in such a quick timeframe and on budget was impressive.”</p>
                            <ptdiv className="d-flex pt-3 ">
                                <div className="client-image">
                                    <img src={client} />
                                </div>
                                <div className="fs_16 fw-600 tc-darkblack Poppins px-2">
                                    Demitri Allison
                                </div>
                                <div className=" fs_16 fw-600 tc-darkblack Poppins px-2">
                                    Marketing Manager Hartman&Co.
                                </div>
                            </ptdiv>
                        </div>

                        <div className="col-12 col-lg-3">
                            <img src={review3} width="100%" />
                        </div>
                    </div>
</div>

      <div className="footer-section mt-5">

        <div className="pt-5 text-center footer-text">
          <h5 className=" footer-heading fs_40 fw-600 tc- lh_56  Poppins  mx-0 tc-white pt-3">Create something awesome
            and extraordinary with us</h5>
          <h6 className="fs_18 fw-400  lh_32  Poppins tc-white pt-3 pb-5">With a lot of creativity, we can make your dream come true</h6>
          <div className="d-flex justify-content-center">
            <div onClick={()=>setActivePage('Portfolio')} className='text-style-none'>
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

    </div>





  )
}
