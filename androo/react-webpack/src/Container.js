import React from "react";
import Technologies from './Technologies.jsx'
import AboutMe from './aboutMe.js';
import WwwProjects from './wwwProjects.jsx';
import Library from "./Books.jsx";
import Books from "./Books.jsx"


const Container = ({page, mode}) => 

<containerBar >
<main>
      {(() => {
        switch (page) {
          case 'About me':
            return <AboutMe mode={mode}/>;
            case 'Technologies':
            return <Technologies />;
            case 'About me':
            return <AboutMe />;
            case 'www Projects':
            return <WwwProjects />;  
            case 'Library':
            return <Library />;
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

 
   