import React from 'react'

import {BsBriefcase} from "react-icons/bs"
import {BiAward} from "react-icons/bi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
function Info() {
  return (
    <div className ="about_info grid">
        <div className="about_box">
            <BiAward />
            <h3 className="about_title">Experience</h3>

            <span className="about_subtitle">3 Years+ in programming</span>
        </div>
        <div className="about_box">
            <AiOutlineFundProjectionScreen />
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">20+ Projects</span>
        </div>
        <div className="about_box">
            <BsBriefcase />
            <h3 className="about_title">Internship</h3>

            <span className="about_subtitle">
                Software & Web developer , APIs Tester at Kaidu.ai
            </span>
        </div>
    </div>
  )
}

export default Info