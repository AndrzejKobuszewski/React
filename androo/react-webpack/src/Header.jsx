import React from "react";
import { useContext } from "react";
import ColorsForm from "./ColorsForm";
import data from "./data/VisitCardPageData.json";
import {ColorContext} from './VisitCardPage';


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
          overflowX: 'scroll',
           whiteSpace: 'nowrap'
        }}
      >
        IT
      </span>
    </span>
  );
}

const LightTheme = ({changeModeContrast =(f)=>f, changeModeDark =(f)=>f  }) => (
  <div style={{ display: "grid", marginTop: "-4px", lineHeight: '1.1rem', borderRadius: '5px', backgroundColor: '#f6f6f680'}}>
    <div className="contrastVersion" >
    <label for="contrastTheme">contrast version</label>
    <input type="checkbox" id="contrastTheme" name="contrastTheme" onChange={()=>changeModeContrast()}></input>
    </div>
    <div>
    <label for="lightTheme"> darkmode</label>
    <input type="checkbox" id="lightTheme" name="lightTheme" onChange={()=>changeModeDark()}></input>
    </div>
  </div>
);

const ColorTheme = ({ dane,  changeModeRegular =(f)=>f}) => (
  <>
    <button onClick={()=>(changeModeRegular())} id="colorTheme" name="colorTheme">
      {dane[0].colorTheme}
    </button> 
    <ColorsForm className="colorForms"/>
  </>
);
const Language = ({ dane }) => (
  <select name="lang" id="lang">
    {dane[0].language.map((langabbr) => (
      <option>{langabbr}</option>
    ))}
  </select>
);
const WebOptions = ({changeModeRegular={changeModeRegular}, changeModeContrast={changeModeContrast}, changeModeDark={changeModeDark}}) => (
  <>
  
    <LightTheme changeModeContrast={changeModeContrast} changeModeDark={changeModeDark} style={{width: "175px"}}/>
    <ColorTheme changeModeRegular={changeModeRegular} dane={data} style={{width: "175px"}}/>
    <Language dane={data} style={{width: "175px"}}/>
  </>
);

const MenuList = ({dane, changePage=(f)=>f}) => (
  
    <ul>
    {dane[0].menu.map((item, i) => (
      <li onClick={()=>changePage(item)} key={i} style={{cursor:"pointer", borderRadius: '5px'}}> {item}</li>
    ))}
  </ul>
);

function Header({ changePage, changeModeRegular, changeModeContrast, changeModeDark}) {
  
const {colors, setColors} = useContext(ColorContext);


  return (
    <headerBar changeModeRegular={changeModeRegular} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark}>
      <div className="Logo">
        <Logo dane={data} />
      </div>
      <userChoices changeModeRegular={changeModeRegular} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark}>
        <div  style={{borderColor: colors[0]}} className="WebOptions">
          <WebOptions changeModeRegular={changeModeRegular} changeModeContrast={changeModeContrast} changeModeDark={changeModeDark}/>
        </div>
        <MenuList dane={data} changePage={changePage} />
      </userChoices>
    </headerBar>
  );
}
export default Header;
