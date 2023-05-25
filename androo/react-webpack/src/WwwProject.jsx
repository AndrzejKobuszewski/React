import React from "react";
import { FaGithub } from 'react-icons/fa';
import codeLanguageToNumber from "./codeLanguageToNumber";

import project from '../src/data/wwwProjects.json';

const WwwProject = ({number=codeLanguageToNumber()}) =>
    <>
        <article style={{borderRadius: "5px", marginLeft: '15px'}}>
            {project.map((n, i) => 
            
            <div key={1000+i}>
                <div style={{ display: "flex", borderBottom: "1px solid", paddingTop:"5px"}}>
                <div style={{ display: "flex", width: '30%'}}>    
                    <div style={{ width: '200px' }}>
                        <a href={n.link} target="_blank">
                        <img src={n.screenshot} style={{ width: '110%' }}></img>
                        </a>
                        <p>{n.technologies.map((n, i) => <span key={2000 + i}><b>{n}, </b></span>)}</p>
                    </div>
                    
                    <div>
                        < a href={n.githublink} target='_blank'><FaGithub color = {"black"} 
                        style={{ marginTop:"1rem", width: '4rem', height:'4rem' }}/></a >
                    </div>
                </div>  
                <div>  
                    <h3><b>{n.title[number]} - {n.time}</b></h3>
                    <p>{n.Description[number]}</p>
                    
                </div>
                </div>
            </div>
            )}
        </article>
    </>;
export default WwwProject; 