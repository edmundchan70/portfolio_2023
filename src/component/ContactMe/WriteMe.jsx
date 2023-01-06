import React from 'react'

function WriteMe() {
  return (
     <div className="writeMe">
           <h1 className="section__title">
                Write to Me 
            </h1>
        <form className="writeMe_box container" action='https://formsubmit.co/edmundchan70@gmail.com' method='POST'>

            <label htmlFor="" className="contactMe__form-div">Name</label>
            <input type="text" name="email" className="writeMe_input" placeholder='Type your Name ...' />

            <label htmlFor="" className="contactMe__form-div">Email</label>
            <input type="email" className="writeMe_input" placeholder='Type your Email ...' />

            <label htmlFor="" className="contactMe__form-div">Message</label>
            <textarea name="message" className='writeMe_input' id="" cols="30" rows="10" placeholder='Enter your message here '></textarea>
            <input type="submit" className='button' >

                </input>
        </form>
     </div>
  )
}

export default WriteMe