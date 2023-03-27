import React,{useState} from "react";
import { FaStar } from 'react-icons/fa';
import data from '../src/data/VisitCardPageData.json';
import TechnologiesData from '../src/data/technologies.json'
import codeLanguageToNumber from "./codeLanguageToNumber";

const Star = ({selected = false, onSelect = f => f}) =>
    (<FaStar color={selected ? 'green':'yellow'} onClick={onSelect}/>);

const createArray = lenght => [...Array(lenght)];

export default function StarRating ({totalStars=5 , s=1, subjectOfRating='capability', number = codeLanguageToNumber()}){
    const [selectedStars,setSelectedStars] = useState(s);
 return  <> {subjectOfRating =='capability'? <> 
    <br/>{createArray(totalStars).map((n,i)=> <Star key = {i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>)}
    <p>{TechnologiesData[number].technologyKnowledgeLevelTheLegend[selectedStars-1]}</p>
</>:
<>
{createArray(totalStars).map((n,i)=> <Star key = {i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>)}
    <p>{TechnologiesData[number].ratingDesc[0]} {selectedStars} {TechnologiesData[number].ratingDesc[1]} {totalStars} {TechnologiesData[number].ratingDesc[2]}</p>
    
</>}
</>
};