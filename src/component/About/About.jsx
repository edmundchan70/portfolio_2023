import React from 'react'
import "./About.css"
import myPic from "../../assets/myPic.jpeg";
import CV from "../../assets/Final_Resume.pdf"
import Info from "./Info";

import {HiOutlineDocumentText} from "react-icons/hi"
function About() {
  return (
    <section className="about section" id="about">
            <h2 className='section__title'>About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about_container container grid">
                <img src={myPic}  className="about_img" />
                <div className='about_data'>
                        <Info />
                        <p className="about_description"> 
                        Currently a Year 3 ,CS Major Student At TMU.  Right now I 
                        self-teaching my-self to be a full-stack developer. Always willing and looking foward to learn new things! 
                        </p>
                        <a download="" href={CV} className="button button--flex">Download CV
                        <HiOutlineDocumentText />
                        </a>
                </div>
            </div>
    </section>

  )
}

export default About