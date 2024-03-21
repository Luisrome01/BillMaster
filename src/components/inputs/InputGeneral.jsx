import React from "react";

const InputGeneral = ({type, placeholder, width, height, color, borderRadius, shadow}) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        boxShadow: shadow
    }
    return (
        <input type={type} placeholder={placeholder} style={style} className="InputGeneral"/>
    )
}

export default InputGeneral;