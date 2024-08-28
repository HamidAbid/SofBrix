import React from 'react'
// import Navbar from '../component/Navbar'
// import Main from '../component/Main'
// import Footer from '../component/Footer'
import native from '../../Images/native.png'

export default function NativePage() {
  return (
    <div >
      {/* <Navbar></Navbar>
      <Main name='Native'/> */}
      <div className='container-xl mt-5'>
      <img src={native} className='img-fluid'/>
      <h1 className='mt-5 fs-3'>Native E-Donation app</h1>
      <h1 className='mt-3 fs-4 text-primary'>Online Shopping MarketPlace</h1>
      <p className='fs-6 pt-2 opacity-75'>You can donate yourself to your neighbor or surrounding needy people. or you can give the donation to helping humanity because they are serving in village and remote area with their own funds with the friends and family and they decided to expand the charity startup for a good cause they start a website to get help.</p>
      <div className='row mt-5'>
        <div className='col-2'>
            <h1 className='fs-4'>client</h1>
            <p className='fs-5 pt-2 opacity-75 fw-normal '>Wahaj</p>
        </div>
        <div className='col-3'>
            <h1 className='fs-4'>Categary</h1>
            <p className='fs-5 pt-2 opacity-75 fw-normal '>Mobile App development</p>
        </div>
        <div className='col-2'>
            <h1 className='fs-4'>Date</h1>
            <p className='fs-5 pt-2 opacity-75 fw-normal '>June 7,2021</p>
        </div>

      </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
