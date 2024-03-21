import React from "react";
import "./css/btn.css"
const BtnGeneral = ({text, handleClick, width, height, color, borderRadius, img, shadow}) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
        boxShadow: shadow
    }
    return (
        <div>
            <button style={style} onClick={handleClick} className="BtnGeneral">
                    <img src={img}/>
                    {text}
            </button>
        </div>
    )
}

export default BtnGeneral;