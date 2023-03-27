import React from "react";
import Technologies from './Technologies.jsx'
import AboutMe from './aboutMe.js';
import WwwProjects from './wwwProjects.jsx';
import Library from "./Books.jsx";
import codeLanguageToNumber from "./codeLanguageToNumber.js";




const Container = ({page, mode, number=codeLanguageToNumber()}) => 

<containerBar >
<main>
      {(() => {
        switch (page) {
          case 'About me':
          case 'O mnie':
          case 'Über mich':
            return <AboutMe mode={mode} />;
            case 'Technologies':
            case "Technologie":
            case "Technologien":
            return <Technologies />;
            case 'www Projects':
            case "Projekty www":
            case "www Projekte":
            return <WwwProjects />;  
            case 'Library':
            case "Biblioteka":
            case "Bibliothek":
            return <Library page={page}/>;
            case 'Blog':
            return <Blog />;
          default:
            return <AboutMe />;
        }
      
      })()}
</main>
{/* <aside>
    <Ramka/>
</aside> */}

</containerBar>
export default Container; 

 
   