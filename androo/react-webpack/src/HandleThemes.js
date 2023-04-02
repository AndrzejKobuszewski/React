import React from "react";
import { useContext } from "react";
import {ColorContext} from './VisitCardPage';


export default function handleThemes (mode, i){
  
const {colors} = useContext(ColorContext);

  switch (mode){
  case 'regular':
   const regularStyle = `${colors[i]}`;
   return regularStyle      

  case 'contrast':
    const contrastStyle = "#393939";
    return contrastStyle    
      break;
  case 'dark':
    const darkStyle = "#393939";
    return darkStyle    
      break; 
  break;
    default:
      `${colors[i]}`
      break;
  }
}
const stylesThink = {backgroundColor: handleThemes(mode, colors, 1), opacity: "82%"};
const stylesSpeakSumUp = {backgroundColor: handleThemes(mode, colors, 2), opacity: "82%"};