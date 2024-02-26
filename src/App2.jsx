import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";

const App2 = () => {
	return (
		<Routes>
			<Route path="/" element={<AppNav />}>
				<Route index element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
			</Route>
		</Routes>
	);
};

export default App2;
