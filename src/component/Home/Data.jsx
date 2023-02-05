import React from 'react'
import { ThemeContext } from '../../App'
import { useContext } from 'react'

function Data() {
  const {handle , darkMode} = useContext(ThemeContext)
  return (
    <div className='home_data'> 
            <h1 className="home_title" id={darkMode} > Edmund Chan 
            
             <svg className='name_svg' width="50px" height="50px" viewBox="0 0 163 163" xmlns="http://www.w3.org/2000/svg"><title>Gestures</title><circle cx="81.5" cy="81.5" r="80" fill="#fde45c"/><path d="M123.37,79.68l-34,.62c2.76-9.67,2.07-12.6,1.48-15.9a19.88,19.88,0,0,0-1.23-4.15c0.18-.33.34-0.64,0.47-0.91a15.56,15.56,0,0,0,1.4-4.79,127.38,127.38,0,0,0,1-13.77,5.52,5.52,0,0,1,2.85-1.45c4.19-.64,8.14,4.61,9.83,8a19.42,19.42,0,0,1,1.63,5c0.59,3.3,1.28,6.22-1.48,15.89l34-.61a7.68,7.68,0,0,1,7.45,9A7.89,7.89,0,0,1,139,83.17H137.4c4.17,0,7.55,3.74,7.55,8s-3.38,8-7.55,8h-3.77a7.5,7.5,0,1,1,0,15h-6.88A7.5,7.5,0,0,1,134.2,123a7.66,7.66,0,0,1-7.81,6.21l-12.31.54a17.31,17.31,0,0,1-6.22-.79c-3.46-1.11-9.9-3.37-9.75-3.67" fill="#f7c726"/><path d="M57.3,113.38v5a3.75,3.75,0,0,1-3.75,3.75H34.8A3.75,3.75,0,0,1,31,118.38V69.63a3.75,3.75,0,0,1,3.75-3.75H53.55a3.75,3.75,0,0,1,3.75,3.75v43.75Z" fill="#adeada"/><path d="M122.79,77.78a7.71,7.71,0,0,1,0,15.41H119a7.71,7.71,0,0,1,0,15.41h-6.88a7.65,7.65,0,0,1,7.45,9,7.84,7.84,0,0,1-7.81,6.42H82.61a32.6,32.6,0,0,1-12.4-2.45l-12.6-8.17H57.3V77.44h0.63c2.34-2.2,7.82-9.08,14.06-17.5a57.9,57.9,0,0,0,3.51-5.88,15.48,15.48,0,0,0,1.39-4.79,124.65,124.65,0,0,0,1-13.77,5.48,5.48,0,0,1,2.86-1.44c4.18-.64,8.13,4.61,9.82,8a18.45,18.45,0,0,1,1.63,5c0.6,3.29,1.29,6.22-1.47,15.88l34-.63a7.67,7.67,0,0,1,7.45,9,7.84,7.84,0,0,1-7.81,6.42h-1.6Z" fill="#fce7d0"/><path d="M53.73,65.59H51.42L51,67.83a13,13,0,0,1,.72,4.91L52,113.59a3.33,3.33,0,0,1-3.33,3.33l-17.5-.33v1.67a3.33,3.33,0,0,0,3.33,3.33H53.73a3.44,3.44,0,0,0,3.44-3.44V69.5A3.64,3.64,0,0,0,53.73,65.59Z" fill="#95e2d6"/><path d="M53.55,123.62H34.8a5.26,5.26,0,0,1-5.25-5.25V69.62a5.26,5.26,0,0,1,5.25-5.25H53.55a5.26,5.26,0,0,1,5.25,5.25v48.75A5.26,5.26,0,0,1,53.55,123.62ZM34.8,67.37a2.25,2.25,0,0,0-2.25,2.25v48.75a2.25,2.25,0,0,0,2.25,2.25H53.55a2.25,2.25,0,0,0,2.25-2.25V69.62a2.25,2.25,0,0,0-2.25-2.25H34.8Z" fill="#5a150b"/><path d="M87.64,63.45A2,2,0,0,1,86.23,61c2-7.52,1-10.32.44-13.37A19,19,0,0,0,85,42.7c-1.24-2.5-3.68-5.91-6.54-7.35a4.87,4.87,0,0,1,1.71-.59c4.19-.64,8.14,4.62,9.83,8a18.53,18.53,0,0,1,1.63,4.81c0.59,3.29,2.46,7.85-.26,16.85Z" fill="#f4c7ad"/><path d="M131.53,71.05c-0.69,3.8-4.72,6.18-9,6.18h-1.86c4.83,0,8.74,3.74,8.74,8s-3.91,8-8.74,8h-4.36c4.83,0,8.74,3.25,8.74,7.51s-3.91,7.49-8.74,7.49h-8c5.3,0,9.5,4.47,8.62,9.29-0.69,3.8-4.71,6.71-9,6.71H91.69c4.33,0,11.43-4.19,12.12-8a10,10,0,0,0-.61-6,2.87,2.87,0,0,1,2.2-3.85c3.36-.86,6.25-2.66,6.27-5.56a7.76,7.76,0,0,0-1.76-5.46,2.72,2.72,0,0,1,.29-4.1c2.1-1.63,3.44-4,3.44-5.85a7.16,7.16,0,0,0-2.54-5.17,2.72,2.72,0,0,1,.64-4.43,7,7,0,0,0,3.59-4.78c0.76-4.17-5.72-7.41-10-8.33l17.56-.59C128.21,62.13,132.41,66.23,131.53,71.05Z" fill="#f4c7ad"/><path d="M122.79,94.68h-7.71a1.5,1.5,0,0,1,0-3h7.71A1.5,1.5,0,0,1,122.79,94.68Z" fill="#5a150b"/><path d="M122.79,94.68a1.5,1.5,0,0,1,0-3,6.21,6.21,0,0,0,0-12.41,1.5,1.5,0,1,1,0-3A9.21,9.21,0,0,1,122.79,94.68Z" fill="#5a150b"/><path d="M119,110.09h-7.7a1.5,1.5,0,0,1,0-3H119a6.21,6.21,0,0,0,0-12.41,1.5,1.5,0,0,1,0-3A9.21,9.21,0,0,1,119,110.09Z" fill="#5a150b"/><path d="M111.77,125.5H82.61a34,34,0,0,1-13-2.56l-0.25-.13-12.6-8.17a1.5,1.5,0,1,1,1.63-2.52l12.48,8.09a31,31,0,0,0,11.7,2.29h29.16a6.23,6.23,0,0,0,4.92-10.29,6,6,0,0,0-4.56-2.12,1.5,1.5,0,0,1,0-3,9,9,0,0,1,6.84,3.17A9.23,9.23,0,0,1,111.77,125.5Z" fill="#5a150b"/><path d="M124.39,79.28h-7.61a1.5,1.5,0,1,1,0-3h7.61A6.23,6.23,0,0,0,129.3,66a6,6,0,0,0-4.55-2.12L90.8,64.5a1.5,1.5,0,0,1-1.47-1.91c2.57-9,2.05-11.86,1.5-14.88l-0.06-.32a16.9,16.9,0,0,0-1.5-4.63C87.71,39.58,84.22,35,81,35.54a3.7,3.7,0,0,0-1.6.69,124.59,124.59,0,0,1-1,13.25,16.9,16.9,0,0,1-1.53,5.23,58.11,58.11,0,0,1-3.66,6.12C66.59,69.74,61.27,76.35,59,78.53a1.5,1.5,0,1,1-2.05-2.19c2.16-2,7.48-8.66,13.88-17.3a56.3,56.3,0,0,0,3.37-5.65,13.92,13.92,0,0,0,1.25-4.34,123.48,123.48,0,0,0,1-13.58,1.5,1.5,0,0,1,.5-1.1,7,7,0,0,1,3.64-1.8c5.14-.79,9.57,5.19,11.38,8.85a19.79,19.79,0,0,1,1.76,5.43l0.06,0.31c0.55,3,1.12,6.09-1,14.3l32-.59A9,9,0,0,1,131.58,64,9.23,9.23,0,0,1,124.39,79.28Z" fill="#5a150b"/></svg>
            </h1>
            <h3 className='home_subtitle'id={darkMode} >
                Full-Stack developer/Software Engineer 
            </h3>
            <p className="home_description">
            Currently a Year 3 ,Computer Science Major Student At TMU. 
            </p>
            <a href="#contact" className='button contactMeBtn'>
                Contact ME! 
            </a>
           
    </div>
  )
}

export default Data