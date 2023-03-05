import React from "react";
// import StarRating from './StarRating.jsx';
import Technologies from './Technologies.jsx'
import AboutMe from './aboutMe.jsx';
import WwwProjects from './wwwProjects.jsx';
import Library from "./Books.jsx";
import Books from "./Books.jsx"
 //import img from '../img/aboutme.png';



const container = () => 
<containerBar>
    <main>
        <article><AboutMe/></article>
        <article><Technologies/></article>
        <article><WwwProjects/></article>
        {/* <article><Library/></article> */}
        <article><Books/></article>
    </main>
    <aside>
    {/* <Ramka/> */}
    </aside>
</containerBar>
export default container(); 