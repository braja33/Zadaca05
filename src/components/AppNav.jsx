import React, { createContext, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../App";
import { getSearchedPhotos } from "../services/PhotosService";

const AppNav = () => {
	const [query, setQuery] = useState("");
	const { photos, setPhotos } = useContext(AppContext);
	const { isLoaded, setIsLoaded } = useContext(AppContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoaded(false);
		console.log("pozdrav iz handle submita");
		getSearchedPhotos(query)
			.then((result) => {
				setPhotos(result);
			})

			.catch((error) => console.error("Error"))
			.finally(() => {
				setTimeout(() => {
					setIsLoaded(true);
					console.log("Odgovor iz searched", photos);
					setQuery("");
				}, 300);
			});
	};

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container fluid>
					<Navbar.Brand as={Link} to="/">
						Galerija slika
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link as={Link} to="/aboutus">
								O nama
							</Nav.Link>
							<Nav.Link as={Link} to="/">
								Početna
							</Nav.Link>
						</Nav>
						<Form className="d-flex" onSubmit={handleSubmit}>
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
								onChange={(e) => setQuery(e.target.value)}
								value={query}
							/>
							<Button type="submit" variant="outline-success">
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
};

export default AppNav;
