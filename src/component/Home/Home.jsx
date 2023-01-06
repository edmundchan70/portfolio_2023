import React from 'react'
import Social from './Social'
import "./Home.css"
import Data from "./Data";
function Home() {
  return (
    <section className='home section' id="home">
        <div className="home_container  container grid">
            <div className="home_content grid">
                    <Social />
                    <div className="home_img">
                     
                    </div>
                    <Data />
  
            </div> 
            <a className="home_below" href='#about'>
              <span className='MoreBelow'>M</span>
              <span className='MoreBelow'>O</span>
              <span className='MoreBelow'>R</span>
              <span className='MoreBelow'>E</span>
              <span className='MoreBelow'> </span>
              <span className='MoreBelow'>B</span>
              <span className='MoreBelow'>E</span>
              <span className='MoreBelow'>L</span>
              <span className='MoreBelow'>O</span>
              <span className='MoreBelow'>W</span>
              <span className='MoreBelow'>↓</span>
              <span className='MoreBelow'>↓</span>
              <span className='MoreBelow'>↓</span>
            </a>
      
             
          
          
        </div>
        
    </section>
        
    
  )
}

export default Home