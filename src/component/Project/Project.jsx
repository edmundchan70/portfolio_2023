import React from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import "./Project.css"
import Shop_Clone from "../../assets/Shop_Clone.png"
import ProjectCard from './ProjectCard'
 
function Project() {
    const {handle , darkMode} = useContext(ThemeContext);
    
  return (
    <section  className="Project section" id="Project">
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">
                    Project I'm working on ....
        </span>
        <div className='Project_container container grid'  >
          <ProjectCard Background={Shop_Clone} Title={"Online SHOP (FULLSTACK)"} Link={"https://ez-amazon-repo-zuwg.vercel.app"} />
          <ProjectCard Background={Shop_Clone} Title={"Portfolio"} Link={"https://portfolio-2023-xi-flax.vercel.app/"} />
        </div>
    </section>
  )
}

export default Project