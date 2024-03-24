import "./css/Facturacion.css";
import React, { useState } from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDinamico from "../../../components/inputs/InputDinamico";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/svg_add.svg";
import svgSearch from "../../../assets/SearchSVG.svg";
import cartSVG from "../../../assets/marketKart.svg";
import ProductTable from "../../tables/productTable";

const Facturacion = () => {
	const [montoTotal, setMontoTotal] = useState("0.00");

	const actualizarMontoTotal = (nuevoMonto) => {
		setMontoTotal(nuevoMonto);
	};

	return (
		<>
			<div className="FacturaContainer">
				<h1 className="FacturaHeaderContainer">Nueva Factura</h1>

				<div className="FacturaInputsEntre2">
					<div className="FacturaInput1">
						<div className="FacturaCedula-nombre">
							<div className="FacturaCedula">
								<InputDinamico name="Cedula o Pasaporte:" color="#D9D9D9" width="200px" />
							</div>

							<div className="FacturaNombre">
								<InputDiferente name="Nombre:" color="#D9D9D9" width="50%" placeholder="ej. Jhon Doe" />
							</div>
						</div>
						<div className="FacturaDireccion">
							<InputDiferente
								flexBasis="100%"
								name="Direccion:"
								color="#D9D9D9"
								width="70%"
								placeholder="ej. Avenida Río Caura Torre Humboldt
Prados del Este Piso 20 Oficina 20-06"
							/>
						</div>
						<div className="FacturaRif-BotonCrear">
							<div className="FacturaRif">
								<InputDiferente name="Rif:" color="#D9D9D9" width="80%" placeholder="ej. J123456789" />
							</div>
							<div className="FacturaBotonCrear">
								<BtnGeneral img={svgAdd} text="Crear Cliente" width="165px" />
							</div>
						</div>
					</div>

					<div className="FacturaInput2">
						<div className="FacturaoCodigo-buscar">
							<div className="FacturaCodigo">
								<InputDiferente name="Codigo:" color="#D9D9D9" />
							</div>
							<div className="FacturaBuscar">
								<button className="FacturaSearch">
									<img src={svgSearch}></img>
								</button>
							</div>
						</div>
						<div className="FacturaCantidad">
							<InputDiferente type="number" name="Cantidad:" color="#D9D9D9" width="80px" />
						</div>
						<div className="FacturaBotonAgregar">
							<BtnGeneral img={svgAdd} text="Agregar Producto" width="200px" />
						</div>
					</div>
				</div>

				<div className="FacturaTableContainer">
					<ProductTable width="90%" height="85%" onTotalChange={actualizarMontoTotal} />
				</div>

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

export default Facturacion;
