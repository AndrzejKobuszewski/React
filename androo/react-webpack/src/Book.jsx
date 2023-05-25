import React from "react";
import data from "../src/data/Books.json";
const Book = ({dane=data, coverFrontsource = "coverFrontsource", coverBacksource = "coverBacksource", title = "title", author = "author", version = 2, year = 2021 }) =>

dane.map((n,i)=><p key ={i}> 
   <div style= {{display:"inline-grid", gridTemplateColumns:"30% 40% 30%"}}>
        <div>
           <img src= {n.coverFrontsource} style={{ width: '80%' }} ></img>
        </div>
        <div>
        <h4>{n.title} <br></br>version: {n.version} </h4>
            {n.author} {n.year}<br></br>
    
           {/* {toString(n.coverBacksource) ==false ? <img src= {n.coverFrontsource} style={{ width: '30%' }}></img>: <p>no preview available</p>} */}
        </div>
        <div style={{marginLeft:"10px"}}>
        {n.description}
        </div>
        <div>
        
        </div>
    </div>   
    
    </p>)
    ;
        export default Book;