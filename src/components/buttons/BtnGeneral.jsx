import React from "react";

const BtnGeneral = ({text, handleClick, width, height, color, borderRadius, shadow}) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        boxShadow: shadow
    }
    return (
        <button style={style} onClick={handleClick}>{text}</button>
    )
}

export default BtnGeneral;