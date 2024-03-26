import React, { useEffect, useState } from "react";
import "./css/cierreCajaTable.css";
import exploreSVG from "../../assets/explore.svg";

const CierreCajaTable = ({ width, height, color, eliminarProducto, data }) => {
	const style = {
		width: width ? width : "90%",
		height: height ? height : "85%",
		backgroundColor: color ? color : "#ffffff",
	};
	return (
		<div style={style} className="cierreCajaTableContainer">
			<div className="cierreCajaTableWrapper">
				<div className="cierreCajaTableHeader">
					<p>N Factura</p>
					<p>Nombre</p>
					<p>Numero de Documento</p>
					<p>Fecha</p>
					<p>Monto</p>
					<p></p>
				</div>
				<div className="cierreCajaTableBody">
					{data.map((fila, index) => (
						<div key={index} className="cierreCajaTableRow">
							<p>{fila.id}</p>
							<p>{fila.nombre}</p>
							<p>{fila.nd}</p>
							<p>{fila.date}</p>
							<p>{fila.monto}</p>
							<button style={{ border: "none", backgroundColor: "transparent", paddingRight: "15px" }}>
								<img src={exploreSVG}></img>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CierreCajaTable;
