import React from 'react'
import { useState } from 'react'
 

function ProjectCard({ Title  ,LinkRepo, Link,Skill}) {
  const [tap,setTap] = useState(false);
  const {FRONTEND,BACKEND,Desc,Challenge,Pic} = Skill
  console.log(tap)
  return (
    <div className='Display'>
        <div className={tap?'Project_Card Tap':'Project_Card'} onClick={()=>{
           setTap(!tap)}} >
                  <div className='Project_Summary' >         
                        <h3 className='Project_subtitle'>{Title}</h3>
                        <div className='Project_description'>
                        <div className='SkillStack'>
                        <h className="Front_End">FrontEnd:</h>{ FRONTEND.map(
                                  (item,i)=> <span className='Skill_name' id={i}>{item}</span> 
                                )}

                              </div>
                              <div className='SkillStack'>
                              <h className="Back_End">BackEnd: </h> { BACKEND.map(
                                  (item,i)=> <span className='Skill_name' id={i}>{item}</span> 
                                )}
                              </div>  
                              
                     <div className='wrapper Project'>
                        <a className='Project_demo' href={Link}>Demo</a>
                        <a className='Project_demo' href={LinkRepo}>Rep</a>
                       
                         <div className='ClickMe'>Click!</div>
                      
                      
                      </div>
                            
                               
                     
                        </div>
                    
                        
                  </div>
              <div className='Desription'>
                      
              </div>
           
            </div>
        <div className={tap?"TapDescription" : "Description"} onClick={()=>setTap(!tap)}>
        <div className='Project_Avatar'>
                  <img src={Pic}  className="small_icon"/>
             </div>  
             
           <div className="Summary"  >
          
            <p className='Project_subtitle'> Summary</p>
                <p className='Desc'>{Desc}</p>    
                </div>
                <div className="Challenge">
                <p className='Project_subtitle'>HighLight</p>
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