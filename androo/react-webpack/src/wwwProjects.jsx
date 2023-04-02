import React from 'react';
import WwwProject from './WwwProject';
import codeLanguageToNumber from './codeLanguageToNumber';
import project from'../src/data/wwwProjects.json';

fetch('https://api.github.com/users/AndrzejKobuszewski')
.then(response=>response.json())
.then(console.log)
.catch(console.error)

const WwwProjects =({number=codeLanguageToNumber()})=><>
<h3>{project[0].wwwProjectsIntro[number]}</h3>

<WwwProject/>

</> 
export default WwwProjects; 