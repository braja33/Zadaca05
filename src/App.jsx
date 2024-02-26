import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Nav />}>
				<Route index element={<Home />} />
				<Route element={<AboutUs />} />
			</Route>
		</Routes>
	);
};

export default App;
