import React from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai";
function Se() {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
      <div className={darkMode==="light"? "skills_content" : "skills_content dark"}>
   <h3 className={darkMode==="light"? "skills_title" : "skills_title dark"}>Software Engineer</h3>
      <div className="skills_box">
        <div className="skills_group">
        <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>PostgreSql  </h3>
                    <span className="skills_level">Advanced</span>
               
                </div>
          </div>
          <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>Python  </h3>
                    <span className="skills_level">Intermediate</span>
             
                </div>
          </div>
          <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>Java  </h3>
                    <span className="skills_level">Intermediate</span>
                 
                </div>
          </div>
          <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>MySql  </h3>
                    <span className="skills_level">Basic</span>
          
                </div>
          </div>
          <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>OracleDB  </h3>
                    <span className="skills_level">Advanced</span>
                 
                </div>
          </div>
          <div className="skill_data">
                <AiOutlineCheckCircle />
                <div>
                <h3 className={darkMode==="light"? "skills_name" : "skills_name dark"}>node.js  </h3>
                    <span className="skills_level">Intermediate</span>
            
                </div>
          </div>
         
        </div>
      </div>
  </div>
  )
}

export default Se