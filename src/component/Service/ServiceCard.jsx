import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
AOS.init();

const ServiceCard = ({ data }) => {
	const { id, title, thumbnail_img, price, short_description } = data;
	return (
		<div
			className="shadow-xl w-full flex flex-col justify-between"
			data-aos="fade-up"
			data-aos-anchor-placement="top-bottom"
		>
			<img
				src={thumbnail_img}
				alt={title}
				className="w-full h-72 rounded-t-lg"
			/>
			<div className="py-3 rounded-b-lg">
				<div className="flex justify-between mb-3">
					<h3 className="text-2xl font-bold">{title}</h3>
					<p className="text-lg font-semibold text-red-500">${price}</p>
				</div>
				<p className="text-lg mb-3">{short_description}</p>
				<Link
					to={`/services/${id}`}
					className="btn w-full text-base bg-blue-500 hover:bg-blue-600 text-white"
				>
					Vew Details
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
