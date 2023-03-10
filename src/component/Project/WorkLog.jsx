import React, { useState } from 'react'
import { Octokit } from "@octokit/core";
import { useEffect } from 'react';
function WorkLog() {
    const [data , setData] = useState([]);
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_KEY
      });
       
    useEffect(
        ()=>{
            const resp= async()=>{
            const {data}= await octokit.request(`GET /users/${process.env.REACT_APP_GITHUB_USER}/events`)
            console.log(data) 
            console.log(`GET /users/${process.env.REACT_APP_GITHUB_USER}/events`)
            setData(data)
        }
        resp();
    }
        ,[]
    )
if(data.length>0)
  return (
    <div className='Project_WorkLog'>
        <h3 className='section__title'>Real-Time commit</h3>
        <h4 className='Project_text'>My Recent work ...</h4>
         <div className='Project_wrapper'>
            <a href='https://github.com/edmundchan70'> 
            <table className='Project_Display'>
                <tr>
                    <th>Time </th>
                    <th>Act</th>
                    <th>Project Name </th>
            
                </tr>
                {data.map((item,i)=>{
                 
    
                    const act  = item.type;
                    const proj = item.repo.name;
                    const time = Date(item.created_at);
                    if(i<10)
                    return(
                        <tr>
                            <td>{time}</td>
                            <td>{act}</td>
                            <td>{proj}</td>
                            
                       
                        </tr>
                    )
                })}
        
            </table>
            </a>
           
        </div>
    </div>
)
  else{
   
    return(
        <div>LOADING</div>
    )
  }
}

export default WorkLog