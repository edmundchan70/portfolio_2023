import React from 'react'
import { useState } from 'react'
import Icon from "./Icon"

function ProjectCard({Background , Title , Description , Link}) {
  const [Detail , setDetail] = useState(false);
 
  return (
    <div className='Project_Card'  onClick={()=>
      setDetail(!Detail)}>
          <div className='Project_Summary' >
              <Icon Title={Title}/>
        
                <h3 className='Project_subtitle'>{Title}</h3>
                <h4 className='Project_description'>Click to see More...</h4>
                <a className='Project_demo' href={Link}>View Demo!</a>
          </div>
    </div>
  )
   
}

export default ProjectCard