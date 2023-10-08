import React, { useContext } from "react";
import bannerImg from "../../assets/banner.jpg";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Service/ServiceCard";
import AOS from "aos";
AOS.init();

import client1 from "../../assets/profile-1.jpg";
import client2 from "../../assets/profile-2.jpg";
import client3 from "../../assets/profile-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
	const data = useLoaderData();

	return (
		<>
			<Banner bannerImg={bannerImg} bannerTitle="Corporate Event Management" />
			<div className="my-20">
				<h2 className="text-xl md:text-3xl font-semibold text-center pb-2">
					Services
				</h2>
				<hr className="border-t-2 w-32 mx-auto mb-8" />

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{data.map((service) => (
						<ServiceCard data={service} key={service.id} />
					))}
				</div>
			</div>
			<div className="my-20">
				<div className="grid lg:grid-cols-2 gap-5" data-aos="fade-up">
					<div>
						<h2 className="text-xl md:text-2xl font-semibold text-center pb-2">
							Why Choose Us for your Event?
						</h2>
						<p className="text-center">Event that you will Remember</p>

						<div className="my-8">
							<h3 className="text-xl mb-2">
								All kind of Logistics and Resources Support
							</h3>
							<p>
								As an experienced Event Management company, we have all kind of
								Event equipment, logistics and resources available
							</p>
						</div>
						<div className="my-8">
							<h3 className="text-xl mb-2">
								Experienced Event Planner and Manager
							</h3>
							<p>
								When it's about making your Event successful, it's all about
								making a good plan, managing and executing successfully. And, we
								have experienced who will make your event unique and memorable!
							</p>
						</div>
					</div>
					<img
						src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Why Choose Us"
						className="rounded-xl"
					/>
				</div>
			</div>
			<div className="py-10 bg-gray-800">
				<h2 className="text-3xl font-semibold text-center mb-8">
					Our Recent Clients
				</h2>
				<Swiper
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={30}
					grabCursor={true}
					className="mySwiper"
				>
					<SwiperSlide>
						<img
							src={client1}
							alt="client-1"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client2}
							alt="client-2"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client3}
							alt="client-3"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client1}
							alt="client-1"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client2}
							alt="client-2"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client3}
							alt="client-3"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client1}
							alt="client-1"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client2}
							alt="client-2"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client3}
							alt="client-3"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client1}
							alt="client-1"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client2}
							alt="client-2"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={client3}
							alt="client-3"
							className="w-40 h-40 object-cover rounded-full"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Home;
