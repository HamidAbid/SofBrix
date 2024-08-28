import React from 'react'
import Navbar from '../component/Navbar'
import Main from '../component/Main'
import Footer from '../component/Footer'
import Portfolio from '../component/Portfolio'
import Project from '../component/Project'
export default function Firstpage() {
  return (
    <div>
      <Navbar/>
      <Main name='Project'/>
      <Portfolio/>
      <Project/>
      <Footer/> 
    </div>
  )
}
