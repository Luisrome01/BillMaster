import React from "react";
import "./css/producto.css";

const Producto = ({ name, price }) => {
    return (
        <div className="card">
            <div className="img-card"></div>
            <div className="add-cart">Add to Cart</div>
            <div className="info-card">
                <div>
                    <p>
                        <strong>{name}</strong>
                    </p>
                    <p>Price : {price}$</p>
                </div>
            </div>
        </div>
    );
};

export default Producto;
