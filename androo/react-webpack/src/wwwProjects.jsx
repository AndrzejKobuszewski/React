import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import data from "../src/data/VisitCardPageData.json";
import WwwProject from './WwwProject';

const WwwProjects =()=><>
<h3>{data[0].wwwProjectsIntro}</h3>
<WwwProject/>

</> 
export default WwwProjects; 