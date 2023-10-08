import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "./ServiceCard";
import servicesImg from "../../assets/services.png"

const Services = () => {
	const data = useLoaderData();

	return (
		<div>
			<Banner bannerImg={servicesImg} bannerTitle="Our Services"/>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
				{data.map((service) => (
					<ServiceCard data={service} key={service.id} />
				))}
			</div>
		</div>
	);
};

export default Services;
