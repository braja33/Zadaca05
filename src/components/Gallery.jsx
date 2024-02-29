import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import PhotoCard from "./PhotoCard";

const Gallery = ({ photos }) => {
	console.log("Response in Gallery", photos);

	return (
		<Layout>
			<div className="row">
				{photos.map((photo) => (
					<div className="col-4" key={photo.id}>
						<Link to={photo.id} className="d-block mb-4 h-100">
							<PhotoCard photo={photo} />
						</Link>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Gallery;
