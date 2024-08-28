// src/ScrollButton.js
import React, { useState } from 'react';
import scrollicon from '../Images/scrollicon.png'

const sections = ['section1'];

const ScrollButton = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToNextSection = () => {
    const nextSection = (currentSection + 1) % sections.length;
    const nextSectionElement = document.getElementById(sections[nextSection]);

    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(nextSection);
    }
  };

  return (
    <div className=" d-flex gap-3 scroll-button pt-5 " onClick={scrollToNextSection} >
   <img src={scrollicon} width="40px"/>
   <div className="">
  <p className="fs_16 fw-500 Poppins  tc-white p-0 mb-2"> Scroll Down </p>
  <p className="fs_14 fw-500 Poppins tc-white opacity-75">to discover more</p>
   </div>
    </div>
  );
};

const styles = {
  button: {
    // position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default ScrollButton;
