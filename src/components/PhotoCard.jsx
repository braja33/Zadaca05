import React from "react";

const PhotoCard = ({ photo }) => {
	console.log("odgovor iz photocard", photo);
	return (
		<div className="card">
			<img
				src={photo.thumb}
				className="card-img-top"
				alt={photo.alt_description}
			/>
			<div className="card-body">
				<p className="card-title">{photo.created_at}</p>
			</div>
		</div>
	);
};

export default PhotoCard;
