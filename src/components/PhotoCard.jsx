import React from "react";

const PhotoCard = ({ photo }) => {
	return (
		<div className="card">
			<div className="d-flex justify-content-center align-items-center">
				<img
					src={photo.thumb}
					className="card-img-top"
					alt={photo.alt_description}
					style={{ height: "15vw", width: "auto" }}
				/>
			</div>
			<div className="card-body">
				<p className="card-title">{photo.created_at}</p>
			</div>
		</div>
	);
};

export default PhotoCard;
