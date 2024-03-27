import React from "react";
import { useState, useEffect } from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDiferente from "../../../components/inputs/InputDiferente";
import CierreCajaTable from "../../../components/tables/cierreCajaTable";
import ModalCierre from "../../modal/ModalCierre"
import checkSVG from "../../../assets/checkmark.svg";

import "./css/CierreCaja.css";

const CierreCaja = () => {
	const [montoTotal, setMontoTotal] = useState("0.00");
	const [listIngresos, setListIngresos] = useState([]);
	const [listEgresos, setListEgresos] = useState([]);
	const [data, setData] = useState([]);
	const [openModal, setOpenModal] = useState(false);

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
				const ingresos = data.data.reduce((acc, item) => acc + item.ingresos, 0);
				const egresos = data.data.reduce((acc, item) => acc + item.egresos, 0);
				setMontoTotal(total.toFixed(2));
				setListIngresos(ingresos.toFixed(2));
				setListEgresos(egresos.toFixed(2));
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
					<InputDiferente name="Hora:" color="#D9D9D9" width="160px" />
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
						Saldo de cierre:
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
				
				<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ color: "#12B422", position: "relative", marginLeft: "auto", fontSize: "18px" }}>
							Ingresos: $ {listIngresos}
						</p>
						<p style={{ color: "#EB0000", position: "relative", marginLeft: "auto", fontSize: "18px", fontWeight: "bold" }}>
							Egresos: $ {listEgresos}
						</p>
				</div>
				
				<BtnGeneral text="Cierre de caja" width="140px" color="#ff6060" onHoverColor="#c54444" img={checkSVG} handleClick={() => {setOpenModal(true)}}/>
				{openModal && <ModalCierre closeModal={setOpenModal} ingresos={listIngresos} egresos={listEgresos} total={montoTotal}/>}
			</div>
		</div>
	);
};

export default CierreCaja;
