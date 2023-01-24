import React from 'react'
import {AiOutlineShop} from "react-icons/ai"
import {FaReact} from "react-icons/fa"
function Icon({Title}) {
   if(Title === "Online SHOP (FULLSTACK)"){
    return (<AiOutlineShop />)
   }else if (Title ==="Portfolio"){
    return (<FaReact/>)
   }
}

export default Icon