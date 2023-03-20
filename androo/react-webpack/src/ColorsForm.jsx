import React from "react";
import ColorsFormdata from "../src/data/ColorsFormdata.json";
import { useContext, useState } from "react";
import { ColorContext } from "./VisitCardPage";


const formStyle = {
    position: "relative",
    zIndex: "10",
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '8px',
    marginRight: '8px',
}

const labelStyle = {
    marginTop: "2px",
    marginLeft: "4px",
    width: "115px"
}
const inputStyle = {
    marginTop: "2px",
    marginLeft: "4px",
}


function ColorsForm({ changeColorsForm = (f) => f }) {

    const { colors, setColors } = useContext(ColorContext);
    
    function changeColorsForm(){
        let inputs = document.querySelectorAll('input[type="color"]');
        setColors([inputs[0].value,inputs[1].value,inputs[2].value]);
        document.querySelector('body').style.color=inputs[0].value;
        document.querySelector('body').style.backgroundColor=inputs[1].value;
        document.querySelector(".colorPicker").style.display='none';      
        }
    return <>
        <div className='colorPicker' style={{ position: "absolute", display: 'none', backgroundColor: colors[1], borderRadius: "5px",   width: '61%'}}>

            <form style={formStyle}>
                <div>
                    {ColorsFormdata[0].colorLabels.map((n, i) =>
                     <><input defaultValue={ColorsFormdata[0].colorLabels[i][1]}   className={"color"} style={inputStyle} name={'fontColor'} key={i} type={('color')}  
                    />
                        <label style={labelStyle} for={'fontColor'} key={i}>{n[0]}</label>
                    </>)}
                </div>
                <div>
                    <>
                        <button onClick={(e) => (e.preventDefault(), changeColorsForm())}>{ColorsFormdata[0].buttonlabels[0]}</button>
                        <button onClick={(e) => (e.preventDefault(), document.querySelector('.colorPicker').style.display = 'none')}>{ColorsFormdata[0].buttonlabels[1]}</button>
                    </>
                </div>
            </form>
        </div>
    </>;
}
export default ColorsForm