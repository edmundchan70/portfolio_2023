import React from 'react'
import {AiOutlineMail,AiOutlineWhatsApp,} from "react-icons/ai"
import {RiMessengerLine} from "react-icons/ri" ; 
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function External() {
    const {handle , darkMode} = useContext(ThemeContext)
  return (
     <div className="contactMe_info grid" >
        <div className="contactMe_box">
            <a href='mailto:edmundchan70@gmail.com 'className='contactMe_link' >
                <AiOutlineMail className='contactMe_icon'/>
                <h3 className="contactMe_title"  >Email</h3>
                <span className="contactMe_subtitle">
                    edmundchan70@gmail.com
                </span>
            </a>
        </div>
        <div className="contactMe_box">
            <a href='https://www.whatsapp.com/'>
                 <AiOutlineWhatsApp />
                <h3 className="contactMe_title">WhatsApp</h3>
                <span className="contactMe_subtitle">
                    +(647)686-4197
                </span>
            </a>
               
        </div>
        <div className="contactMe_box">
        <a href='https://www.messenger.com/'>
                <RiMessengerLine />
                <h3 className="contactMe_title">Messenger</h3>
                <span className="contactMe_subtitle">
                    edmundchan70
                </span>
        </a>
        </div>
     </div>
  )
}

export default External