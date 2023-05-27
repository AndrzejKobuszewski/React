import React from "react";
import { createContext,useState } from "react";
import dane from "../src/data/VisitCardPageData.json";
import ColorsFormdata from "../src/data/ColorsFormdata.json";
import Header from "./Header.jsx";
import Container from "./Container.js";
import Footer from "./Footer.jsx";


export const CreatetartColorsArray = () =>
{let startColorsArray = ["a","a"];
ColorsFormdata[0].colorLabels.map((n,i)=>n.map((m,j)=>j%2==1?(startColorsArray.push(m+" ")):null));
return startColorsArray.splice(2,3);}

export  const ColorContext = createContext();
export  const LanguageContext = createContext();

function VisitCardPage({startPage=dane[0].menu[0], startColors= CreatetartColorsArray()})
 { 
  const [page, setPage] = useState(startPage);
  const [colors, setColors]=useState(startColors);
  const [mode,setMode]=useState('regular');
  const [lang, setLang]=useState('english')

  let contrastLink = document.getElementById('contrast');
  let darkLink = document.getElementById('dark');  

  function changemoderegular(){
    let tickContrast = document.getElementById('contrastTheme');
    let tickDarkmode = document.getElementById('lightTheme');  
    let contrastLink = document.getElementById('contrast');
    let darkLink = document.getElementById('dark');  

    document.querySelector('.colorPicker').style.display="block";
    setMode('regular');
    tickContrast.checked=false;
    tickDarkmode.checked=false;
    contrastLink.rel="t";
    darkLink.rel="t";

   }
   function changemodecontrast(){  
    let tickContrast = document.getElementById('contrastTheme');
    let tickDarkmode = document.getElementById('lightTheme');  
    (tickContrast.checked==true)?(setMode('contrast'), tickDarkmode.checked=false,  contrastLink.rel="stylesheet",
    darkLink.rel="t"):(setMode('regular'),contrastLink.rel="t",
    darkLink.rel="t");
   
   }
   function changemodedark(){
    let tickContrast = document.getElementById('contrastTheme');
    let tickDarkmode = document.getElementById('lightTheme');  
    (tickDarkmode.checked==true)?(setMode('dark'), tickContrast.checked=false,  contrastLink.rel="t",
    darkLink.rel="stylesheet"):(setMode('regular'),contrastLink.rel="t",
    darkLink.rel="t");
   
   }
 
   return (
    <>
          
      <ColorContext.Provider value = {{colors, setColors}}>
        <LanguageContext.Provider value={{lang, setLang}}>
        

          <Header changePage={(MenuItem)=>setPage(MenuItem)} changemodecontrast={()=>changemodecontrast()} 
          changemodedark={()=>changemodedark()}  changemoderegular={()=>changemoderegular()}  
          >
          </Header>
          <Container page={page} mode={mode}></Container>
          <Footer></Footer>
         
        </LanguageContext.Provider>
      </ColorContext.Provider>
      
    </>
  );
}

export default VisitCardPage;






