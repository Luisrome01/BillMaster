import React from "react";
import "./css/Login.css";

// Components
import BtnGeneral from "../components/buttons/BtnGeneral";
import InputGeneral from "../components/inputs/InputGeneral";
import image from "../assets/tabler_logout.svg";
import page from "../assets/Group2015.svg";

const Login = () => {
	const Click = () => {
		console.log("Click me!");
	};
	return (
		<div className="LogContainerGeneral">
			<div className="LogContainer">
				<div className="LogSubContainer">
					<div className="LogContainerTitle">
						<h3 className="LogTitle">Bill Master</h3>
					</div>

					<div className="LogContainerSubTitle">
						<p className="LogEnum">Bienvenido</p>
						<h1 className="LogSubTitle">Iniciar Sesión</h1>
					</div>

					<InputGeneral name={"Correo Electrónico"} type="text" placeholder=" Correo Electrónico" width="80%" />

					<InputGeneral name={"Contraseña"} type="password" placeholder=" Contraseña" width="80%" />

					<BtnGeneral text="Ingresar" handleClick={Click} img={image} />

					<div className="LogContainerLink">
						<p className="LogLink">No tienes una cuenta? Registrate</p>
					</div>
				</div>
				<div className="LogImgContainer">
					<img src={page} alt="imagen" />
				</div>
			</div>
		</div>
	);
};

export default Login;
