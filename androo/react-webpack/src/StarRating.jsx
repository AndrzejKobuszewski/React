import React,{useState} from "react";
import { FaStar } from 'react-icons/fa';
import data from '../src/data/VisitCardPageData.json';
import TechnologiesData from '../src/data/technologies.json'

const Star = ({selected = false, onSelect = f => f}) =>
    (<FaStar color={selected ? 'green':'yellow'} onClick={onSelect}/>);

const createArray = lenght => [...Array(lenght)];

export default function StarRating ({totalStars=5 , s=1, subjectOfRating='capability'}){
    const [selectedStars,setSelectedStars] = useState(s);
 return  <> {subjectOfRating =='capability'? <> 
    {createArray(totalStars).map((n,i)=> <Star key = {i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>)}
    <p>{TechnologiesData[0].technologyKnowledgeLevelTheLegend[selectedStars-1]}</p>
</>:
<>
{createArray(totalStars).map((n,i)=> <Star key = {i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>)}
    <p>{TechnologiesData[0].ratingDesc[0]} {selectedStars} {TechnologiesData[0].ratingDesc[1]} {totalStars} {TechnologiesData[0].ratingDesc[2]}</p>
    
</>}
</>
};