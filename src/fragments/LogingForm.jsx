import React, { useState } from "react";

const LogingForm = () => {
	const [accessKey, setAccessKey] = useState("");
	const [secretKey, setSecretKey] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		handleLogin(accessKey, secretKey);
		setPassword("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="accessKey" className="form-label">
					Access key
				</label>
				<input
					type="text"
					className="form-control"
					id="accessKey"
					required
					onChange={(e) => setAccessKey(e.target.value)}
					value={accessKey}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="secretKey" className="form-label">
					Password
				</label>
				<input
					type="text"
					className="form-control"
					id="secretKey"
					required
					onChange={(e) => setSecretKey(e.target.value)}
					value={secretKey}
				/>
			</div>
			<button
				type="submit"
				className="btn btn-warning"
				disabled={!isLoaded ? "disabled" : ""}
			>
				{!isLoaded && (
					<span
						className="spinner-border spinner-border-sm"
						aria-hidden="true"
					></span>
				)}
				Submit
			</button>
		</form>
	);
};

export default LogingForm;
