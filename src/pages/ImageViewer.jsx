import React, { useEffect, useState } from "react";
import { getPhotoById } from "../services/PhotosService";
import Loader from "../components/Loader";
import Layout from "../components/Layout";

const ImageViewer = ({ router }) => {
	const [photo, setPhoto] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	const { params } = router;

	const formatCreatedAt = (createdAt) => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZoneName: "short",
		};
		return new Date(createdAt).toLocaleDateString("hr", options);
	};

	useEffect(() => {
		getPhotoById(params.id)
			.then((result) => setPhoto(result))
			.catch((error) => console.error("Error: ", error))
			.finally(() => setIsLoaded(true));
	}, []);

	/* handleClick = () => {
		return null;
	};
 */
	return (
		<div className="container text-center mt-5">
			{!isLoaded && <Loader />}
			{isLoaded && (
				<div className="mx-auto p-4" style={{ maxWidth: "1000px" }}>
					<>
						<h2>Slika</h2>
						<img
							src={photo.urls.regular}
							alt="Photograph"
							className="img-fluid"
						/>
						<div className="mt-4">
							<p>
								<strong>Datum izrade:</strong>{" "}
								{formatCreatedAt(photo.created_at)}
							</p>
							<p>
								<strong>Opis slike:</strong>{" "}
								{photo.description || "N/A"}
							</p>
							<p>
								<strong>Broj oznaka sviđa mi se:</strong>{" "}
								{photo.likes}
							</p>
							<p>
								<strong>Biografija slike:</strong>{" "}
								{photo.bio || "N/A"}
							</p>
							<p>
								<strong>Lokacija:</strong>{" "}
								{photo.location.name || "N/A"}
							</p>
							<button
								className={`btn btn-${
									photo.liked_by_user
										? "success"
										: "outline-success"
								}`}
								type="button"
								/* onClick={handleClick} */
							>
								Sviđa mi se
							</button>
						</div>
					</>
				</div>
			)}
		</div>
	);
};

export default Layout(ImageViewer);
