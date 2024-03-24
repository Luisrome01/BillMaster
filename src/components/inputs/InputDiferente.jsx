import React from "react";
import "./css/InputDiferente.css";

const InputDiferente = ({ type, placeholder, width, height, color, borderRadius, shadow, name, flexBasis }) => {
	const style = {
		height: height ? height : "32px",
		backgroundColor: color ? color : "rgba(174, 187, 253, 0.25)",
		borderRadius: borderRadius ? borderRadius : "10px",
		boxShadow: shadow,
		width: width ? width : undefined,
	};

	return (
		<>
			<div className="InputDContainer" style={{ flexBasis: flexBasis }}>
				<p className="InputDTitle">{name}</p>

				<input type={type} placeholder={placeholder} style={style} className="InputDiferente" />
			</div>
		</>
	);
};

export default InputDiferente;
