import React, {useState} from "react";
function Ramka() {
    const [txt, setTxt] = useState('Piekarz');
    return <>
      <p onClick={()=>txt=='Piekarz'?setTxt('Murarz'):setTxt('Piekarz')}>{txt}</p>

    </>;
}
export default Ramka;