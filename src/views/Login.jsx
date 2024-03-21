import React from "react";
import { Link } from "react-router-dom";
import './css/Login.css';

// Components 
import BtnGeneral from "../components/buttons/BtnGeneral";
import InputGeneral from "../components/inputs/InputGeneral";

const Login = () => {
    const Click = () => {
        console.log("Click me!");
    }
    return (
        <div>
            <h2>Login</h2>
            <Link to='/facturacion'>Facturacion</Link>

            <div className="container">

                <InputGeneral
                    type="text"
                    placeholder="Usuario"
                    width="200px"
                    height="30px"
                    color="#AEBBFD"
                    borderRadius="10px"
                    shadow="5px 5px 5px #888888"
                    />
                <BtnGeneral 
                    text="Ingresar" 
                    handleClick={Click}
                    width="110px"
                    height="45px"
                    color="#AEBBFD"
                    borderRadius="10px"
                    shadow="5px 5px 5px #888888"
                />
            </div>
        </div>
    )
}

export default Login;