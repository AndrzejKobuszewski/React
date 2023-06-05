import React from "react";
import ColorsFormdata from "../src/data/ColorsFormdata.json";
import { useContext } from "react";
import { ColorContext } from "./VisitCardPage";
import codeLanguageToNumber from "./codeLanguageToNumber";


const formStyle = {
    position: "relative",
    zIndex: "10",
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '8px',
    marginRight: '8px',
    width:'100%',
}

const labelStyle = {
    marginTop: "2px",
    marginLeft: "4px",
    width: "115px",
    wordWrap: 'break-word',
}
const inputStyle = {
    marginTop: "2px",
    marginLeft: "4px",
}


function ColorsForm({ changeColorsForm = (f) => f, number=codeLanguageToNumber() }) {

    const { colors, setColors } = useContext(ColorContext);
 
    
    function changeColorsForm(){
        let inputs = document.querySelectorAll('input[type="color"]');
        setColors([inputs[0].value,inputs[1].value,inputs[2].value]);
        document.querySelector('body').style.color=inputs[0].value;
        document.querySelector('body').style.backgroundColor=inputs[1].value;
        document.querySelector(".colorPicker").style.display='none';      
        }

    return <>
        <div className='colorPicker' style={{ position: "absolute", display: 'none', backgroundColor: colors[1], borderRadius: "5px",   width: '61%',zIndex:'10'}}>
    
            <form style={formStyle}>
                <div>
                    {ColorsFormdata[number].colorLabels.map((n, i) =>
                     <div key={i}><input defaultValue={ColorsFormdata[0].colorLabels[i][1]}   className={"color"} style={inputStyle} name={'fontColor'} type={('color')}  
                    />
                        <label style={labelStyle} htmlFor={'fontColor'} >{n[0]}</label>
                    </div>
                    )}
                </div>
                <div>
                    <>
                        <button onClick={(e) => (e.preventDefault(), changeColorsForm())}>{ColorsFormdata[number].buttonlabels[0]}</button>
                        <button onClick={(e) => (e.preventDefault(), document.querySelector('.colorPicker').style.display = 'none')}>{ColorsFormdata[number].buttonlabels[1]}</button>
                    </>
                </div>
            </form>
        </div>
    </>;
}
export default ColorsForm