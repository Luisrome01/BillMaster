import React, { useState } from "react";
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

	return (
		<div className="MainContainer">
			<div className="MainNavContainer">
				<NavBar componenteActivo={componenteActivo} setComponenteActivo={setComponenteActivo} />
			</div>
			<div className="MainContentContainer">
				<div className="MainContentTop">
					<h1 className="MainTitle">{componenteActivo}</h1>
					<BtnGeneral text="Bienvenido Empleado" onHoverColor="#AEBBFD" className="MainUserButton" width="200px" img={UserRound} />{" "}
					{/* cambiar */}
					<BtnGeneral text="Logout" color="#ff6060" onHoverColor="#c54444" className="MainLogoutButton" img={LogoutSVG} />
				</div>
				<div className="FactContentBottom">
					{componenteActivo === "Facturacion" && <Facturacion />}
					{componenteActivo === "Productos" && <Productos />}
					{componenteActivo === "Metodos de Pago" && <MetodosPago />}
					{componenteActivo === "Cierre de Caja" && <CierreCaja />}
				</div>
			</div>
		</div>
	);
};

export default MainView;
