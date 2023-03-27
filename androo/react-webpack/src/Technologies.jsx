import React, { useState, useContext } from "react";
import projects from '../src/data/wwwProjects.json';
import StarRating from "./StarRating";
import TechnologiesData from '../src/data/technologies.json';
import codeLanguageToNumber from '../src/codeLanguageToNumber';
import { ColorContext } from "./VisitCardPage";



function Technologies({ number = codeLanguageToNumber() }) {
    const [direction,setDirection]=useState('ascending');
    const [sortCriteria,setSortCriteria]=useState('name');
    const { colors } = useContext(ColorContext);
    
   
    function markSort({n}){
      
        setSortCriteria(n);

    }
    function markDirection(n={n}){
        setDirection(n);
    }

    return <div className="technologyContainer" style={{ diplay: "flex" }}>
        <div className="sortingFilrtersTechnology">
            <form name="firstRadio" class="firstRadio"> 
             <div>
                <label for="sortOrder1"> {TechnologiesData[number].SortOrder[0]}</label>
                <input onClick={()=>markDirection(TechnologiesData[number].SortOrder[0])} type="radio" id='sortOrder1' name='sortOrder' defaultChecked= 'true}'/>
            </div>
                <div>
                    <label for="sortOrder2"> {TechnologiesData[number].SortOrder[1]}</label>
                    <input onClick={()=>markDirection(TechnologiesData[number].SortOrder[1])}type="radio" id='sortOrder2' name='sortOrder'></input>
                </div>
            </form>
            <br></br>
            <form className="sortingFilrtersTechnology">
                <div class="secRadio">
                    {TechnologiesData[number].SortBy.map((n, i) => <div key={i} >
                        <label for={n}> {n}</label>
                        <input onClick={(e)=>markSort({n},e)} type="radio" name='secRadio'id={n} defaultChecked={i==0?'true':null}/>
                    </div>
                    )}
                </div>
            </form>
        </div >
        <div style={{ backgroundColor: colors[2] }} class="technologyDisplay">

            {TechnologiesData[0].technologies.map((n, i) => <div className="singleTechnology">
                {TechnologiesData[0].technologies[i].map((n, i) => i % 3 == 0 ? <technology className="singleTechnologyName" key={i}><h2><b>{n}</b></h2></technology> :
                    <div className="ratings">{i % 3 == 1 ? <rating key={i}>
                        <StarRating totalStars={5} s={parseInt(n)} subjectOfRating="capability" />
                    </rating> :
                        <rating key={i}>
                            <StarRating totalStars={projects.length} s={parseInt(n)} subjectOfRating="projects" />
                        </rating>}</div>
                )}
            </div>
            )}
        </div>
    </div >;
}
export default Technologies;