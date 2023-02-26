import React,{useState} from "react";
import { FaStar } from 'react-icons/fa';
import data from '../src/data/VisitCardPageData.json';

const Star = ({selected = false, onSelect = f => f}) =>
    (<FaStar color={selected ? 'red':'yellow'} onClick={onSelect}/>);

const createArray = lenght => [...Array(lenght)];

export default function StarRating ({totalStars=5 , s=1, subjectOfRating='capability'}){
    const [selectedStars,setSelectedStars] = useState(s);
 return  <> {subjectOfRating =='capability'? <> 
    {createArray(totalStars).map((n,i)=> <Star key = {i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>)}
    <p>{data[0].technologyKnowledgeLevelTheLegend[selectedStars-1]}</p>
</>:
<>
{createArray(totalStars).map((n,i)=> <Star key = {i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>)}
    <p>{data[0].ratingDesc[0]} {selectedStars} {data[0].ratingDesc[1]} {totalStars} {data[0].ratingDesc[2]}</p>
    
</>}
</>
};