import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookingEvent } from "../../../utility/localStorage";
import Banner from "../Banner/Banner";
import bannerImg from "../../assets/banner.jpg";
import AOS from "aos";
AOS.init();



const Booked = () => {
	const [booked, setBooked] = useState([]);
	const data = useLoaderData();

	useEffect(() => {
		const serviceId = getBookingEvent();

		if (data.length) {
			const hasBeenBooked = data.filter((service) =>
				serviceId.includes(service.id)
			);
			setBooked(hasBeenBooked);
		}
	}, []);

	return (
		<>
            <Banner bannerImg={bannerImg} bannerTitle="This is your booking events"/>
			<div className="grid lg:grid-cols-2 gap-5 my-20">
				{booked.map((service) => (
					<div className="shadow-xl mb-5" key={service.id} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
						<img
							src={service.full_image}
							alt={service.title}
							className="rounded-t-xl w-full"
						/>
						<div className="p-5 rounded-b-xl">
							<div className="flex justify-between">
								<h2 className="text-3xl font-semibold">{service.title}</h2>
								<p className="text-lg font-semibold text-red-500">
									<span className="font-bold">Price:</span> ${service.price}
								</p>
							</div>
							<div className="flex justify-between mt-3">
								<p className="text-lg font-semibold text-blue-500">
									<span className="font-bold">Date:</span>{" "}
									{service.details.date}
								</p>
								<p className="text-lg font-semibold text-blue-500">
									<span className="font-bold">Location:</span>{" "}
									{service.details.location}
								</p>
								<p className="text-lg font-semibold text-blue-500">
									<span className="font-bold">Duration:</span>{" "}
									{service.details.duration}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Booked;
