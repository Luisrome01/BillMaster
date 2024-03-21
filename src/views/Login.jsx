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
        <div className="containerGeneral">
            <div className="container">
                <div className="subContainer">
                    <div className="containerTitle">
                        <h3 className="title">Login</h3>
                    </div>

                    <div className="containerSubTitle">
                        <p className="enum">Bienvenido a Bill Master</p>
                        <h1 className="subTitle">Iniciar Sesión</h1>
                    </div>

                    <InputGeneral
                        name={"Correo Electrónico"}
                        type="text"
                        placeholder=" Correo Electrónico"
                    />
                    
                    <InputGeneral 
                    name={"Contraseña"}
                    type="text" 
                    placeholder=" Contraseña" 
                    />

                    <BtnGeneral
                        text="Ingresar"
                        handleClick={Click}
                        width="110px"
                        height="45px"
                        color="#AEBBFD"
                        img={image}
                    />

                    <div className="containerLink">
                        <p className="link">I don't have an account? Sign up</p>
                    </div>
                </div>
                <img src={page} alt="imagen" className="page"/>
            </div>
        </div>
    );
};

export default Login;
