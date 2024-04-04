import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import MainView from "../views/MainView";
import { useState } from "react";

const Router = () => {
	const [user, setUser] = useState(null);
	return (
		<>
			<Routes>
				<Route path="/" element={<Login setUser={setUser} />} />
				<Route path="/main" element={<MainView getUser={user ? user.name : "Usuario"} />} />
			</Routes>
		</>
	);
};

export default Router;
