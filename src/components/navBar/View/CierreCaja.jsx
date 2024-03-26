import React from "react";
import { useState, useEffect } from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDiferente from "../../../components/inputs/InputDiferente";
import CierreCajaTable from "../../../components/tables/cierreCajaTable";
import svgAdd from "../../../assets/search.svg";
import cartSVG from "../../../assets/marketKart.svg";
import "./css/CierreCaja.css";

const CierreCaja = () => {
	const [montoTotal, setMontoTotal] = useState("0.00");
	const [data, setData] = useState([]);

	useEffect(() =>{
		//fetch para obtener la data
		fetch("/src/json/facturas.json")
			.then((response) => {
				if(!response.ok){
					throw new Error("Error fetching data")
				}
				return response.json()
			})
			.then((data) => {
				setData(data.data)
				const total = data.data.reduce((acc, item) => acc + item.monto, 0);
				setMontoTotal(total.toFixed(2));
			})

		},[])

	return (
		<div className="CierreContainer">
			<h1 className="CierreHeaderContainer">Filtrar factura</h1>

			<div className="CierreInput">
				<div className="CierreCierredPago">
					<div className="CierreCierre">
					<InputDiferente name="Responsable" color="#D9D9D9" width="160px" />
					<InputDiferente name="Fecha:" color="#D9D9D9" width="160px" />
					</div>
				</div>
				<div className="CierreMonto-BotonAgregar">
					<div className="CierreBotonAgregar">
						<BtnGeneral img={svgAdd} text="Buscar factura" width="150px" />
					</div>
				</div>
			</div>

			<div className="FacturaTableContainer">
				<CierreCajaTable data={data}/>
			</div>

			<div className="FacturaCheckoutContainer">
				<div style={{ display: "flex", flexDirection: "column" }}>
					<p
						style={{
							position: "relative",
							marginLeft: "auto",
							fontSize: "18px",
						}}
					>
						Total:
					</p>
					<p
						style={{
							position: "relative",
							marginLeft: "auto",
							fontSize: "25.4331px",
							fontWeight: "bold",
						}}
					>
						$ {montoTotal}
					</p>
				</div>
				<BtnGeneral text="Checkout" width="140px" color="#ff6060" onHoverColor="#c54444" img={cartSVG} />
			</div>
		</div>
	);
};

export default CierreCaja;
