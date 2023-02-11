import React from 'react'
import "./Skills.css"
import FullStack from './FullStack'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
 
import Se from './Se'
import TopSkills from './TopSkills'
function Skills() {
  const {handle , darkMode} = useContext(ThemeContext);
  return (
    
    <section className="skills section" id="skill">
        <h2 className="section__title" id={darkMode}>Skills</h2>
       
        <div className="skills_container container grid">
    
           <TopSkills /> 
 
        </div>

    </section>
  )
}

export default Skills