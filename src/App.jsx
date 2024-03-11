import React, { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ImageViewer from "./pages/ImageViewer";
import { getPhotos } from "./services/PhotosService";
import Login from "./pages/Login";

export const GalleryContext = createContext();

const App = () => {
	console.log("pozdrav iz app.jsx");

	const [photos, setPhotos] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getPhotos()
			.then((result) => {
				console.log("Odgovor iz effekta", result);
				setPhotos(result);
			})

			.catch((error) => console.error("Error"))
			.finally(() => {
				// Introduce a 1-second delay using setTimeout
				setTimeout(() => {
					setIsLoaded(true);
				}, 300);
			});

		console.log("Odgovor iz homa", photos);
	}, []);

	return (
		<GalleryContext.Provider
			value={{ photos, setPhotos, isLoaded, setIsLoaded }}
		>
			<Routes>
				<Route path="/" element={<AppNav />}>
					<Route index element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/:id" element={<ImageViewer />} />
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</GalleryContext.Provider>
	);
};

export default App;
