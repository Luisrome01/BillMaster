import React from "react";
import "./css/producto.css";
const Producto = ({data}) =>{
    return (
        <div className="card">
            <div className="img-card">

            </div>

            <div className="add-cart">
                Add to Cart
            </div>
            <div className="info-card">
                {data.map((item) => (
                        <div key={item.id}>
                            <p><strong>{item.name}</strong></p>
                            <p>Price : {item.price}$</p>
                        </div>
                    ))
                }
            </div>
      </div>
    )
}

export default Producto;