import React, { useContext, useEffect, useState } from "react";
import { getPhotos } from "../services/PhotosService";
import Gallery from "../components/Gallery";
import { AppContext } from "../App";

const Home = () => {
	/* const [photos, setProduct] = useState({}); */
	const { photos, setPhotos } = useContext(AppContext);
	const { isLoaded, setIsLoaded } = useContext(AppContext);

	/* useEffect(() => {
		getPhotos()
			.then((result) => {
				console.log("Odgovor iz effekta", result);
				setProduct(result);
			})

			.catch((error) => console.error("Error"))
			.finally(() => {
				// Introduce a 1-second delay using setTimeout
				setTimeout(() => {
					setIsLoaded(true);
				}, 300);
			});

		console.log("Odgovor iz homa", photos);
	}, []); */

	console.log("Odgovor iz homa2", photos);
	return (
		<>
			<div className="container">
				<div className="row">
					<Gallery isLoaded={isLoaded} photos={photos} />
				</div>
			</div>
		</>
	);
};

export default Home;
