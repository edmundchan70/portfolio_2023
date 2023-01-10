import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {HiOutlineDocumentText} from "react-icons/hi"
import {BsPeople} from "react-icons/bs"
import {MdDesignServices} from "react-icons/md"
import "./Header.css";
import {BsFillMoonFill} from "react-icons/bs"
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function Header() {
    const {handle , darkMode} = useContext(ThemeContext)
  return (
     <header className="header" id={darkMode}>
             <nav className="nav container" >
                <a href="index.html" className="nav_logo" id={darkMode} >Edmund</a>
               <div className='nav_menu'>
                    <ul  className="nav_list grid">
                        <li className='nav_item' >
                            <a href="" className="nav_link" id={darkMode}>
                                <AiOutlineHome />
                                <i className="uil uil- nav_icon"  ></i> Home
                            </a>
                        </li>   

                      
                        <li className='nav_item'>
                            <a href="#about" className="nav_link" id={darkMode}>
                            <BsPeople />
                                <i className="uil uil- nav_icon"></i>Me
                            </a>
                        </li>   
                        <li className='nav_item'>
                            <a href="#skill" className="nav_link" id={darkMode}>
                                <HiOutlineDocumentText />
                                <i className="uil uil- nav_icon"></i> Skill 
                            </a>
                        </li>   
                        <li className='nav_item'>
                            <a href="#contact" className="nav_link" id={darkMode} >
                            <MdDesignServices />
                                <i className="uil uil- nav_icon"></i>Contact
                            </a>
                        </li> 
                        <li className='nav_item'>
                            <div onClick={handle} className="nav_theme">
                                    <BsFillMoonFill />
                                    
                            </div>    
                        </li>  
                    </ul>
               </div>
                

                    

                  

                   
             </nav>
     </header>
  )
}

export default Header