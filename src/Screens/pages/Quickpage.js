import React from 'react'
// import Navbar from '../component/Navbar'
// import Main from '../component/Main'
// import Footer from '../component/Footer'
import Custom from '../../Images/custom.png';
export default function Quickpage() {
    return (
        <div >
            {/* <Navbar></Navbar>
            <Main name='Quick'/> */}
            <div className='container-xl mt-5'>
                <img src={Custom} className='img-fluid' />
                <h1 className='mt-5 fs-3'>Quick Page</h1>
                <h1 className='mt-3 fs-4 text-primary'>Online Shopping MarketPlace</h1>
                <p className='fs-6 pt-2 opacity-75 '>If you are planning to build an online business, then you need to know and understand that developing a good eCommerce website is one of the most important things you can do.
                    This is because, with a good eCommerce website, you will be able to increase your customer base so you can potentially earn more profit in the long run. Here are some of the ways on how you can make an eCommerce website:

                    Yes, you can hire a web developer to get your online store started, but the costs can slow your ability to grow rapidly. Going for an already-developed e-commerce platform will save you time and money.</p>
                <div className='row mt-5'>
                    <div className='col-2'>
                        <h1 className='fs-4'>client</h1>
                        <p className='fs-5 pt-2 opacity-75 fw-normal '>Soobz    </p>
                    </div>
                    <div className='col-3'>
                        <h1 className='fs-4'>Categary</h1>
                        <p className='fs-5 pt-2 opacity-75 fw-normal '>Web development</p>
                    </div>
                    <div className='col-2'>
                        <h1 className='fs-4'>client</h1>
                        <p className='fs-5 pt-2 opacity-75 fw-normal '>March 1,2022</p>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
