import { NavLink } from 'react-router-dom';
import brixlogo from "../../Images/brixlogo.png"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Divider } from 'antd';
import { FaBars } from "react-icons/fa6";
import Aboutpage from '../Aboutpage';

const NavBar = ({setActivePage}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const Link = [
        { name: 'Home', href: '/' },
       
        { name: 'AboutUs', href: '/AboutUs' },

        { name: 'Portfolio', href: '/Project' },
 

        { name: 'Contact', href: '/Contact' },

    ];
   
    return (
    
        <>
            <div className={`alpha-navbar sticky-top nav-bg `}>
                <nav className="navbar navbar-expand-lg navbar-light container ">
                    <div className="alpha-logo">
                        <a onClick={()=>{setActivePage('')}}>
                            <img src={brixlogo} width='140px' alt='' />
                        </a>
                    </div>
                    <button  className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars className='text-light '/>
                    </button>
                    <div className="collapse navbar-collapse mt-2" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-lg-4">
                            {Link.map((each, index) => (
                                <li className="nav-item fw-600  fs_16 tc-black Rubik" key={index} onClick={() => setActivePage(each.name)}>
                                    {each.submenu ? (
                                        <div className="dropdown">
                                            <a className="nav-link text-white  px-3 dropdown-toggle" role="button" id={`dropdownMenuLink-${index}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {each.name}
                                            </a>
                                            <div className="dropdown-menu border-0 mt-0 mt-md-2" aria-labelledby={`dropdownMenuLink-${index}`}>
                                                <div className='row max-width-80vw'>
                                                    {each.submenu.map((submenuItem, submenuIndex) => (
                                                        <div className={`${submenuItem?.categories ? 'col-12 col-md-3 ' : 'col-12'}`}>
                                                            {/* <NavLink to={submenuItem.href} className="dropdown-item fs_14 tc-black Rubik" key={submenuIndex}>{submenuItem.name} {submenuItem?.categories && <img src={solutionMenuArrow} className='px-3' alt='solutionMenuArrow'/>}</NavLink> */}
                                                            {submenuItem?.categories && <Divider className='my-2' />}
                                                            {submenuItem?.categories?.map((category, catIndx) => (
                                                            <a to={category.href} className="dropdown-item fs_14 tc-black text-wrap fw-500" key={catIndx}>{category.name}</a>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <a to={each.href} className={`nav-link text-white px-3 `} >{each.name}</a>
                                    )}
                                    <div className="hover-dot"></div>
                                </li>
                            ))}
                        </ul>
                        <div className="d-lg-flex align-items-center px-3">
                            {/* <p className="tc-orange pe-5 mb-lg-0 cursor-pointer text-white" onClick={() => navigate('/Join-Waitlist')}>Join the waitlist</p> */}
                        <a onClick={()=>setActivePage('Contact')}>    <button className=" bg-sky border-0 px-3 py-2 rounded-1 text-white">Talk To Us  </button></a>
                        </div>
                    
                    </div>
                </nav>
            </div>
        </>
    );
}
export default NavBar;