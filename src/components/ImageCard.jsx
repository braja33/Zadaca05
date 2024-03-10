import React from "react";

const ImageCard = ({ photo }) => {
	return (
		<div className="card" style={{ height: "100%" }}>
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "50px", overflow: "hidden" }}
			>
				<p className="card-title mb-0">Slika {photo.number + 1}</p>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<img
					src={photo.thumb}
					className="card-img-top img-fluid"
					alt={photo.alt_description}
					style={{
						maxHeight: "100%",
						maxWidth: "100%",
						width: "auto",
						height: "auto",
					}}
				/>
			</div>
			<div className="card-body d-flex flex-column">
				<div className="d-flex justify-content-between">
					<p className="card-text">Sviđa mi se: {photo.likes}</p>
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
