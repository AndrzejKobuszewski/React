import React from "react";
import { FaGithub } from 'react-icons/fa';

import project from '../src/data/wwwProjects.json';

const WwwProject = () =>
    <>
        <article>
            {project.map((n, i) => <p>
                <div>
                <div style={{ display: "flex"}}>    
                    <div style={{ width: '70%' }}>
                        <a href={n.link} target="_blank">
                        <img src={n.screenshot} style={{ width: '110%' }}></img>
                        </a>
                    </div>
                    
                    <div>
                        < a href={n.githublink} target='_blank'><FaGithub color = {"black"} style={{ marginTop:"1rem", width: '4rem', height:'4rem' }}/></a >
                    </div>
                </div>    
                    <h3>{n.title} - {n.time}</h3>
                    <p>{n.Description}</p>
                    <p>{n.technologies.map((n, i) => <span key={i}><b>{n}, </b></span>)}</p>
                </div>
            </p>
            )}
        </article>
    </>;
export default WwwProject; 