import React from 'react'
import Play from '../../Images/play.png';
// import Navbar from '../component/Navbar'
// import Main from '../component/Main'
// import Footer from '../component/Footer'
export default function Playpage() {
  return (
    <div>
      {/* <Navbar></Navbar>
      <Main name='Play'/> */}
      <div className='container-xl mt-5'>
      <img src={Play} className='img-fluid'/>
      <h1 className='mt-5 fs-3'>Play Ground (ESport)</h1>
      <h1 className='mt-3 fs-4 text-primary'>Online Shopping MarketPlace</h1>
      <p className='fs-6 pt-2 opacity-75'>E Sport Website Design, Best Website Design Pages.</p>
      <div className='row mt-5'>
        <div className='col-2'>
            <h1 className='fs-4'>client</h1>
            <p className='fs-5 pt-2 opacity-75 fw-normal '>Williame Blake</p>
        </div>
        <div className='col-3'>
            <h1 className='fs-4'>Categary</h1>
            <p className='fs-5 pt-2 opacity-75 fw-normal '>Design</p>
        </div>
        <div className='col-2'>
            <h1 className='fs-4'>client</h1>
            <p className='fs-5 pt-2 opacity-75 fw-normal '>July 16,2021</p>
        </div>

      </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
