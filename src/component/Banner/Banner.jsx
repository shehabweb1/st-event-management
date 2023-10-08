import React from "react";
import AOS from "aos";
AOS.init();

const Banner = ({ bannerImg, bannerTitle }) => {
	return (
		<div className="relative" data-aos="fade-down" >
			<img src={bannerImg} alt={bannerTitle} className="w-full h-auto" />
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<h1 className="text-xl md:text-4xl font-bold text-white">{bannerTitle}</h1>
			</div>
		</div>
	);
};

export default Banner;
