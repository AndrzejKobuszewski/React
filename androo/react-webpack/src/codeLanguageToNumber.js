import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./VisitCardPage";

function codeLanguageToNumber() {
const {lang} = useContext(LanguageContext);
   let i=0;
   (lang == 'polski')?i=1:((lang == 'Deutsch')?i=2:null);
   return i;
}

export default codeLanguageToNumber;  