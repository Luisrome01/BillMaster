import React from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/search.svg";
import cartSVG from "../../../assets/marketKart.svg";
import InputDinamico from "../../inputs/InputDinamico";
import "./css/CierreCaja.css";

const CierreCaja = () => {

	// const CierrePago = () => {
	// 	const [montoTotal, setMontoTotal] = useState("0.00");
	
	// 	const actualizarMontoTotal = (nuevoMonto) => {
	// 		setMontoTotal(nuevoMonto);
	// 	};
	// };

  return (
	<div className="CierreContainer">
	<h1 className="CierreHeaderContainer">Filtrar factura</h1>

	<div className="CierreInput">

	  <div className="CierreCierredPago">

		<div className="CierreCierre">
			<InputDiferente name="Fecha:" color="#D9D9D9" width="160px" />
			<InputDinamico
				name="Cedula o Pasaporte:"
				color="#D9D9D9"
				width="200px"
			/>
		</div>

	  </div>
	  <div className="CierreMonto-BotonAgregar">
		<div className="CierreMonto">
		  <InputDiferente name="Monto:" color="#D9D9D9" width="160px" />
		</div>
		<div className="CierreBotonAgregar">
		  <BtnGeneral img={svgAdd} text="Buscar factura" width="150px" />
		</div>
	  </div>

	</div>

	<div className="FacturaTableContainer">
	  {/* <ProductTable width="90%" height="85%" onTotalChange={actualizarMontoTotal} /> */}
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
		  {/* $ {montoTotal} */}
		</p>
	  </div>
	  <BtnGeneral
		text="Checkout"
		width="140px"
		color="#ff6060"
		onHoverColor="#c54444"
		img={cartSVG}
	  />
	</div>
  </div>
  )
};

export default CierreCaja;
