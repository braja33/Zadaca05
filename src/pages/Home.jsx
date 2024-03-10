import React, { useContext, useEffect, useState } from "react";
import { getPhotos } from "../services/PhotosService";
import ImageList from "../components/ImageList";
import { GalleryContext } from "../App";

const Home = () => {
	const { photos, setPhotos } = useContext(GalleryContext);
	const { isLoaded, setIsLoaded } = useContext(GalleryContext);

	console.log("Odgovor iz homa2", photos);
	return (
		<>
			<div className="container">
				<div className="row">
					<ImageList isLoaded={isLoaded} photos={photos} />
				</div>
			</div>
		</>
	);
};

export default Home;
