import "./css/Facturacion.css";
import React from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDinamico from "../../../components/inputs/InputDinamico";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/svg_add.svg";
import svgSearch from "../../../assets/SearchSVG.svg";
import cartSVG from "../../../assets/marketKart.svg";

const Facturacion = () => {
	const monto = "0.00";

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
					{/* placeholder mientras hacemos la tabla */}
					<div
						style={{
							width: "90%",
							height: "85%",
							alignSelf: "center",
							backgroundColor: "white",
							border: "1.42917px solid #000000",
							boxSizing: "border-box",
							boxShadow: "3.81111px 5.71667px 0px #000000",
							borderRadius: "22.8667px",
						}}
					></div>
				</div>

				<div className="FacturaCheckoutContainer">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "18px" }}>Total:</p>
						<p style={{ position: "relative", marginLeft: "auto", fontSize: "25.4331px", fontWeight: "bold" }}>$ {monto}</p>
					</div>
					<BtnGeneral text="Checkout" width="140px" color="#ff6060" onHoverColor="#c54444" img={cartSVG} />
				</div>
			</div>
		</>
	);
};

export default Facturacion;
