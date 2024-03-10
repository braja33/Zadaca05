import React from "react";

const Login = () => {
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

export default Login;
