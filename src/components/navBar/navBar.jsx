import { Link } from "react-router-dom";

import "./navBar.css";

const NavBar = ({ setComponenteActivo }) => {
	return (
		<nav className="navbar">
			<ul className="nav-links">
				<li className="nav-link" onClick={() => setComponenteActivo("Productos")}>
					<span className="icon"></span>
					<span className="text">Productos</span>
				</li>
				<li className="nav-link" onClick={() => setComponenteActivo("Facturacion")}>
					<span className="icon"></span>
					<span className="text">Facturación</span>
				</li>
				<li className="nav-link" onClick={() => setComponenteActivo("Metodos de Pago")}>
					<span className="icon"></span>
					<span className="text">Métodos de Pago</span>
				</li>
				<li className="nav-link" onClick={() => setComponenteActivo("Cierre de Caja")}>
					<span className="icon"></span>
					<span className="text">Cierre de Caja</span>
				</li>
				<li className="nav-link">
					<Link to="/">
						<span className="icon"></span>
						<span className="text">Logout</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
