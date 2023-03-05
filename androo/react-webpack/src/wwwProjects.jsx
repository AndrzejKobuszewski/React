import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import data from "../src/data/VisitCardPageData.json";
// import WwwProject from './WwwProject';

const WwwProjects =()=><>
<h3>{data[0].wwwProjectsIntro}</h3>
{/* <WwwProject/> */}
<article>
    <a href={data[0].wwwProjects.project3.link}>
        <img src= {data[0].wwwProjects.project3.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project3.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project3.title} - {data[0].wwwProjects.project3.time}</h3>
    <p>{data[0].wwwProjects.project3.Description}</p>
    <p>{data[0].wwwProjects.project3.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project4.link}>
        <img src= {data[0].wwwProjects.project4.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project4.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project4.title} - {data[0].wwwProjects.project4.time}</h3>
    <p>{data[0].wwwProjects.project4.Description}</p>
    <p>{data[0].wwwProjects.project4.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project5.link}>
        <img src= {data[0].wwwProjects.project5.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project5.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project5.title} - {data[0].wwwProjects.project5.time}</h3>
    <p>{data[0].wwwProjects.project5.Description}</p>
    <p>{data[0].wwwProjects.project5.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project6.link}>
        <img src= {data[0].wwwProjects.project6.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project6.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project6.title} - {data[0].wwwProjects.project6.time}</h3>
    <p>{data[0].wwwProjects.project6.Description}</p>
    <p>{data[0].wwwProjects.project6.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project7.link}>
        <img src= {data[0].wwwProjects.project7.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project7.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project7.title} - {data[0].wwwProjects.project7.time}</h3>
    <p>{data[0].wwwProjects.project7.Description}</p>
    <p>{data[0].wwwProjects.project7.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project8.link}>
        <img src= {data[0].wwwProjects.project8.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project8.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project8.title} - {data[0].wwwProjects.project8.time}</h3>
    <p>{data[0].wwwProjects.project8.Description}</p>
    <p>{data[0].wwwProjects.project8.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project9.link}>
        <img src= {data[0].wwwProjects.project9.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project9.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project9.title} - {data[0].wwwProjects.project9.time}</h3>
    <p>{data[0].wwwProjects.project9.Description}</p>
    <p>{data[0].wwwProjects.project9.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
<article>
    <a href={data[0].wwwProjects.project10.link}>
        <img src= {data[0].wwwProjects.project10.screenshot} ></img>
    </a>
    <a href ={data[0].wwwProjects.project10.githublink} target='_blank'><FaGithubSquare/></a>
    <h3>{data[0].wwwProjects.project10.title} - {data[0].wwwProjects.project10.time}</h3>
    <p>{data[0].wwwProjects.project10.Description}</p>
    <p>{data[0].wwwProjects.project10.technologies.map((n,i)=> <span key ={i}><b>{n}, </b></span>)}</p>
</article>
</> 
export default WwwProjects; 