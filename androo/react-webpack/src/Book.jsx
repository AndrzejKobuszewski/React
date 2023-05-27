import React from "react";
import data from "../src/data/Books.json";
import codeLanguageToNumber from "./codeLanguageToNumber";
const Book = ({number= codeLanguageToNumber(),   dane=data, coverFrontsource = "coverFrontsource", coverBacksource = "coverBacksource", title = "title", author = "author", version = 2, year = 2021 }) =>

dane.map((n,i)=><div key ={i}> 
   <div  style= {{display:"inline-grid", gridTemplateColumns:"30% 40% 30%", borderBottom: "1px solid", marginTop:"3px"}}>
        <div>
           <img src= {n.coverFrontsource} style={{ width: '80%' }} ></img>
        </div>
        <div>
        <h4>{n.title} <br></br>version: {n.version} </h4>
            {n.author} {n.year}<br></br>
    
           {/* {toString(n.coverBacksource) ==false ? <img src= {n.coverFrontsource} style={{ width: '30%' }}></img>: <p>no preview available</p>} */}
        </div>
        <div style={{marginLeft:"10px"}}>
        {n.description[number]}
        </div>
        <div>
        
        </div>
    </div>   
    
    </div>)
    ;
        export default Book;