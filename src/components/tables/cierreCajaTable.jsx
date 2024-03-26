import React, { useEffect, useState } from "react";

import "./css/cierreCajaTable.css";
import trashbinSVG from "../../assets/trashbin.svg";
import exploreSVG from "../../assets/explore.svg";

const CierreCajaTable = ({ width, height, color, eliminarProducto, rows }) => {
	const style = {
		width: width ? width : "90%",
		height: height ? height : "85%",
		backgroundColor: color ? color : "#ffffff",
	};

	rows = [
		{
			nd: "123456",
			date: "12/12/2021",
			monto: "$ 100.00",
		},
		{
			nd: "123456",
			date: "12/12/2021",
			monto: "$ 100.00",
		},
		{
			nd: "123456",
			date: "12/12/2021",
			monto: "$ 100.00",
		},
		{
			nd: "123456",
			date: "12/12/2021",
			monto: "$ 100.00",
		},
	];

	return (
		<div style={style} className="cierreCajaTableContainer">
			<div className="cierreCajaTableWrapper">
				<div className="cierreCajaTableHeader">
					<p>Numero de Documento</p>
					<p>Fecha</p>
					<p>Monto</p>
					<p></p>
				</div>
				<div className="cierreCajaTableBody">
					{rows.map((fila, index) => (
						<div key={index} className="cierreCajaTableRow">
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
