import React from "react";
import data from "./data/aboutme.json";
import { useState } from "react";

const Introduction = ({ move = (f) => f }) => (
  <div>
    <h3>
      <b>{data[0].aboutMe[1]}</b>
    </h3>
    <p>{data[0].aboutMe[2]}</p>
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
  thinkCloud = (f) => f
  
}) => (
  <div>
    <div>
      <h3>
        <b>{data[0].personality[0]}</b>
      </h3>
      <subhead>
        <a href={data[0].personality[2]} alt="Wikipedia def.">
          <sup> {data[0].personality[1]}</sup>
        </a>
      </subhead>
    </div>
    <div>
      {data[0].personalityDesc
        .map((n, i) =>
          i == 0 ? (
            <h4 key={i}>{n[0]}</h4>
          ) : (
            <h5 onClick={()=>thinkCloud(i)} style={{ cursor: "pointer" }} key={i}>
              {n[0]}
            </h5>
          )
        )
        .filter((numer) => numer.key < data[0].personalityDesc.length - 1)}
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

const FeatureDesc = ({think}) => (
  <div>
    {data[0].personalityDesc.map((n, i) => i==think?(<p key={i}>{n[1]}</p>):null)}
  </div>
);
const PersonalitySummary = () => (
  <div>
    <p>
      <b>{(data[0].personalityDesc[data[0].personalityDesc.length - 1])}</b>
    </p>
  </div>
);

function AboutMe({ talk = "Introduction", thinkCloud = "noThink", noSet=[] }) {
  const [subject, setSubject] = useState(talk);
  const [think, setThink] = useState(thinkCloud);
  const [readSet,setReadSet] = useState(noSet)
  

  return (
    <>
      <div className="AboutMe">
        {subject == "Introduction" ? (
          <article className="speak" style={{ maxWidth: "34%" }}>
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
              <article className="speak">
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
              <article className="think">
                <FeatureDesc think={think}/>
              </article>
              {readSet.length==5?
              <article className="sumUp">
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
