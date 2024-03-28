import React, { useEffect, useState } from "react";
import "./css/MetodosTable.css";
import exploreSVG from "../../assets/explore.svg";

const MetodosTable = ({ width, height, color, data }) => {
	const style = {
		width: width ? width : "90%",
		height: height ? height : "85%",
		backgroundColor: color ? color : "#ffffff",
	};
	return (
		<div style={style} className="MetodosTableContainer">
			<div className="MetodosTableWrapper">
				<div className="MetodosTableHeader">
					<p>Metodo de Pago</p>
					<p>Banco</p>
					<p>Monto</p>
				</div>
				<div className="MetodosTableBody">
					{data.map((fila, index) => (
						<div key={index} className="MetodosTableRow">
							<p>{fila.metodosPago}</p>
							<p>{fila.banco}</p>
							<p>{fila.monto}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MetodosTable;
