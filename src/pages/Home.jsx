import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getPhotos } from "../services/PhotosService";
import Gallery from "../components/Gallery";
const Home = () => {
	const [photos, setProduct] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
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
	}, []);

	console.log("Odgovor iz homa2", photos);
	return (
		<>
			<div>Početna stranica</div>
			{/* <Button variant="primary" onClick={handleClick}>
				Dohvati podatke
			</Button> */}
			<div className="container">
				<div className="row">
					<Gallery isLoaded={isLoaded} photos={photos} />
				</div>
			</div>
		</>
	);
};

export default Home;
