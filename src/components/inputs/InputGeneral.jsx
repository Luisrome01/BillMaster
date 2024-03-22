import React from "react";
import "./css/InputGeneral.css";
const InputGeneral = ({type, placeholder, width, height, color, borderRadius, shadow, name}) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        boxShadow: shadow
    }
    return (<>
            <div className="containerName">
                <span>{name}</span>
            </div>
                <input type={type} placeholder={placeholder} style={style} className="InputGeneral"/>
        </>
    )
}

export default InputGeneral;