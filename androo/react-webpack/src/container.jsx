import React from "react";
import StarRating from './StarRating.jsx';
import Technologies from './Technologies.jsx'
import AboutMe from './aboutMe.jsx';
import WwwProjects from './wwwProjects.jsx';
 //import img from '../img/aboutme.png';



const container = () => 
<containerBar>
    <main>
        <article><AboutMe/></article>
        <article><Technologies/></article>
        <article><WwwProjects/></article>
     
    </main>
    <aside>
    {/* <Ramka/> */}
    </aside>
</containerBar>
export default container(); 