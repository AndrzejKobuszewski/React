import React from "react";
import { createRoot } from "react-dom/client";
import VisitCardPage from "./VisitCardPage";
//import { BrowserRouter } from "react-router-dom";
import {ColorContext, mode} from './VisitCardPage';
import codeLanguageToNumber from "./codeLanguageToNumber";
import { HashRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);


root.render(
//<BrowserRouter>    
<HashRouter>
<VisitCardPage color={ColorContext} number={codeLanguageToNumber} mode/>
</HashRouter>
//</BrowserRouter>
);





