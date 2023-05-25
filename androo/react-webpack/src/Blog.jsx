import React, { useState } from "react";
import data from "./data/Blog.json";
import codeLanguageToNumber from "./codeLanguageToNumber";

function Blog({ number = codeLanguageToNumber() }) {
  const [article, setArticle] = useState("list");

  function showArticle() {
   return  setArticle("Post1");
  }

  function showList(){
      setArticle('list')
  }

  return (
    <div
      className="projectdesc"
      style={{ display: "grid", gridTemplateColumns: "33% 67%", textAlign:"justify" }}
    >
      <div>
        <h1>
          Here you can find some of my personal opinions. This content will be
          protected by password soon.
        </h1>
      </div>
      <div>
        {article == "list" ? (
          <>
            <div
              onClick={ showArticle}
              style={{
                cursor: "pointer",
                display: "grid",
                gridTemplateColumns: "20% 80%"
              }}
            >
              <div style={{ width: "70%", margin: "5px 10px" }}>
                <img src={data[number].Post1.Thumbinal}></img>
              </div>
              <div>
                <h3>
                  {data[number].Post1.Title} <span style={{fontSize:"small"}}>{data[number].Post1.Date}</span>
                </h3>
                
                <br></br>
              </div>
            </div>
          </>
        ) : 
        (
          <>
            <div
              onClick={showList}
              style={{
                cursor: "pointer",
                display: "grid",
                gridTemplateColumns: "20% 80%",
              }}
            >
              <div style={{ width: "70%", margin: "5px 10px" }}>
                <img src={data[number].Post1.Thumbinal}></img>
              </div>
              <div>
                <h3>
                   {data[number].Post1.Title} <span style={{fontSize:"small"}}>{data[number].Post1.Date}</span>
                </h3>
                <br></br>
              </div>
              <div></div>
              <div style={{fontWeight: "normal"}}>
                <p>
                    {data[number].Post1.Content.Paragraph1}<br></br>
                
                {data[number].Post1.Content.List1.map((n,i)=><span> {String.fromCharCode(8594)} {n}<br></br></span>)}
              </p>
              <br></br>
              <p>{data[number].Post1.Content.Paragraph2}<br></br>
              {data[number].Post1.Content.List2.map((n,i)=><span> {String.fromCharCode(8594)} {n}<br></br></span>)}
              </p>
              <p>{data[number].Post1.Content.Paragraph3}</p>
              <p>{data[number].Post1.Content.Paragraph4}<br></br>
              {data[number].Post1.Content.List3.map((n,i)=><span> {String.fromCharCode(8594)} {n}<br></br></span>)}
              </p>
              <br></br>
              <p>{data[number].Post1.Content.Paragraph5}</p>

              
              
              </div>
              <button onClick={showList}>Back to the list</button>
            </div>
          </>
        )
        }
      </div>
    </div>
  );
}

export default Blog;
