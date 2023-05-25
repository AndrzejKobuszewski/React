import React,{useState,useEffect} from "react";
import Fetch from "./fetch";
import codeLanguageToNumber from "./codeLanguageToNumber";
import reposData from "./data/wwwProjectsGitRepos.json";

function Gitrepos ({login='AndrzejKobuszewski', number=codeLanguageToNumber()}){

return <div style={{display:"flex", flexWrap:"wrap", marginLeft: '15px'}}> 
<Fetch  uri={`https://api.github.com/users/${login}/repos`} renderSuccess={({data})=> data.map((n,i)=><article style={{width:"48%", marginTop:"10px", borderBottom:"1px solid"}} key={i}>{i+1}. 
{reposData[number].inRepository} <b>"{n.name}"</b> {reposData[number].iUsedLanguages}: 
 {   (n.name=="vba"||n.name=="Git-and-GitHub-Book")?<p>{reposData[number].GitRepoDisclaimer}</p>:
    <Fetch style={{width:'48px'}} uri={n.languages_url} renderSuccess= {({data})=> 
    Object.entries({data}.data).map((m,j)=> m.map((o,k)=><p style={{textAlign:"left", marginLeft:"15px"}} key={{i}+"."+{j}+"."+{k}}>{(k%2==0)?
    <span><b> &bull; {o}: </b></span>:<span>{o} {reposData[number].charDescription}</span>}</p>)) }/> }
<br></br></article>)}/>

</div>
} 


export default Gitrepos;