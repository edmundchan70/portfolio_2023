import React from 'react'
import "./About.css"
import TMU from "../../assets/TMU.jpeg";
import CV from "../../assets/Final_Resume.pdf"
import Info from "./Info";
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import {HiOutlineDocumentText} from "react-icons/hi"
function About() {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
    <section className="about section" id="about">
            <h2 className='section__title' id={darkMode}>About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about_container container grid">
                <img src={TMU}  className="about_img" />
                <div className='about_data'>
                        <Info />
                        <p className="about_description"> 
                        Currently a Year 3 ,CS Major Student At TMU.  Right now I 
                        self-teaching my-self to be a full-stack developer. Always willing and looking foward to learn new things! 
                        </p>
                        <a download="" href={CV} className="button ContactMe">Download CV
                        <HiOutlineDocumentText />
                        </a>
                </div>
            </div>
    </section>

  )
}

export default About