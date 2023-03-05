import React from "react";
import { FaGithub } from 'react-icons/fa';
import data from '../src/data/VisitCardPageData.json';

const WwwProject=({projectNumber=1}) =>
 <>
   <article>
    <a href={data[0].wwwProjects.project1.link}>
        <img src= {data[0].wwwProjects.project1.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project1.githublink} target='_blank'><FaGithub/></a>
    <h3>{data[0].wwwProjects.project1.title} - {data[0].wwwProjects.project1.time}</h3>
    <p>{data[0].wwwProjects.project1.Description}</p>
    <p>{data[0].wwwProjects.project1.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
    </article>






    
    </>;


export default WwwProject; 