import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

const ImageList = ({ photos }) => {
	console.log("Response in Gallery", photos);

	return (
		<div className="text-center my-5">
			{photos.length === 0 ? (
				<p>Fotografije nisu pronađene</p>
			) : (
				<div className="row">
					{photos.map((photo) => (
						<div className="col-3 my-3" key={photo.id}>
							<Link to={photo.id} className="d-block mb-4 h-100">
								<ImageCard photo={photo} />
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Layout(ImageList);
