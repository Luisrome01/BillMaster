import "./css/MetodosPago.css";
import React, { useState, useEffect } from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputMetodosPago from "../../../components/inputs/InputMetodosPago";
import InputBanco from "../../../components/inputs/InputBanco";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/svg_add.svg";
import cartSVG from "../../../assets/marketKart.svg";
import MetodosTable from "../../tables/MetodosTable";
const MetodosPago = ({ totalCosto }) => {
	const [montoTotal, setMontoTotal] = useState(totalCosto ? totalCosto : "0.00");
	const [listMetodosPago, setListMetodosPago] = useState([]);

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
							<InputMetodosPago
								name="Metodo de pago:"
								color="#D9D9D9"
								width={"150px"}
								padding={"5px"}
								boderRadius={"10px"}
								height={"20%"}
							/>
						</div>

						<div className="MetodoBanco">
							<InputBanco name="Metodo de pago:" color="#D9D9D9" width={"100px"} padding={"5px"} boderRadius={"10px"} height={"20%"} />
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

				<div className="MetodosPagoTableContainer"> <MetodosTable  data={[]}/> </div>

				<div className="MetodosCheckoutContainer">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "18px" }}>Total:</p>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "25.4331px", fontWeight: "bold" }}>$ {montoTotal}</p>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ color: "green", position: "relative", marginLeft: "auto", fontSize: "18px" }}>
							Pagado: $ {listMetodosPago.reduce((acc, curr) => acc + curr.monto, 0) || "0.00"}
						</p>
						<p style={{ color: "red", position: "relative", marginLeft: "auto", fontSize: "18px", fontWeight: "bold" }}>
							Faltante: $ {parseFloat(montoTotal) - listMetodosPago.reduce((acc, curr) => acc + curr.monto, 0) || "0.00"}
						</p>
					</div>
					<BtnGeneral text="Checkout" width="140px" color="#ff6060" onHoverColor="#c54444" img={cartSVG} />
				</div>
				
			</div>
		</>
	);
};

export default MetodosPago;
