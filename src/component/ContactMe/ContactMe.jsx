import React from 'react'
import External from './External'
import "./ContactMe.css"
import WriteMe from './WriteMe'
function ContactMe() {
  return (
     <section className="contectMe section" id="contact">
        <h2 className="section__title">Contact ME</h2>
        <span className="section__subtitle">
            keep in touch ...
        </span>
        <div className="contactMe_container container grid">
            <External />
            <WriteMe />
        </div>
     </section>
  )
}

export default ContactMe