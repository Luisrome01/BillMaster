import React from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

// Components
import BtnGeneral from "../components/buttons/BtnGeneral";
import InputGeneral from "../components/inputs/InputGeneral";
import image from "../assets/tabler_logout.svg";

const Login = () => {
    const Click = () => {
        console.log("Click me!");
    };
    const Chacon = () => {
        console.log("Chacon es un mmwebo");
    };
    return (
        <div className="containerGeneral">
            <div className="container">
                <div className="subContainer">
                    <InputGeneral
                        type="text"
                        placeholder="Correo Electrónico"
                    />
                    <InputGeneral type="text" placeholder="Contraseña" />
                    <BtnGeneral
                        text="Ingresar"
                        handleClick={Click}
                        width="110px"
                        height="45px"
                        color="#AEBBFD"
                        img={image}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
