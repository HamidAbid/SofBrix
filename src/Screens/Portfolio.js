import React from 'react'
import audience from '../Images/audience.png'

export default function Portfolio() {
  return (
    
    <div className='container-fluid portfolio'>
    
      <div className='container-xl'>
        <div className='row justify-content-between'>
            <div className='col-md-6 p-2 px-4 text-center'>
                <img src={audience} alt='audience' className='img-fluid '></img>
            </div>
            <div className='col-md-6 p-4'>
                <h1>Sofbrix Portfolio</h1>
                <p className='fs-6 opacity-75 p-1'>Sofbrix has been implementing functional, technological projects and information solutions. The best indicator of our competence is the actual result of our work. We invite you to familiarize yourself with the portfolio, which presents for project:</p>
                <ul className='fs-6 p-1 px-4'>
                    <li>website development</li>
                    <li>implementation of CRM and ERP systems</li>
                    <li>Mobile app development</li>
                    <li>Digital Marketing</li>
                    <li>creation of banners, mailings</li>
                    <li>Launching online stores, etc.</li>
                </ul>
                <p className='fs-6 opacity-75 p-1'>Over the years, Sofbrix has successfully implemented a number of projects of varying complexity and specificity. The portfolio of our web studio contains examples of work performed over the past three years. Review them and see for yourself that the implementation uses the latest technologies, techniques and solutions, modern tools. You regularly update your website portfolio, adding a short description to each example. If you wish, you can always contact the Exytex manager, he will answer your questions and tell you in detail about the work done within a specific project.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
