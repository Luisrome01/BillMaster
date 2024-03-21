import React from "react";

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
            <button style={style} onClick={handleClick} className="btn">
                    <img src={img}/>
                    {text}
            </button>
        </div>
    )
}

export default BtnGeneral;