import React from "react";
import { useState, useEffect } from "react";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import CierreCajaTable from "../../../components/tables/cierreCajaTable";
import ModalCierre from "../../modal/ModalCierre";
import checkSVG from "../../../assets/checkmark.svg";

import "./css/CierreCaja.css";

const CierreCaja = ({ responsable }) => {
    const [montoTotal, setMontoTotal] = useState("0.00");
    const [listIngresos, setListIngresos] = useState([]);
    const [listEgresos, setListEgresos] = useState([]);
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [cantidadFacturas, setCantidadFacturas] = useState(0);
    const [responsableState, setResponsableState] = useState(responsable);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

    useEffect(() => {
        //fetch para obtener la data
        fetch("/src/json/facturas.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                return response.json();
            })
            .then((data) => {
                setData(data.data);
                const total = data.data.reduce(
                    (acc, item) => acc + item.monto,
                    0
                );
                const ingresos = data.data.reduce(
                    (acc, item) => acc + item.ingresos,
                    0
                );
                const egresos = data.data.reduce(
                    (acc, item) => acc + item.egresos,
                    0
                );
                setMontoTotal(total.toFixed(2));
                setListIngresos(ingresos.toFixed(2));
                setListEgresos(egresos.toFixed(2));
                setCantidadFacturas(data.data.length);
            });
    }, []);

    const handleClickCierreCaja = () => {
        const currentDateTime = new Date();
        const formattedDate = currentDateTime.toISOString().split("T")[0];
        const formattedTime = currentDateTime.toLocaleTimeString();
        setFecha(formattedDate);
        setHora(formattedTime);
        setOpenModal(true);
    };

    return (
        <div className="CierreContainer">
            <h2 className="CierreHeaderContainer">Este proceso cierra la caja del turno especificado:</h2>
            <div className="FacturaTableContainer">
                <CierreCajaTable data={data} />
            </div>

            <div className="FacturaCheckoutContainer">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                        style={{
                            position: "relative",
                            marginLeft: "auto",
                            fontSize: "18px",
                        }}
                    >
                        Saldo de cierre:
                    </p>
                    <p
                        style={{
                            position: "relative",
                            marginLeft: "auto",
                            fontSize: "25.4331px",
                            fontWeight: "bold",
                        }}
                    >
                        $ {montoTotal}
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                        style={{
                            color: "#12B422",
                            position: "relative",
                            marginLeft: "auto",
                            fontSize: "18px",
                        }}
                    >
                        Ingresos: $ {listIngresos}
                    </p>
                    <p
                        style={{
                            color: "#EB0000",
                            position: "relative",
                            marginLeft: "auto",
                            fontSize: "18px",
                            fontWeight: "bold",
                        }}
                    >
                        Egresos: $ {listEgresos}
                    </p>
                </div>

                <BtnGeneral
                    text="Cierre de caja"
                    width="140px"
                    color="#ff6060"
                    onHoverColor="#c54444"
                    img={checkSVG}
                    handleClick={handleClickCierreCaja}
                />
            </div>
            {openModal && (
                <ModalCierre
                    closeModal={setOpenModal}
                    cantidadFacturas={cantidadFacturas}
                    ingresos={listIngresos}
                    egresos={listEgresos}
                    total={montoTotal}
                    responsable={responsableState}
                    fecha={fecha}
                    hora={hora}
                />
            )}
        </div>
    );
};

export default CierreCaja;
