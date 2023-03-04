import React from 'react'
import Js  from "../../assets/Js.png"
 
import Java  from "../../assets/Java.png"
 
import PSQL from  "../../assets/PSQL.png"
import Nestjs from "../../assets/nestjs.svg"
import ReactIcon from "../../assets/React.png"
import Python from '../../assets/python.png'
 
function TopSkills() {
  return (
    <section className='TopSkills container'>
        <p className='section__subtitle'> Some of my skills...
        
        </p>
         
            <div className='Skills_showcase'>
            <div className='Skill'>
                    <p className='Skill__title'>Javascript</p>
                        <img src={Js}  className="Skill_avatar"/>
                    <p className='Skill_desc'> Experience Year : 1.5 Years</p>
                    </div>
                    <div className='Skill'>
                    <p className='Skill__title'>Java</p>
                        <img src={Java}  className="Skill_avatar"/>
                        <p className='Skill_desc'> Experience Year : 4 Years</p>
                    </div>  
                     <div className='Skill'>
                     <p className='Skill__title'>PostgreDB</p>
                        <img src={PSQL}  className="Skill_avatar"/>
                        <p className='Skill_desc'> Experience Year : 1.5 Years</p>
                    </div>
                    <div className='Skill'>
                    <p className='Skill__title'>Nest.js</p>
                        <img src={Nestjs}  className="Skill_avatar"/>
                        <p className='Skill_desc'> Experience Year : 1 Years</p>
                    </div>
                    <div className='Skill'>
                    <p className='Skill__title'>React.js</p>
                        <img src={ReactIcon}  className="Skill_avatar"/>
                        <p className='Skill_desc'> Experience Year : 1.5 Years</p>
                    </div>
                    <div className='Skill'>
                    <p className='Skill__title'>Python</p>
                        <img src={Python}  className="Skill_avatar"/>
                        <p className='Skill_desc'> Experience Year : 3 Years</p>
                    </div>
                   
            </div>
    </section>
  )
}

export default TopSkills