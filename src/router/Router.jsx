import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import Facturacion from "../views/Facturacion";

const Router = () => {
	return (
		<>
			<Routes>
				{/* <Route path='/' element={<></>} /> */}
				<Route path="/" element={<Login />} />
				<Route path="/facturacion" element={<Facturacion />} />
			</Routes>
		</>
	);
};

export default Router;
