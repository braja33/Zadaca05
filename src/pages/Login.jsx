import React, { useState } from "react";
import Layout from "../components/Layout";
import LoginForm from "../fragments/LoginForm";
import { authenticate } from "../services/AuthService";
import { API_TOKEN_KEY } from "../utils/helpers";

const Login = ({ router }) => {
	const [isLoaded, setIsLoaded] = useState(true);
	const [error, setError] = useState("");

	const handleLogin = (accessKey, secretKey) => {
		setError("");
		setIsLoaded(false);

		const response = authenticate(accessKey, secretKey);

		response
			.then((result) => {
				sessionStorage.setItem(API_TOKEN_KEY, result.token);
				router.navigate("/");
				router.location.reload();
			})
			.catch((error) => setError(error))
			.finally(() => setIsLoaded(true));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1>Login page</h1>
					<LoginForm handleLogin={handleLogin} isLoaded={isLoaded} />
					{error !== "" && <p className="text-danger">{error}</p>}
				</div>
			</div>
		</div>
	);
};

export default Layout(Login);
