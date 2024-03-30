import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "../json/usuarios.json";
import BtnGeneral from "../components/buttons/BtnGeneral";
import InputGeneral from "../components/inputs/InputGeneral";
import image from "../assets/tabler_login.svg";
import page from "../assets/Group2015.svg";
import "./css/Login.css";

const Login = ({ setUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = () => {
		setError("");

		if (!email || !password) {
			setError("Por favor ingresa correo electrónico y contraseña.");
			return;
		}

		const user = usuarios.data.find((user) => user.email === email && user.pass === password);

		if (!user) {
			setError("Correo electrónico o contraseña incorrectos.");
			return;
		}
		setUser(user);

		navigate("/main");
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

					<InputGeneral
						name={"Correo Electrónico"}
						type="text"
						placeholder=" ej. JubertPerez@gmail.com"
						width="80%"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<InputGeneral
						name={"Contraseña"}
						type="password"
						placeholder=" Contraseña"
						width="80%"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onEnter={handleLogin}
					/>

					{error && <p style={{ color: "red" }}>{error}</p>}
					<BtnGeneral text="Ingresar" handleClick={handleLogin} img={image} />
				</div>
			</div>
			<img src={page} alt="imagen" className="LogImage" />
		</div>
	);
};

export default Login;
