
import HomePage from '../Screens/HomePage';
import Contact from '../Screens/Contact';
import Alhayyat from "../Screens/pages/Alhayyat";
import Fastpage from "../Screens/pages/Fastpage";
import Groundpage from "../Screens/pages/Groundpage";
import Hairpage from "../Screens/pages/Hairpage";
import Nativepage from "../Screens/pages/Nativepage";
import Playpage from "../Screens/pages/Playpage";
import Quickpage from "../Screens/pages/Quickpage";
import Soobzpage from "../Screens/pages/Soobzpage";
import Tradepage from "../Screens/pages/Tradepage";
import Custompage from  '../Screens/pages/Custompage';
import Project from '../Screens/Project';
import Aboutpage from '../Screens/Aboutpage';
import { useState } from 'react';
import NavBar from '../Screens/Navbar';




const MainComponents = () => {
    const [activePage, setActivePage] = useState('');

    function CurrPage(activePage){
     
      if (activePage === 'Contact') {
    
        return(<Contact />)
      }
     else if (activePage === 'AboutUs') {
      
        return(<Aboutpage setActivePage={setActivePage}/>)
      }
      else if (activePage === 'Portfolio') {
      
        return(<Project setActivePage={setActivePage}/>)
      }
      else if (activePage === 'Custompage') {
      
        return(<Custompage />)
      }
      else if (activePage === 'Alhayatpage') {
      
        return(<Alhayyat />)
      }
      else if (activePage === 'Fastpage') {
      
        return(<Fastpage />)
      }
      else if (activePage === 'Groundpage') {
      
        return(<Groundpage />)
      }
      else if (activePage === 'Soobzpage') {
      
        return(<Soobzpage />)
      }
      else if (activePage === 'Tradepage') {
      
        return(<Tradepage />)
      }
      else if (activePage === 'Playpage') {
      
        return(<Playpage />)
      }
      else if (activePage === 'Quickpage') {
      
        return(<Quickpage />)
      }
      else if (activePage === 'Nativepage') {
      
        return(<Nativepage />)
      }
      else if (activePage === 'Hairpage') {
      
        return(<Hairpage />)
      }
      else {
       
        return(<HomePage setActivePage={setActivePage}/>)
      }
    }
    return (
        <div>
        <NavBar bg='nav-bg' active='open' value={activePage} setActivePage={setActivePage} />

     { CurrPage(activePage)}
 
        
      

    </div>
    )
}



export default MainComponents;

