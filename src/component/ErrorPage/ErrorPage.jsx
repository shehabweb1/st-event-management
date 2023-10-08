import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="pt-20">
			<h1 className="text-4xl text-center font-semibold mb-5">
				404 page (not found page)
			</h1>
			<Link to="/">
				<button className="btn btn-primary block mx-auto">Go Back Home</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
