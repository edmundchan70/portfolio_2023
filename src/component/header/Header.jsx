import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {GrDocumentText} from "react-icons/gr"
import {BsPeople} from "react-icons/bs"
import {MdDesignServices} from "react-icons/md"
import "./Header.css";
function Header() {
  return (
     <header className="header">
             <nav className="nav container">
                <a href="index.html" className="nav_logo">Edmund</a>
               <div className='nav_menu'>
                    <ul  className="nav_list grid">
                        <li className='nav_item'>
                            <a href="" className="nav_link">
                                <AiOutlineHome />
                                <i className="uil uil- nav_icon"></i> Home
                            </a>
                        </li>   

                      
                        <li className='nav_item'>
                            <a href="#about" className="nav_link">
                            <BsPeople />
                                <i className="uil uil- nav_icon"></i>Me
                            </a>
                        </li>   
                        <li className='nav_item'>
                            <a href="#skill" className="nav_link">
                                <GrDocumentText />
                                <i className="uil uil- nav_icon"></i> Skill 
                            </a>
                        </li>   
                        <li className='nav_item'>
                            <a href="#contact" className="nav_link">
                            <MdDesignServices />
                                <i className="uil uil- nav_icon"></i>Contact
                            </a>
                        </li>   
                    </ul>
               </div>
                

                    

                  

                   
             </nav>
     </header>
  )
}

export default Header