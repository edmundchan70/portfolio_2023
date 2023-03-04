import React from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import "./Project.css" 

import ProjectCard from './ProjectCard'
import {EZ_AMAZON_CLONE,FACEBOOK_CLONE} from './Skill.ts';
function Project() {
    const {handle , darkMode} = useContext(ThemeContext);
  return (
    <section  className="Project section" id="Project">
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">
                    Project I'm working on ....
        </span>
        <div className='Project_container container grid'  >
          <div className='ProjectCard_container' >
                <ProjectCard 
                 Title={"EZ_AMAZON_CLONE"}
                 Link={"https://ez-amazon-repo-zuwg.vercel.app"} 
                 LinkRepo={"https://github.com/edmundchan70/EZ_Amazon_repo"}
                 Skill={EZ_AMAZON_CLONE}
                 
                 />
                <ProjectCard  Title={"FACEBOOK_CLONE"} Link={"https://portfolio-2023-xi-flax.vercel.app/"} LinkRep={"https://github.com/edmundchan70/fb_clone"} Skill={FACEBOOK_CLONE}/>
          </div>
         
        </div>
    </section>
  )
}

export default Project