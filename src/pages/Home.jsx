import React, { useContext, useEffect, useState } from "react";
import { getPhotos } from "../services/PhotosService";
import Gallery from "../components/Gallery";
import { AppContext } from "../App";

const Home = () => {
	const { photos, setPhotos } = useContext(AppContext);
	const { isLoaded, setIsLoaded } = useContext(AppContext);

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
