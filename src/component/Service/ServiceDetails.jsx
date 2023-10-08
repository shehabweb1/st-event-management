import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { saveBookingEvent } from "../../../utility/localStorage";
import Swal from "sweetalert2";

const ServiceDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	const idNum = parseInt(id);
	const service = data.find((item) => item.id === idNum);

	const { title, full_image, description, price, details, features } = service;

	const handleBooking = () => {
		Swal.fire(
			"Thank You!",
			"The event booking has been successful!",
			"success"
		);

		saveBookingEvent(idNum);
	};

	return (
		<div>
			<Banner bannerImg={full_image} bannerTitle={title} />

			<div className="my-10">
				<div className="flex justify-between mb-10">
					<h2 className="text-3xl font-bold">{title}</h2>
					<button
						onClick={handleBooking}
						className="btn bg-blue-600 hover:bg-blue-700 text-white"
					>
						Book Now
					</button>
				</div>
				<h3 className="text-2xl font-semibold mb-3">Description</h3>
				<p className="text-lg">{description}</p>
				<div className="my-10">
					<h3 className="text-2xl font-semibold mb-3">Features</h3>
					<ul className="list-decimal list-inside">
						{features.map((item, idx) => (
							<li className="text-lg mb-3" key={idx}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="my-10">
					<h3 className="text-2xl font-semibold mb-3">Details</h3>
					<ul className="list-inside">
						<li className="text-lg mb-1">Price: ${price}</li>
						<li className="text-lg mb-1">Location: {details.location}</li>
						<li className="text-lg mb-1">Date: {details.date}</li>
						<li className="text-lg mb-1">Duration: {details.duration}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
