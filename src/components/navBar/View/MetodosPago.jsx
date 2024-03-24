import "./css/MetodosPago.css";
import React, { useState } from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputMetodosPago from "../../../components/inputs/InputMetodosPago";
import InputBanco from "../../../components/inputs/InputBanco";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/svg_add.svg";
import cartSVG from "../../../assets/marketKart.svg";
import ProductTable from "../../tables/productTable";

const MetodosPago = () => {
	const [montoTotal, setMontoTotal] = useState("0.00");

	const actualizarMontoTotal = (nuevoMonto) => {
		setMontoTotal(nuevoMonto);
	};

	return (
		<>
			<div className="MetodosContainer">
				<h1 className="MetodosHeaderContainer">Agregar metodos de pago</h1>

				<div className="MetodosInput">
					<div className="MetodoMetododPago">
						<div className="MetodoMetodo">
							<InputMetodosPago name="Metodo de pago:" color="#D9D9D9" width="200px" />
						</div>

						<div className="MetodoBanco">
							<InputBanco name="Metodo de pago:" color="#D9D9D9" width="200px" />
						</div>
					</div>
					<div className="MetodoMonto-BotonAgregar">
						<div className="MetodoMonto">
							<InputDiferente name="Monto:" color="#D9D9D9" width="15%" />
						</div>
						<div className="MetodoBotonAgregar">
							<BtnGeneral img={svgAdd} text="Agregar Pago" width="165px" />
						</div>
					</div>
				</div>

				<div className="FacturaTableContainer">{/* <ProductTable width="90%" height="85%" onTotalChange={actualizarMontoTotal} /> */}</div>

				<div className="FacturaCheckoutContainer">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "18px" }}>Total:</p>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "25.4331px", fontWeight: "bold" }}>$ {montoTotal}</p>
					</div>
					<BtnGeneral text="Checkout" width="140px" color="#ff6060" onHoverColor="#c54444" img={cartSVG} />
				</div>
			</div>
		</>
	);
};

export default MetodosPago;
