import React, { useState, useEffect } from "react";
import Producto from "../../containers/Producto.jsx";
import "./css/Productos.css";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/src/json/productos.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching data");
                }
                return response.json();
            })
            .then((data) => {
                const productosArray = Object.values(data);
                setProductos(productosArray);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="containerMain">
            <div className="containerCard">
                {productos.map((producto, index) => (
                    <Producto
                        key={index}
                        name={producto.name}
                        price={producto.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Productos;
