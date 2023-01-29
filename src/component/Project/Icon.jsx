import React from 'react'
import {DiJavascript1,DiHtml5,DiCss3,DiPostgresql,DiNodejsSmall} from "react-icons/di"
import {RxVercelLogo} from "react-icons/rx"
import {FaReact} from "react-icons/fa"
function Icon({Title}) {
   const iconSize = 40
   if(Title === "Online SHOP (FULLSTACK)"){
    return (
    <div className='Project_Icon'>
             <DiJavascript1 size={iconSize} />
             <DiHtml5 size={iconSize} />
             <DiCss3 size={iconSize} />
             <RxVercelLogo size={iconSize} />
    </div>
         
    
    )
   }else if (Title ==="Portfolio"){
    return ( 
      <div className='Project_Icon'>
             <DiJavascript1 size={iconSize} />
             <DiHtml5 size={iconSize} />
             <DiCss3 size={iconSize} />
             <DiPostgresql size={iconSize}/>
             <DiNodejsSmall size={iconSize} />
             <RxVercelLogo size={iconSize} />
      </div>
    )
   }
}

export default Icon