import React,{useState,useEffect} from "react";
import Fetch from "./fetch";

function Gitrepos ({login='AndrzejKobuszewski'}){

return <div style={{display:"flex", flexWrap:"wrap", marginLeft: '15px'}}> 
<Fetch  uri={`https://api.github.com/users/${login}/repos`} renderSuccess={({data})=> data.map((n,i)=><article style={{width:"48%", marginTop:"10px", borderBottom:"1px solid"}} key={i}>{i+1}. In repository <b>"{n.name}"</b> I used languages: 
 {   (n.name=="vba"||n.name=="Git-and-GitHub-Book")?<p>not all languages are known to github.com. Ie. vba and github comments itselfs are stored in dedicated files</p>:
    <Fetch style={{width:'48px'}} uri={n.languages_url} renderSuccess= {({data})=> 
    Object.entries({data}.data).map((m,j)=> m.map((o,k)=><p style={{textAlign:"left", marginLeft:"15px"}} key={{i}+"."+{j}+"."+{k}}>{(k%2==0)?
    <span><b> &bull; {o}: </b></span>:<span>{o} chars registered by Github.com;</span>}</p>)) }/> }
<br></br></article>)}/>

</div>
} 


export default Gitrepos;