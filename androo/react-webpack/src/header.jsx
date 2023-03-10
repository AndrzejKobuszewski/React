import React from "react";
import data from "../src/data/VisitCardPageData.json";

export function Logo() {
  return (
    <span
      style={{
        fontFamily: "VT323-Regular",
        fontSize: "8.7vw",
        fontWeight: "bolder",
        color: "black",
      }}
    >
      androo
      <span
        style={{
          padding: "0 1%",
          marginLeft: "1%",
          fontSize: "9vw",
          fontWeight: "bolder",
          color: 'rgba(136, 74, 74, 0.5)',
          backgroundColor: "white",
          overflowX: 'scroll',
           whiteSpace: 'nowrap'
        }}
      >
        IT
      </span>
    </span>
  );
}

const LightTheme = () => (
  <div style={{ display: "grid", marginTop: "-4px", lineHeight: '1.1rem'}}>
    <div>
    <label for="contrastTheme">contrast version</label>
    <input type="checkbox" id="contrastTheme" name="contrastTheme"></input>
    </div>
    <div>
    <label for="lightTheme"> darkmode</label>
    <input type="checkbox" id="lightTheme" name="lightTheme"></input>
    </div>
  </div>
);
const ColorTheme = ({ dane }) => (
  <>
    <button id="colorTheme" name="colorTheme">
      {dane[0].colorTheme}
    </button>
    
  </>
);
const Language = ({ dane }) => (
  <select name="lang" id="lang">
    {dane[0].language.map((langabbr) => (
      <option>{langabbr}</option>
    ))}
  </select>
);
const WebOptions = ({}) => (
  <>
  
    <LightTheme style={{width: "175px"}}/>
  
    <ColorTheme dane={data} style={{width: "175px"}}/>
    <Language dane={data} style={{width: "175px"}}/>
  </>
);

const MenuList = ({ dane }) => (
  
    <ul>
    {dane[0].menu.map((item) => (
      <li> {item}</li>
    ))}
  </ul>
);

const header = () => (
  <headerBar>
    <div className="Logo">
      <Logo dane={data} />
    </div>
    <userChoices>
      <div className = "WebOptions">
        <WebOptions/>
      </div>
      <MenuList dane={data} />
    </userChoices>
  </headerBar>
);
export default header();
