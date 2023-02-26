import React from "react";
// import {useState} from "react";
import data from '../src/data/VisitCardPageData.json';
import StarRating from "./StarRating";

const Technologies = () =>
<>

{data[0].technologies.map((n,i)=> data[0].technologies[i].map((n,i)=> 
i%3==0 ? <technology key ={i}><b>{n}</b></technology>: i%3==1?<rating key ={i}><StarRating totalStars = {5} s={parseInt(n)} subjectOfRating="capability"/></rating>:<rating key ={i}><StarRating totalStars = {Object.keys(data[0].wwwProjects).length} s={parseInt(n)} subjectOfRating="projects"/></rating>))}

</>

export default Technologies;