import React from "react";
import "./css/InputDiferente.css";

const InputDiferente = ({type, placeholder, width, height, color, borderRadius, shadow, name}) => {
    const style = {
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        boxShadow: shadow
    }
    return (<>
    <div className ="InputDContainer" style={{width}}>
            <div className="containerName">
                <span>{name}</span>
            </div>
            <input type={type} placeholder={placeholder} style={style} className="InputDiferente"/>
    </div>
        </>
       
    )
}

export default InputDiferente;