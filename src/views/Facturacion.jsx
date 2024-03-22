import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import BtnGeneral from "../components/buttons/BtnGeneral";
import "./css/Facturacion.css";
import LogoutSVG from "../assets/tabler_logout.svg";
import UserRound from "../assets/user-round.svg";

const Facturacion = () => {
	return (
		<div className="FactContainer">
			<div className="FactNavContainer">
				{/* <Link to="/">Login</Link> */}
				<NavBar />
			</div>
			<div className="FactContentContainer">
				<div className="FactContentTop">
					<h1 className="FactTitle">Facturacion</h1>
					<BtnGeneral text="Bienvenido Empleado" onHoverColor="#AEBBFD" className="FactUserButton" width="200px" img={UserRound} />{" "}
					{/* cambiar */}
					<BtnGeneral text="Logout" color="#ff6060" onHoverColor="#c54444" className="FactLogoutButton" img={LogoutSVG} />
				</div>
				<div className="FactContentBottom"></div>
			</div>
		</div>
	);
};

export default Facturacion;
