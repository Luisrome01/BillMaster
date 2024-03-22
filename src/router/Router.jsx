import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import MainView from "../views/MainView";

const Router = () => {
	return (
		<>
			<Routes>
				{/* <Route path='/' element={<></>} /> */}
				<Route path="/" element={<Login />} />
				<Route path="/main" element={<MainView />} />
			</Routes>
		</>
	);
};

export default Router;
