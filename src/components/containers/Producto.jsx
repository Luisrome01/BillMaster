import React from "react";
import "./css/producto.css";

const Producto = ({ name, price, img, handleClick }) => {
	return (
		<div className="card" onClick={handleClick}>
			<div className="img-card">
				<img src={img} className="imgProduct" />
			</div>
			<div className="add-cart">Agregar al carrito</div>
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
