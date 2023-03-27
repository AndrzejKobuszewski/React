import React from 'react';
import WwwProject from './WwwProject';
import codeLanguageToNumber from './codeLanguageToNumber';
import project from'../src/data/wwwProjects.json';

const WwwProjects =({number=codeLanguageToNumber()})=><>
<h3>{project[0].wwwProjectsIntro[number]}</h3>
<WwwProject/>

</> 
export default WwwProjects; 