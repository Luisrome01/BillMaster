import React from "react";
import BtnGeneral from "../buttons/BtnGeneral";
import svg from "../../assets/check.svg";
import "./css/ModalCierre.css";

const ModalCierre = ({ closeModal, ingresos, egresos, total, cantidadFacturas, responsable, fecha, hora}) => {
    return (
        <div className="modalColor">
            <div className="modalContainer">
                <div className="title">
                    <h1>Resumen del cierre de caja</h1>
                    <BtnGeneral
                        text="X"
                        width="40px"
                        height="40px"
                        color="#FF6060"
                        bgColor="#FF0000"
                        handleClick={() => {
                            closeModal(false);
                        }}
                    />
                </div>
                <div className="body">
                    <div className="bodyContainer">
                        <p>Responsable: {responsable}</p>
                        <div className="FechaHora">
                            <p>Fecha: {fecha}</p>
                            <p>Hora: {hora}</p>
                        </div>
                        <p className="Estadistica">Estadística</p>
                        <p>Factura realizadas: {cantidadFacturas}</p>
                        <p>Saldo de cierre: ${total}</p>
                        <p>Ingresos: ${ingresos}</p>
                        <p>Egresos: ${egresos}</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerContainer">
                        <img src={svg} />
                        <h4>
                            El saldo de cierre concuerda con los ingresos y
                            egresos de las transacciones.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCierre;

/*


*/
