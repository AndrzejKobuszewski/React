import React from "react";
import { useContext } from "react";
import ColorsForm from "./ColorsForm";
import header from "./data/header.json";
import {ColorContext, LanguageContext} from './VisitCardPage';
import codeLanguageToNumber from "./codeLanguageToNumber";


export function Logo() {
  return (
    <span className="Logo"
      style={{
        fontFamily: "VT323-Regular",
        fontSize: "8.7vw",
        fontWeight: "bolder",
        
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
  );
}

const LightTheme = ({changeModeContrast =(f)=>f, changeModeDark =(f)=>f, data, number=codeLanguageToNumber()  }) => (
  <div style={{ display: "grid", marginTop: "-4px", lineHeight: '1.1rem', borderRadius: '5px', backgroundColor: '#f6f6f680'}}>
    <div className="contrastVersion" >
    <label for="contrastTheme">{data[number].contrast}</label>
    <input type="checkbox" id="contrastTheme" name="contrastTheme" onChange={()=>changeModeContrast()}></input>
    </div>
    <div>
    <label for="lightTheme"> {data[number].darkmode} </label>
    <input type="checkbox" id="lightTheme" name="lightTheme" onChange={()=>changeModeDark()}></input>
    </div>
  </div>
);

const ColorTheme = ({ dane,  changeModeRegular =(f)=>f,number=codeLanguageToNumber()}) => (
  <>
    <button onClick={()=>(changeModeRegular())} id="colorTheme" name="colorTheme">
      {dane[number].colorTheme}
    </button> 
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
      {dane[0].language.map((langabbr) => (
        <option>{langabbr}</option>
      ))}
    </select>
  );
}
const WebOptions = ({changeModeRegular={changeModeRegular}, changeModeContrast={changeModeContrast}, changeModeDark={changeModeDark}}) => (
  <>
  
    <LightTheme data={header} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark} style={{width: "175px"}}/>
    <ColorTheme changeModeRegular={changeModeRegular} dane={header} style={{width: "175px"}}/>
    <Language dane={header} style={{width: "175px"}}/>
  </>
);

const MenuList = ({dane, changePage=(f)=>f, number=codeLanguageToNumber()}) => (
  
    <ul>
    {dane[number].menu.map((item, i) => (
      <li onClick={()=>changePage(item)} key={i} style={{cursor:"pointer", borderRadius: '5px'}}> {item}</li>
    ))}
  </ul>
);

function Header({ changePage, changeModeRegular, changeModeContrast, changeModeDark}) {
  
const {colors, setColors} = useContext(ColorContext);


  return (
    <headerBar changeModeRegular={changeModeRegular} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark}>
      <div className="Logo">
        <Logo />
      </div>
      <userChoices changeModeRegular={changeModeRegular} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark}>
        <div  style={{borderColor: colors[0]}} className="WebOptions">
          <WebOptions changeModeRegular={changeModeRegular} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark}/>
        </div>
        <MenuList dane={header} changePage={changePage} />
      </userChoices>
    </headerBar>
  );
}
export default Header;
