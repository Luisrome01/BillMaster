import React, {useState, useEffect} from "react";
import Producto from "../../containers/Producto.jsx"
import "./css/Productos.css";

const Productos = () => {

const product = [
	{
		id: 1,
		name: "Producto 1",
		price: 15,
	},
	{
		id: 2,
		name: "Producto 2",
		price: 20,
	},
	{
		id: 3,
		name: "Producto 3",
		price: 25,
	},
	{
		id: 4,
		name: "Producto 4",
		price: 30,
	},
	{
		id: 5,
		name: "Producto 5",
		price: 35,
	},
	{
		id: 6,
		name: "Producto 6",
		price: 40,
	},
	{
		id: 7,
		name: "Producto 7",
		price: 45,
	},
	{
		id: 8,
		name: "Producto 8",
		price: 50,
	},
	{
		id: 9,
		name: "Producto 9",
		price: 55,
	},
	{
		id: 10,
		name: "Producto 10",
		price: 60,
	},
];

	return <>
		<div className="containerMain">
			<div className="containerCard">
				{product.map((item) => (
					<Producto key={item.id} data={item} />
				))}
			</div>
			
		</div>
	</>;
};

export default Productos;
