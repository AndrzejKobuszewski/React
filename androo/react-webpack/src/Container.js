import React, {useEffect} from "react";
import Technologies from './Technologies.jsx'
import AboutMe from './aboutMe.js';
import WwwProjects from './wwwProjects.jsx';
import Library from "./Books.jsx";
import codeLanguageToNumber from "./codeLanguageToNumber";
import Blog from "./Blog"
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Container({ page, mode }) {
  
 return <div className='containerBar'>
    <main>
      {(() => {
        switch (page) {
          case 'About me':
          case 'O mnie':
          case 'Über mich':
            return <> <AboutMe mode={mode} /></>;
          case 'Technologies':
          case "Technologie":
          case "Technologien":
            return <Technologies mode={mode} />;
          case 'www Projects':
          case "Projekty www":
          case "www Projekte":
            return <WwwProjects mode={mode} />;
          case 'Library':
          case "Biblioteka":
          case "Bibliothek":
            return <Library page={page} />;
          case 'Blog':
            return <Blog mode={mode}  page={page}/>;
          default:
            return <AboutMe />;
        }

      })()}

    </main>
   
    {useEffect(()=> {document.location.hash = page} , [page])}

  </div>;
}
export default Container; 

 
   