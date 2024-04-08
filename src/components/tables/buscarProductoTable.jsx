import React from "react";
import addSVG from "../../assets/svg_add.svg";
import "./css/buscarProductoTable.css";

const BuscarProductoTable = ({ width, height, color, rows }) => {
    const style = {
        width: width ? width : "90%",
        height: height ? height : "85%",
        backgroundColor: color ? color : "#ffffff",
    };

    const agregarProducto = (producto) => {
        console.log("Agregar producto:", producto.id);
    };

    return (
        <div style={style} className="SearchTableContainer">
            <div className="SearchTableWrapper">
                <div className="SearchTableHeader">
                    <p></p>
                    <p style={{ justifySelf: "center" }}>Código del producto</p>
                    <p>Descripción</p>
                    <p>Precio/Unidad</p>
                    <p></p>
                </div>
                <div className="SearchTableBody">
                    {rows.map((producto) => (
                        <div key={producto.id} className="SearchTableRow">
                            <button
                                onClick={() => agregarProducto(producto)}
                                style={{
                                    justifySelf: "center",
                                    border: "none",
                                    backgroundColor: "transparent",
                                }}
                            >
                                <img src={addSVG} alt="Add" />
                            </button>
                            <p style={{ justifySelf: "center" }}>
                                {producto.id}
                            </p>
                            <p>{producto.name}</p>
                            <p>$ {producto.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuscarProductoTable;
