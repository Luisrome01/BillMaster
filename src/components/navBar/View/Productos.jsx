import React, { useState, useEffect } from "react";
import Producto from "../../containers/Producto.jsx";
import "./css/Productos.css";

const Productos = ({ setListaProductos, listaProductos }) => {
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
				const productosArray = Object.entries(data).map(([key, value], index) => ({
					...value,
					codigo: key,
				}));
				setProductos(productosArray);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const handleClick = (codigo) => {
		fetch("/src/json/productos.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error fetching data");
				}
				return response.json();
			})
			.then((data) => {
				let product = data[codigo];
				const index = listaProductos.findIndex((element) => element.codigo === codigo);
				if (index !== -1) {
					const updatedProductos = [...listaProductos];
					updatedProductos[index].cantidad++;
					updatedProductos[index].total = updatedProductos[index].cantidad * (updatedProductos[index].precio + updatedProductos[index].iva);
					setListaProductos(updatedProductos);
				} else {
					setListaProductos([
						...listaProductos,
						{
							codigo: codigo,
							cantidad: 1,
							descripcion: product.name,
							precio: parseFloat(product.price),
							iva: parseFloat(product.IVA),
							total: 1 * (parseFloat(product.price) + parseFloat(product.IVA)),
						},
					]);
				}
			});
	};

	return (
		<div className="containerMain">
			<div className="containerCard">
				{productos.map((producto, index) => (
					<Producto
						name={producto.name}
						price={producto.price}
						img={producto.img}
						handleClick={() => {
							handleClick(producto.codigo);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Productos;
