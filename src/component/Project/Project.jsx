import React, { useState } from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import "./Project.css" 

import ProjectCard from './ProjectCard'
import {EZ_AMAZON_CLONE,FACEBOOK_CLONE} from './Skill.ts';
function Project() {
   const [tap,setTap] = useState(false);
    const {handle , darkMode} = useContext(ThemeContext);
  return (
    <section  className="Project section" id="Project">
        <h1 className="Projects_Title">Projects</h1>
      
        <div className='Project_container '  >
          <div className='ProjectCard_container' >
                <ProjectCard 
                 Title={"EZ_AMAZON_CLONE"}
                 Link={"https://ez-amazon-repo-zuwg.vercel.app"} 
                 LinkRepo={"https://github.com/edmundchan70/EZ_Amazon_repo"}
                 Skill={EZ_AMAZON_CLONE}
                 
                 />
                <ProjectCard  Title={"FACEBOOK_CLONE"} Link={"https://fb-clone-black.vercel.app/"} LinkRep={"https://github.com/edmundchan70/fb_clone"} Skill={FACEBOOK_CLONE}/>
          </div>
         
        </div>
    </section>
  )
}

export default Project