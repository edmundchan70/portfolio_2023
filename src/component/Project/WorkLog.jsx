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
                setData(data)
        }
        resp();
    }
        ,[]
    )
if(data.length>0)
  return (
    <div className='Project_WorkLog'>
            {console.log(data)}
        <h3 className='Project_text'>Real-Time commit</h3>
        <h4 className='Project_text'>UserName: {data[0].actor.login}</h4>
         <div className='Project_wrapper'>
            <table className='Project_Display'>
                <tr>
                    <th>Time </th>
                    <th>Act</th>
                    <th>Project Name </th>
                    <th>CommitId</th>
                  
                  
                 
                </tr>
                {data.map((item,i)=>{
                    const commitId= item.payload.head;
                    const act  = item.type;
                    const proj = item.repo.name;
                    const time = item.created_at;
         
                    if(i<10)
                    return(
                        <tr>
                            <td>{time}</td>
                            <td>{act}</td>
                            <td>{proj}</td>
                            
                            <td>{commitId}</td>
                        </tr>
                    )
                })}
        
            </table>
        </div>
    </div>
)
  else{
    console.log(data)
    return(
        <div>LOADING</div>
    )
  }
}

export default WorkLog