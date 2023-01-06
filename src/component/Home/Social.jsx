import React from 'react'
import {AiOutlineInstagram,AiOutlineFacebook,AiFillLinkedin,AiFillGithub} from "react-icons/ai";
function Social () {
  return (
    <div className='home_social'>
        <a href='https://www.instagram.com/edmundchan70/' className='home_social-icon'>
            <AiOutlineInstagram />
            </a>    
        <a href='https://www.facebook.com/edmund.chan.733076/' className='home_social-icon'>
            <AiOutlineFacebook />
            </a>    
        <a href='https://www.linkedin.com/in/edmund-chan-58bb78224/' className='home_social-icon'>
            <AiFillLinkedin />
            </a>  
        <a href='https://github.com/edmundchan70' className='home_social-icon'>
            <AiFillGithub />
            </a>    
    </div>
  )
}

export default  Social;