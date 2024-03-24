import React, { useEffect, useState } from "react";

import "./css/productTable.css";
import trashbinSVG from "../../assets/trashbin.svg";
import exploreSVG from "../../assets/explore.svg";

const ProductTable = ({ width, height, color, onTotalChange }) => {
	const [getTotal, setTotal] = useState(0);

	const style = {
		width: width ? width : "90%",
		height: height ? height : "85%",
		backgroundColor: color ? color : "#ffffff",
	};

	const [getData, setData] = useState([]);

	useEffect(() => {
		fetch("/src/json/productsInFactura.json") // Update the file path to the correct location
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error fetching data");
				}
				return response.json();
			})
			.then((data) => {
				setData(data.data);
				// sumar los totales de cada elemento del array desde getData columna6
				let total = 0;
				data.data.forEach((element) => {
					total += parseFloat(element.columna6);
				});
				setTotal(total);
				onTotalChange(getTotal.toFixed(2));
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<div style={style} className="ProductTableContainer">
			<div className="ProductTableWrapper">
				<div className="ProductTableHeader">
					<p></p>
					<p style={{ justifySelf: "left" }}>Codigo del producto</p>
					<p>Descripcion</p>
					<p>Cantidad</p>
					<p>Precio/Unidad</p>
					<p>IVA</p>
					<p>Total</p>
					<p></p>
				</div>
				<div className="ProductTableBody">
					{getData.map((fila, index) => (
						<div key={index} className="ProductTableRow">
							<button style={{ justifySelf: "center", border: "none", backgroundColor: "transparent" }}>
								<img src={trashbinSVG}></img>
							</button>
							<p style={{ justifySelf: "left" }}>{fila.columna1}</p>
							<p>{fila.columna2}</p>
							<p>{fila.columna3}</p>
							<p>$ {fila.columna4}</p>
							<p>$ {fila.columna5}</p>
							<p>$ {fila.columna6}</p>
							<button style={{ border: "none", backgroundColor: "transparent" }}>
								<img src={exploreSVG}></img>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductTable;
