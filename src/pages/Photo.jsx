import React, { useEffect, useState } from "react";
import { getPhotoById } from "../services/PhotosService";
import Loader from "../components/Loader";
import Layout from "../components/Layout";

const Photo = ({ router }) => {
	const [photo, setPhoto] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	const { params } = router;
	console.log("Pozdrav iz photo komponnte");
	useEffect(() => {
		getPhotoById(params.id)
			.then((result) => setPhoto(result))
			.catch((error) => console.error("Error"))
			.finally(() => setIsLoaded(true));
	}, []);

	return (
		<div>
			{!isLoaded && <Loader />}
			{isLoaded && <img src={photo.urls.regular}></img>}
		</div>
	);
};

export default Layout(Photo);
