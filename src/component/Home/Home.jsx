import React from 'react'
import Social from './Social'
import "./Home.css"
import Data from "./Data";

import Resume from "../../assets/Final_Resume.pdf"
import { Document, Page,pdfjs } from 'react-pdf';
 
function Home() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <section className='home section' id="home">
        <div className="home_container  container grid">
            <div className="home_content grid">
                    <Social />
                    <div className="home_img">
                   
                      <Document file={Resume} className="home_resume" >
                        <Page pageNumber={1} className="home_resume" />
                      </Document>    
                    </div>
                    <Data />
  
            </div> 
           
      
             
          
          
        </div>
        
    </section>
        
    
  )
}

export default Home