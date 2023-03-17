import React from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
function WriteMe() {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
     <div className="writeMe">
           <h1 className="section__title" id={darkMode}>
                Write to Me 
            </h1>
        <form className="writeMe_box container" action='https://formsubmit.co/edmundchan70@gmail.com' method='POST'>
            <label htmlFor="" className="contactMe__form-div" >Name</label>
            <input type="text" className="writeMe_input" placeholder='Type your Name ...' />

            <label htmlFor="" className="contactMe__form-div">Email</label>
            <input type="email"  name="email" className="writeMe_input" placeholder='Type your Email ...' />

            <label htmlFor="" className="contactMe__form-div">Message</label>
            <textarea name="message" className='writeMe_input' id="" cols="30" rows="10" placeholder='Enter your message here '></textarea>
            <a type="submit" className='sendMsg'>
                <button className='SendToMe'> Submit! </button> </a>
        </form>
     </div>
  )
}

export default WriteMe