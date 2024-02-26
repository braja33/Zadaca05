import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Nav = () => {
	const location = useLocation();

	const homePageLink = location.pathname === "/" ? "active" : "";
	const shopPageLink = location.pathname.startsWith("/shop") ? "active" : "";
	const loginPageLink = location.pathname.startsWith("/login")
		? "active"
		: "";

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Mobile Shop
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									className={"nav-link " + homePageLink}
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={"nav-link " + shopPageLink}
									to="/shop"
								>
									Shop
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={"nav-link " + loginPageLink}
									to="/login"
								>
									Login
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Nav;
