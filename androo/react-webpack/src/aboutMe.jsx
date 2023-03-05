import React from "react";
import data from "../src/data/aboutme.json";

const AboutMe = () => <div>
                    <img src={data[0].aboutMe[0]} style={{width: '32%'}}></img>
                    <div>
                    <h3><b>
                    {data[0].aboutMe[1]}
                    </b></h3>
                    <p>
                    {data[0].aboutMe[2]}
                    </p>
                    </div>
                    <div>
                    <h3><b>
                    {data[0].personality[0]}
                    </b></h3>
                    <subhead><a href = {data[0].personality[2]} alt="Wikipedia def."><sup> {data[0].personality[1]}</sup></a></subhead>
                    <p>
                    {data[0].personalityDesc.map((n,i)=>n.map((m,j)=>j%2==1?<p>{m}</p>:<h4>{m}</h4>))}
                    </p>
                    </div>
                    </div>

export default AboutMe;

