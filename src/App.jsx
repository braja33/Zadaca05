import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Photo from "./pages/Photo";

const App = () => {
	console.log("pozdrav iz app.jsx");
	return (
		<Routes>
			<Route path="/" element={<AppNav />}>
				<Route index element={<Home />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/:id" element={<Photo />} />
			</Route>
		</Routes>
	);
};

export default App;
