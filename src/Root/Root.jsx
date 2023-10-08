import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer";

const Root = () => {
	return (
		<div className="container mx-auto">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
