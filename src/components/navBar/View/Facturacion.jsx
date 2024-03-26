import React, { useState, useEffect } from "react";
import "./css/Facturacion.css";
import BtnGeneral from "../../../components/buttons/BtnGeneral";
import InputDinamico from "../../../components/inputs/InputDinamico";
import InputDiferente from "../../../components/inputs/InputDiferente";
import svgAdd from "../../../assets/svg_add.svg";
import svgSearch from "../../../assets/SearchSVG.svg";
import cartSVG from "../../../assets/marketKart.svg";
import ProductTable from "../../tables/productTable";

const Facturacion = ({ setListaProductosExterna, continuarVista, listaProductosInterna }) => {
	const [listProductos, setListProductos] = useState(listaProductosInterna);
	const [montoTotal, setMontoTotal] = useState("0.00");
	const [getCantidad, setCantidad] = useState(1);
	const [getCodigo, setCodigo] = useState("");
	const [getIdentificacion, setIdentificacion] = useState("Cedula");
	const [getValorIdentificacion, setValorIdentificacion] = useState("");
	const [getClientes, setClientes] = useState([]);
	const [getValorNombre, setValorNombre] = useState("");
	const [getValorDireccion, setValorDireccion] = useState("");
	const [getValorRif, setValorRif] = useState("");
	const [getValorCodigo, setValorCodigo] = useState("");
	const [getValorCantidad, setValorCantidad] = useState("");
	const [getName, setName] = useState("");
	const [getDireccion, setDireccion] = useState("");
	const [getRif, setRif] = useState("");
	const [disabledInput, setDisabledInput] = useState(false);

	useEffect(() => {
		fetch("/src/json/clientes.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error fetching data");
				}
				return response.json();
			})
			.then((data) => {
				setClientes(data.data);
			});
	}, []);

	useEffect(() => {
		let total = 0;
		listProductos.forEach((element) => {
			total += parseFloat(element.total);
		});
		setMontoTotal(total.toFixed(2));
	}, [listProductos]);

	const eliminarProducto = (codigo) => {
		const index = listProductos.findIndex((element) => element.codigo === codigo);
		if (index !== -1) {
			const updatedProductos = [...listProductos];
			updatedProductos.splice(index, 1);
			setListProductos(updatedProductos);
		}
	};

	const addProduct = () => {
		fetch("/src/json/productos.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error fetching data");
				}
				return response.json();
			})
			.then((data) => {
				let product = data[getCodigo];
				if (product) {
					const index = listProductos.findIndex((element) => element.codigo === getCodigo);
					if (index !== -1) {
						if (parseFloat(getCantidad) <= 0) {
							alert("La cantidad debe ser mayor a 0");
							return;
						}
						const updatedProductos = [...listProductos];
						updatedProductos[index].cantidad += parseFloat(getCantidad);
						updatedProductos[index].total =
							parseFloat(updatedProductos[index].cantidad) *
							(parseFloat(updatedProductos[index].precio) + parseFloat(updatedProductos[index].iva));
						setListProductos(updatedProductos);
						setValorCodigo("");
						setValorCantidad("");
					} else {
						if (parseFloat(getCantidad) <= 0) {
							alert("La cantidad debe ser mayor a 0");
							return;
						}
						setListProductos([
							...listProductos,
							{
								codigo: getCodigo,
								descripcion: product.name,
								cantidad: parseFloat(getCantidad),
								precio: parseFloat(product.price),
								iva: parseFloat(product.IVA),
								total: parseFloat(product.total) * parseFloat(getCantidad),
							},
						]);
						setCodigo("");
						setCantidad(1);
						setValorCodigo("");
						setValorCantidad("");
					}
				} else {
					alert("Producto no encontrado");
				}
			});
	};

	useEffect(() => {
		setListaProductosExterna(listProductos);
	}, [listProductos]);

	const cleanInputs = () => {
		setValorNombre("");
		setValorDireccion("");
		setValorRif("");
	};

	const handleOnBlur = () => {
		switch (getIdentificacion) {
			case "Cedula":
				const client = getClientes.find((element) => element.ci === getValorIdentificacion);
				if (client) {
					setDisabledInput(true);
					setValorNombre(client.name);
					setValorDireccion(client.direccion);
					setValorRif(client.rif);
				} else {
					setDisabledInput(false);
					cleanInputs();
				}
				break;
			case "Pasaporte":
				const client2 = getClientes.find((element) => element.pasaporte === getValorIdentificacion);
				if (client2) {
					setDisabledInput(true);
					setValorNombre(client2.name);
					setValorDireccion(client2.direccion);
					setValorRif(client2.rif);
				} else {
					setDisabledInput(false);
					cleanInputs();
				}
				break;
			case "ID Extranjero":
				const client3 = getClientes.find((element) => element.idExtranjera === getValorIdentificacion);
				if (client3) {
					setDisabledInput(true);
					setValorNombre(client3.name);
					setValorDireccion(client3.direccion);
					setValorRif(client3.rif);
				} else {
					setDisabledInput(false);
					cleanInputs();
				}
				break;
		}
	};

	const createClient = () => {
		if (getValorIdentificacion === "" || getDireccion === "" || getRif === "" || getName === "") {
			alert("Por favor llene todos los campos");
			return;
		}
		const client = getClientes.find((element) => element.ci === getValorIdentificacion);
		if (client) {
			alert("Cliente ya existe");
			cleanInputs();
			return;
		}
		switch (getIdentificacion) {
			case "Cedula":
				setClientes([
					...getClientes,
					{
						ci: getValorIdentificacion,
						name: getName,
						direccion: getDireccion,
						rif: getRif,
					},
				]);

				break;
			case "Pasaporte":
				setClientes([
					...getClientes,
					{
						pasaporte: getValorIdentificacion,
						name: getName,
						direccion: getDireccion,
						rif: getRif,
					},
				]);
				break;
			case "ID Extranjero":
				setClientes([
					...getClientes,
					{
						idExtranjera: getValorIdentificacion,
						name: getName,
						direccion: getDireccion,
						rif: getRif,
					},
				]);
				break;
		}
		setValorDireccion(getDireccion);
		setValorNombre(getName);
		setValorRif(getRif);
		setDisabledInput(true);
		alert("Cliente creado con exito");
	};

	return (
		<>
			<div className="FacturaContainer">
				<h1 className="FacturaHeaderContainer">Nueva Factura</h1>

				<div className="FacturaInputsEntre2">
					<div className="FacturaInput1">
						<div className="FacturaCedula-nombre">
							<div className="FacturaCedula">
								<InputDinamico
									name="Cedula o Pasaporte:"
									color="#D9D9D9"
									width="200px"
									onBlur={handleOnBlur}
									onTypeChange={(newType) => setIdentificacion(newType)}
									onValueChange={(newValue) => setValorIdentificacion(newValue)}
								/>
							</div>

							<div className="FacturaNombre">
								<InputDiferente
									value={getValorNombre}
									name="Nombre:"
									color="#D9D9D9"
									width="50%"
									placeholder="ej. Jhon Doe"
									onChange={(newName) => setName(newName)}
									disabled={disabledInput}
								/>
							</div>
						</div>
						<div className="FacturaDireccion">
							<InputDiferente
								name="Direccion:"
								value={getValorDireccion}
								flexBasis="100%"
								color="#D9D9D9"
								width="70%"
								placeholder="ej. Avenida Río Caura Torre Humboldt Prados del Este Piso 20 Oficina 20-06"
								disabled={disabledInput}
								onChange={(newDireccion) => setDireccion(newDireccion)}
							/>
						</div>
						<div className="FacturaRif-BotonCrear">
							<div className="FacturaRif">
								<InputDiferente
									value={getValorRif}
									name="Rif:"
									color="#D9D9D9"
									width="80%"
									placeholder="ej. J123456789"
									disabled={disabledInput}
									onChange={(newRif) => setRif(newRif)}
								/>
							</div>
							<div className="FacturaBotonCrear">
								<BtnGeneral img={svgAdd} text="Crear Cliente" width="165px" handleClick={createClient} />
							</div>
						</div>
					</div>

					<div className="FacturaInput2">
						<div className="FacturaoCodigo-buscar">
							<div className="FacturaCodigo">
								<InputDiferente
									value={getValorCodigo}
									name="Codigo:"
									color="#D9D9D9"
									onChange={(newValue) => {
										setCodigo(newValue);
										setValorCodigo(newValue);
									}}
								/>
							</div>
							<div className="FacturaBuscar">
								<button className="FacturaSearch">
									<img src={svgSearch}></img>
								</button>
							</div>
						</div>
						<div className="FacturaCantidad">
							<InputDiferente
								value={getValorCantidad}
								type="number"
								name="Cantidad:"
								color="#D9D9D9"
								width="80px"
								placeholder="1"
								onChange={(newCantidad) => {
									setCantidad(newCantidad);
									setValorCantidad(newCantidad);
								}}
							/>
						</div>
						<div className="FacturaBotonAgregar">
							<BtnGeneral img={svgAdd} text="Agregar Producto" width="200px" handleClick={addProduct} />
						</div>
					</div>
				</div>

				<div className="FacturaTableContainer">
					<ProductTable width="90%" height="85%" rows={listProductos} eliminarProducto={eliminarProducto} />
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
							Total:
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
					<BtnGeneral
						text="Metodo de Pago"
						width="140px"
						color="#ff6060"
						onHoverColor="#c54444"
						img={cartSVG}
						handleClick={() => {
							if (listProductos.length > 0) continuarVista();
							else alert("No hay productos en la factura");
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default Facturacion;
