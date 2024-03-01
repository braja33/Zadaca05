import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getPhotoById } from "../services/PhotosService";

const Photo = ({ router }) => {
	const [photo, setPhoto] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	const { params } = router;

	useEffect(() => {
		getPhotoById(params.id)
			.then((result) => setPhoto(result))
			.catch((error) => console.error("Error"))
			.finally(() => setIsLoaded(true));
	}, [params]);

	return (
		<div>
			<img src={photo.urls.raw}></img>
		</div>
	);
};

export default Layout(Photo);
