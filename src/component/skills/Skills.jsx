import React from 'react'
import "./Skills.css"
import FullStack from './FullStack'
import Se from './Se'
function Skills() {
  return (
    
    <section className="skills section" id="skill">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">
                    My skills 
        </span>
        <div className="skills_container container grid">
            <FullStack />
            <Se />
        </div>

    </section>
  )
}

export default Skills