import React from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai";
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function FullStack() {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
      <div className={darkMode==="light"? "skills_content" : "skills_content dark"}>
        <h3 className={darkMode==="light"? "skills_title" : "skills_title dark"}>Full Stack </h3>
          <div className="skills_box">
            <div className="skills_group">
            <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                      <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>HTML  </h3>
                        <span className="skills_level">Basic</span>
                     
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                    <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>CSS  </h3>
                        <span className="skills_level">Basic</span>
                    
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                    <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>Javascript  </h3>
                        <span className="skills_level">Intermediate</span>
                
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                    <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>Git  </h3>
                        <span className="skills_level">Advanced</span>
             
                    </div>
              </div>
              <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>Nest.JS  </h3>
                    <span className="skills_level">Advanced</span>
               
                </div>
          </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                    <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>React  </h3>
                        <span className="skills_level">Intermediate</span>
                    
                    </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default FullStack