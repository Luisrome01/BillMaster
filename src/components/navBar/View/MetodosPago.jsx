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
	const [montoPagado, setMontoPagado] = useState("0.00");
	const [listMetodosPago, setListMetodosPago] = useState([]);
	const [metodoPago, setMetodoPago] = useState("");
	const [banco, setBanco] = useState("");
	const [monto, setMonto] = useState("");

	const agregarMetodoPago = () => {
		let valido = true;
		function revisarCampos() {
			if (monto === "") {
				alert("Por favor ingrese un monto");
				return false;
			}
			if (banco === "" || banco === "Banco:") {
				alert("Por favor seleccione un banco");
				return false;
			}
			return true;
		}

		switch (metodoPago) {
			case "TRANSFERENCIA":
				valido = revisarCampos();
				break;
			case "TARJETA":
				valido = revisarCampos();
				break;
			default:
				if (monto === "" || monto === "0.00" || monto === "0") {
					alert("Por favor ingrese un monto");
					setBanco("NO APLICABLE");
					valido = false;
				}
				break;
		}
		if (!valido) return;
		setListMetodosPago([
			...listMetodosPago,
			{
				metodosPago: metodoPago,
				banco: metodoPago === "TRANSFERENCIA" || metodoPago === "TARJETA" ? banco : "NO APLICA",
				monto: parseFloat(monto),
			},
		]);
		setMontoPagado((prev) => (parseFloat(prev) + parseFloat(monto)).toFixed(2));
		setMonto("");
	};

	const eliminarPago = (codigo) => {
		const index = listProductos.findIndex((element) => element.codigo === codigo);
		if (index !== -1) {
			const updatedProductos = [...listProductos];
			updatedProductos.splice(index, 1);
			setListProductos(updatedProductos);
		}
	};

	return (
		<>
			<div className="MetodosContainer">
				<h1 className="MetodosHeaderContainer">Agregar metodos de pago</h1>
				<div className="MetodosInput">
					<div className="MetodoMetododPago">
						<InputMetodosPago
							name="Metodo de pago:"
							color="#D9D9D9"
							width={"150px"}
							padding={"5px"}
							boderRadius={"10px"}
							height={"20%"}
							valorMetodoPago={setMetodoPago}
							valorBanco={setBanco}
						/>
					</div>

					<div className="MetodoMonto-BotonAgregar">
						<div className="MetodoMonto">
							<InputDiferente name="Monto:" color="#D9D9D9" width="15%" onChange={setMonto} value={monto} />
						</div>
						<div className="MetodoBotonAgregar">
							<BtnGeneral img={svgAdd} text="Agregar Pago" width="165px" handleClick={agregarMetodoPago} />
						</div>
					</div>
				</div>

				<div className="MetodosPagoTableContainer">
					<MetodosTable data={listMetodosPago} />
				</div>

				<div className="MetodosCheckoutContainer">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "18px" }}>Total:</p>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "25.4331px", fontWeight: "bold" }}>$ {montoTotal}</p>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ color: "green", position: "relative", marginLeft: "auto", fontSize: "18px" }}>Pagado: $ {montoPagado}</p>
						<p style={{ color: "red", position: "relative", marginLeft: "auto", fontSize: "18px", fontWeight: "bold" }}>
							Faltante: $ {(parseFloat(montoTotal) - listMetodosPago.reduce((acc, curr) => acc + curr.monto, 0)).toFixed(2) || "0.00"}
						</p>
					</div>
					<BtnGeneral text="Checkout" width="140px" color="#ff6060" onHoverColor="#c54444" img={cartSVG} />
				</div>
			</div>
		</>
	);
};

export default MetodosPago;
