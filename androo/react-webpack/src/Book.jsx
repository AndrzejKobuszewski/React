import React from "react";
import data from "../src/data/Books.json";
const Book = ({dane=data, coverFrontsource = "coverFrontsource", coverBacksource = "coverBacksource", title = "title", author = "author", version = 2, year = 2021 }) =>
dane.map((n,i)=><p key ={i}> 
   <div>
        <div>
           <img src= {n.coverFrontsource}></img>
        </div>
        <div>
            {toString(n.coverBacksource) ==false ? <img src= {n.coverFrontsource}></img>: <p>no preview available</p>}
        </div>
        <div>
            <h4>{n.title} version: {n.version} </h4>
            {n.author} {n.year}<br></br>
        </div>
        <div>
            {n.description}
        </div>
    </div>   
    
    </p>)
    ;
        export default Book;