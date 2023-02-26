import React from "react";
import data from "../src/data/VisitCardPageData.json";

export function Logo({ dane }) {
  return <span style={{ fontFamily: 'VT323-Regular', fontSize: 'xx-large' }}>{dane[0].logoLiterals}</span>;
}

const LightTheme = () => <>  <input type="checkbox" id="lightTheme" name="lightTheme"></input>
  <label for="lightTheme"> darkmode</label>
</>
const ColorTheme = ({dane}) => <><button id="colorTheme" name="colorTheme">{dane[0].colorTheme}</button>
 <label for="colorTheme">  </label>
</>
const Language = ({ dane }) => <select name="lang" id="lang">
  {dane[0].language.map((langabbr) => (<option>{langabbr}</option>))}
</select>
const WebOptions = () => <>

  <LightTheme/>
  <ColorTheme dane={data}/>
  <Language dane={data} />
</>;

const MenuList = ({ dane }) => <ul>{dane[0].menu.map((item) => (<li> {item}</li>))}</ul>;


const header = () =>
  <headerBar>
    <Logo dane={data} />
    <userChoices>
      <WebOptions />
      <MenuList dane={data} />
    </userChoices>
  </headerBar>
export default header(); 