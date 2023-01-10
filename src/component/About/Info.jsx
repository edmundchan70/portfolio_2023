import React from 'react'

import {BsBriefcase} from "react-icons/bs"
import {BiAward} from "react-icons/bi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function Info() {
    const {handle , darkMode} = useContext(ThemeContext)
  return (
    <div className ="about_info grid">
        <div className={darkMode==="light"? "about_box" :"about_box dark"} >
            <BiAward />
            <h3 className={darkMode==="light"? "about_title" :"about_title dark"}>Experience</h3>

            <span className="about_subtitle">3 Years+ in programming</span>
        </div>
        <div className={darkMode==="light"? "about_box" :"about_box dark"} >
            <AiOutlineFundProjectionScreen />
            <h3 className={darkMode==="light"? "about_title" :"about_title dark"}>Completed</h3>
            <span className="about_subtitle">20+ Projects</span>
        </div>
        <div className={darkMode==="light"? "about_box" :"about_box dark"} >
            <BsBriefcase />
            <h3 className={darkMode==="light"? "about_title" :"about_title dark"}>Internship</h3>

            <span className="about_subtitle">
                Software & Web developer , APIs Tester at Kaidu.ai
            </span>
        </div>
    </div>
  )
}

export default Info