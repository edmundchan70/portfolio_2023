import React from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai";
function FullStack() {
  return (
      <div className="skills_content">
        <h3 className="skills_title">Full Stack </h3>
          <div className="skills_box">
            <div className="skills_group">
            <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                      <h3 className="skills_name">HTML  </h3>
                        <span className="skills_level">Basic</span>
                     
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                      <h3 className="skills_name">CSS  </h3>
                        <span className="skills_level">Basic</span>
                    
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                      <h3 className="skills_name">Javascript  </h3>
                        <span className="skills_level">Intermediate</span>
                
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                      <h3 className="skills_name">Git  </h3>
                        <span className="skills_level">Advanced</span>
             
                    </div>
              </div>
              <div className="skill_data">
                    <AiOutlineCheckCircle />
                    <div>
                      <h3 className="skills_name">React  </h3>
                        <span className="skills_level">Intermediate</span>
                    
                    </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default FullStack