import React from 'react'
import { useState } from 'react'
 

function ProjectCard({ Title  ,LinkRepo, Link,Skill}) {
  const [isHovered, setIsHovered] = useState(false);
 
  const {FRONTEND,BACKEND,Desc,Challenge} = Skill
  console.log(Desc)
  return (
    <div className='Display'>
        <div className='Project_Card'  >
                  <div className='Project_Summary' >
                    
                        <h3 className='Project_subtitle'>{Title}</h3>
                        <div className='Project_description'>
                        <div className='SkillStack'>
                        <h>FrontEnd:</h>{ FRONTEND.map(
                                  (item,i)=> <span className='Skill_name' id={i}>{item}</span> 
                                )}

                              </div>
                              <div className='SkillStack'>
                              <h>BackEnd: </h> { BACKEND.map(
                                  (item,i)=> <span className='Skill_name' id={i}>{item}</span> 
                                )}
                              </div>
                        </div>
                      <div className='wrapper Project'>
                        <a className='Project_demo' href={Link}>Demo</a>
                        <a className='Project_demo' href={LinkRepo}>Rep</a>
        
                      </div>
                        
                  </div>
              <div className='Desription'>
                      
              </div>
           
            </div>
        <div className="Description">
           <div className="Summary">
            <p className='Project_subtitle'> Summary</p>
                <p className='Desc'>{Desc}</p>    
                </div>
                <div className="Challenge">
                <p className='Project_subtitle'> Challenge</p>
                <ul>
                  {Challenge.map(
                    (item)=>(<li className='Desc'>{item}</li>)
                  )}
                </ul>
               
                </div>
                
          </div>
    </div>
  
  )
 
}

export default ProjectCard