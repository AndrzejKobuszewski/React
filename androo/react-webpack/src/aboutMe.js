import React from "react";
import data from "./data/aboutme.json";
import { useContext, useState } from "react";
import {ColorContext} from './VisitCardPage';
import codeLanguageToNumber from "./codeLanguageToNumber";

const Introduction = ({ move = (f) => f , number=codeLanguageToNumber()}) => (
  <div>
    <h3>
      <b>{data[number].aboutMe[1]}</b>
    </h3>
    <p>{data[number].aboutMe[2]}</p>
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={move}
    >
      <div style={{ cursor: "pointer" }}> {"<<"}</div>
      <div style={{ cursor: "pointer" }}> {">>"}</div>
    </div>
  </div>
);

const PersonalityShort = ({
  move = (f) => f,
  thinkCloud = (f) => f, number=codeLanguageToNumber()
  
}) => (
  <div>
    <div>
      <h3>
        <b>{data[number].personality[0]}</b>
      </h3>
      <subhead>
        <a href={data[number].personality[2]} style={{textDecoration: 'none',color: 'currentColor'}} alt="Wikipedia def.">
          <sup> {data[number].personality[1]}</sup>
        </a>
      </subhead>
    </div>
    <div>
      {data[number].personalityDesc
        .map((n, i) =>
          i == 0 ? (
            <h4 key={i}>{n[0]}</h4>
          ) : (
            <h5 onClick={()=>thinkCloud(i)} style={{ cursor: "pointer", paddingLeft:"10px" }} key={i}>
              {n[0]}
            </h5>
          )
        )
        .filter((numer) => numer.key < data[number].personalityDesc.length - 1)}
    </div>
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
      onClick={move}
    >
      <div style={{ cursor: "pointer" }}> {"<<"}</div>
      <div style={{ cursor: "pointer" }}> {">>"}</div>
    </div>
  </div>
);

const FeatureDesc = ({think, number=codeLanguageToNumber()}) => (
  <div>
    {data[number].personalityDesc.map((n, i) => i==think?(<p key={i}>{n[1]}</p>):null)}
  </div>
);
const PersonalitySummary = ({number=codeLanguageToNumber()}) => (
  <div>
    <p>
      <b>{(data[number].personalityDesc[data[number].personalityDesc.length - 1])}</b>
    </p>
  </div>
);

function AboutMe({ talk = "Introduction", thinkCloud = "noThink", noSet=[],mode}) {
  const [subject, setSubject] = useState(talk);
  const [think, setThink] = useState(thinkCloud);
  const [readSet,setReadSet] = useState(noSet)
  const {colors} = useContext(ColorContext);

function handleThemes (mode, colors,i){

  switch (mode){
  case 'regular':
   const regularStyle = `${colors[i]}`;
   return regularStyle      

  case 'contrast':
    const contrastStyle = "#393939";
    return contrastStyle    
      break;
  case 'dark':
    const darkStyle = "#393939";
    return darkStyle    
      break; 
  break;
    default:
      `${colors[i]}`
      break;
  }
  
}
const stylesThink = {backgroundColor: handleThemes(mode, colors, 1), opacity: "82%"};
const stylesSpeakSumUp = {backgroundColor: handleThemes(mode, colors, 2), opacity: "82%"};



  return (
    <>
      <div className="AboutMe">
        {subject == "Introduction" ? (
          <article className="speak" style={stylesSpeakSumUp}>
            <Introduction
              move={() =>
                subject == "Introduction"
                  ? (setSubject("Personality"), setReadSet([]))
                  : (setSubject("Introduction"),setReadSet([]))
              }
            /> 
          </article>
        ) : (
          <>
            <div>
              <article className="speak" style={stylesSpeakSumUp}>
              <PersonalityShort
                  move={() =>
                    subject == "Introduction"
                      ? (setSubject("Personality"))
                      : (setSubject("Introduction"))
                      
                  }
                  thinkCloud={(a) => {
                    setThink(a);
                    readSet.includes(a)?null:readSet.push(a);
                    readSet.sort();
                    document.querySelector('article[class="think"]').style.display='block'}}
                />
              </article>
            </div>

            <div className="personality">
              <article className="think" style = {stylesThink}>
                <FeatureDesc  think={think}/>
              </article>
              {readSet.length==5?
              <article className="sumUp" style={stylesSpeakSumUp}>
                <PersonalitySummary readSet={readSet}/>
              </article>:null}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AboutMe;

