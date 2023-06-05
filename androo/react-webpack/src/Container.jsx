import React, { Suspense } from "react";
import AboutMe from './aboutMe.js';
import { lazy } from 'react';
const Technologies = lazy(() => import('./Technologies.js'));
const WwwProjects = lazy(()=> import('./wwwProjects.jsx'));
//import WwwProjects from './wwwProjects.jsx';
import Library from "./Books.jsx";
import Blog from "./Blog";
import data from "./data/error404.json";
import codeLanguageToNumber from "./codeLanguageToNumber.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Routes, Route, useLocation} from "react-router-dom";


function Container({ page, mode }) {
const location = useLocation();

  return <div className='containerBar'>
    <main>
      
      <TransitionGroup className="Container-TabContent">
      <CSSTransition key={location.key} classNames="fade" timeout={200}>
      <Routes location={location}>
      
        <Route path="/" element={<AboutMe mode={mode} />} />
        <Route path="/About me" element={<AboutMe mode={mode} />} />
        <Route path="/O mnie" element={<AboutMe mode={mode} />} />
        <Route path="/Über mich" element={<AboutMe mode={mode} />} />
        
        <Route path='/Technologies' element={<Suspense fallback={<div>Loading...</div>}><Technologies mode={mode} /></Suspense>} />
        <Route path="/Technologie" element={<Suspense fallback={<div>Ładuję treść...</div>}><Technologies mode={mode} /></Suspense>} />
        <Route path="/Technologien" element={<Suspense fallback={<div>Loading...</div>}><Technologies mode={mode} /></Suspense>} />
      
        <Route path='/www Projects' element={<Suspense fallback={<div>Loading...</div>}><WwwProjects mode={mode} /></Suspense>} />
        <Route path="/Projekty www" element={<Suspense fallback={<div>Loading...</div>}><WwwProjects mode={mode} /></Suspense>} />
        <Route path="/www Projekte" element={<Suspense fallback={<div>Loading...</div>}><WwwProjects mode={mode} /></Suspense>} />

        <Route path='/Library' element={<Library page={page} />} />
        <Route path="/Biblioteka" element={<Library page={page} />} />
        <Route path="/Bibliothek" element={<Library page={page} />} />

        <Route path="/Blog" element={<Blog mode={mode} page={page} />} />

        <Route path="/*" element={<h1 style={{backgroundColor:"rgba(255, 255, 255, 0.88)"}}> {data[codeLanguageToNumber()].notFound} </h1>} />

      </Routes>
      </CSSTransition>
      </TransitionGroup>
   
    </main>

  </div>;
}
export default Container;


