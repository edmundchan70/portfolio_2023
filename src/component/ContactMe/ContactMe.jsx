import React from 'react'
import External from './External'
import "./ContactMe.css"
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import WriteMe from './WriteMe'
function ContactMe() {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
     <section>
        <h2 className="section__title" id={darkMode}>Contact ME</h2>
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