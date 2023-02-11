import React from 'react'
import {AiOutlineInstagram,AiOutlineFacebook,AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function Social () {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
    <div className='home_social'  >
         
        <a href='https://www.linkedin.com/in/edmund-chan-58bb78224/' className='home_social-icon' id={darkMode} >
            <AiFillLinkedin size={50}/>
            </a>  
        <a href='https://github.com/edmundchan70' className='home_social-icon' id={darkMode} >
            <AiFillGithub size={50} />
            </a>    
    </div>
  )
}

export default  Social;