import React from "react";
import { useContext } from "react";
import ColorsForm from "./ColorsForm";
import header from "./data/header.json";
import {ColorContext, LanguageContext} from './VisitCardPage';
import codeLanguageToNumber from "./codeLanguageToNumber";
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


export function Logo() {
  return (
    <a href="http://tourfast.pl/Resumee1/#About%20me"> <span className="Logo"
      style={{
        fontFamily: "VT323-Regular",
        fontSize: "8.7vw",
        fontWeight: "bolder",
        cursor: "pointer",
        textDecoration: "none"
        
      }} 
    >
      androo
      <span className="Logo1"
        style={{
          padding: "0 1%",
          marginLeft: "1%",
          fontSize: "9vw",
          fontWeight: "bolder",
          backgroundColor: "white",
          borderRadius: '5px',
          overflowX: 'scroll',
           whiteSpace: 'nowrap'
        }}
      >
        IT
      </span>
    </span>
    </a>);
}

const LightTheme = ({changemodecontrast =(f)=>f, changemodedark =(f)=>f, data, number=codeLanguageToNumber()  }) => (
  <div className="lightTheme" style={{ display: "grid", marginTop: "-4px", lineHeight: '1.1rem', borderRadius: '5px', backgroundColor: '#f6f6f680'}}>
    <div className="contrastVersion" >
    <label htmlFor="contrastTheme">{data[number].contrast}</label>
    <input type="checkbox" id="contrastTheme" name="contrastTheme" onChange={()=>changemodecontrast()}></input>
    </div>
    <div className="darkVersion">
    <label htmlFor="lightTheme"> {data[number].darkmode} </label>
    <input type="checkbox" id="lightTheme" name="lightTheme" onChange={()=>changemodedark()}></input>
    </div>
  </div>
);

const ColorTheme = ({ dane,  changemoderegular =(f)=>f,number=codeLanguageToNumber()}) => (
  <>
   <div> <button className= "ColorFormButton" onClick={()=>(changemoderegular())} id="colorTheme" name="colorTheme">
      {dane[number].colorTheme}
    </button> 
    </div>
    <ColorsForm className="colorForms"/>
  </>
);

function Language({ dane, changeLanguage = (f) => f }) {
  const {lang,setLang}=useContext(LanguageContext);
  function changeLanguage(e){
    setLang(e)
  }
  return (
    <select onChange={(e) => changeLanguage(e.target.value)} name="lang" id="lang">
      {dane[0].language.map((langabbr,i) => (
        <option key={i}>{langabbr}</option>
      ))}
    </select>
  );
}
const WebOptions = ({changemoderegular={changemoderegular}, changemodecontrast={changemodecontrast}, changemodedark={changemodedark}}) => (
  <>
  
    <LightTheme data={header} changemodecontrast={changemodecontrast} changemodedark={changemodedark} style={{width: "30%"}}/>
    <ColorTheme changemoderegular={changemoderegular} dane={header} style={{width: "30%"}}/>
    <Language dane={header} style={{width: "30%"}}/>
  </>
);
const WebOptionsMobile = ({changemoderegular={changemoderegular}, changemodecontrast={changemodecontrast}, changemodedark={changemodedark}}) => (
  <>
  
    <LightTheme data={header} changemodecontrast={changemodecontrast} changemodedark={changemodedark} style={{width: "120%"}}/>
    <ColorTheme changemoderegular={changemoderegular} dane={header} style={{width: "76%"}}/>
    <Language dane={header} style={{width: "120%"}}/>
  </>
);

function MenuList({ dane, changePage = (f) => f, number = codeLanguageToNumber()}) {
  return (

    <ul>
      {dane[number].menu.map((item, i) => (
        
          <li
            onClick={() => changePage(item)}
            key={i} style={{ cursor: "pointer", borderRadius: '5px' }}> {item}</li>

      ))}
    </ul>
  );
}

function Header({ changePage, changemoderegular, changemodecontrast, changemodedark}) {
  
const {colors, setColors} = useContext(ColorContext);


  return (
    <div className ='headerBar' >
      <div className="Logo">
        <Logo changemoderegular={changemoderegular}/>
      </div>
      <div className="userChoices" >
        <div  style={{borderColor: colors[0]}} className="WebOptions">
          <WebOptions changemoderegular={changemoderegular} changemodecontrast={changemodecontrast} changemodedark={changemodedark}/>
        </div>
        <MenuList dane={header} changePage={changePage} />
      </div>
      <div className="userChoicesMobile" >
        <div  style={{borderColor: colors[0]}} className="WebOptions">
          <WebOptionsMobile changemoderegular={changemoderegular} changemodecontrast={changemodecontrast} changemodedark={changemodedark}/>
        </div>
        <MenuList dane={header} changePage={changePage} />
      </div>
    </div>
  );
}
export default Header;
