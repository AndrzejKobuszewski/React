import React from "react";
export default function ({title, steps}){
    return (<section className="instructions">
    <h2>Sposób przygotowania</h2>
    {steps.map((step, i)=>(<p key={i}>{step}</p>))} 
   </section>
    );   
};