import React from 'react'
import "./Skills.css"
import FullStack from './FullStack'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import Se from './Se'
function Skills() {
  const {handle , darkMode} = useContext(ThemeContext);
  return (
    
    <section className="skills section" id="skill">
        <h2 className="section__title" id={darkMode}>Skills</h2>
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