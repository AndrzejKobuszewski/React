import React from "react";



 const Hamburger = ({ toggleMenu = (f) => f }) =>

    <div
        className="hamburger" onClick={toggleMenu}
    >
        <div
            style={{
                backgroundColor: "white",
                borderWidth: "5px",
                width: "60%",
                margin: "17% 20%",
                height: "10%",
            }}
        ></div>
        <div
            style={{
                backgroundColor: "white",
                borderWidth: "5px",
                width: "60%",
                margin: "17% 20%",
                height: "10%",
            }}
        ></div>
        <div
            style={{
                backgroundColor: "white",
                borderWidth: "5px",
                width: "60%",
                margin: "17% 20%",
                height: "10%",
            }}
        ></div>
    </div>

export default Hamburger
