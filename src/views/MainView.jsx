import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar/navBar";
import "./css/MainView.css";
//assets
import LogoutSVG from "../assets/tabler_logout.svg";
import UserRound from "../assets/user-round.svg";
//components
import Facturacion from "../components/navBar/View/Facturacion";
import Productos from "../components/navBar/View/Productos";
import BtnGeneral from "../components/buttons/BtnGeneral";
import MetodosPago from "../components/navBar/View/MetodosPago";
import CierreCaja from "../components/navBar/View/CierreCaja";

const MainView = () => {
	const [componenteActivo, setComponenteActivo] = useState("Facturacion");
	const [listProductos, setListProductos] = useState([]);
	const [totalFactura, setTotalFactura] = useState(0);

	useEffect(() => {
		let total = 0;
		listProductos.forEach((producto) => {
			total += producto.total;
		});
		setTotalFactura(total);
	}, [listProductos]);

	const cambiarMetodoPago = () => {
		setComponenteActivo("Metodos de Pago");
	};

	return (
		<div className="MainContainer">
			<div className="MainNavContainer">
				<NavBar componenteActivo={componenteActivo} setComponenteActivo={setComponenteActivo} />
			</div>
			<div className="MainContentContainer">
				<div className="MainContentTop">
					<h1 className="MainTitle">{componenteActivo}</h1>

					<div className="MainUserDiv">
						<img src={UserRound}></img>
						<p style={{ fontWeight: "bold" }}>Bienvenido Usuario</p>
					</div>
				</div>
				<div className="FactContentBottom">
					{componenteActivo === "Productos" && <Productos />}
					{componenteActivo === "Facturacion" && (
						<Facturacion
							listaProductosInterna={listProductos}
							setListaProductosExterna={setListProductos}
							continuarVista={cambiarMetodoPago}
						/>
					)}
					{componenteActivo === "Metodos de Pago" && <MetodosPago totalCosto={totalFactura.toFixed(2)} />}
					{componenteActivo === "Cierre de Caja" && <CierreCaja />}
				</div>
			</div>
		</div>
	);
};

export default MainView;
