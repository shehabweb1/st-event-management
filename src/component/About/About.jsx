import React from "react";
import Banner from "../Banner/Banner";
import aboutImg from "../../assets/about.png";

const About = () => {
	return (
		<div>
			<Banner
				bannerImg={aboutImg}
				bannerTitle="Welcome to Our Corporate Event Management Services"
			/>
			<div className="my-20">
				<p className="mb-10 text-lg">
					At ST. Event, we specialize in creating unforgettable corporate events
					that leave a lasting impression. With a passion for precision and a
					flair for innovation, our team of experienced event planners is
					dedicated to bringing your vision to life.
				</p>
				<h3 className="text-xl font-semibold mb-3">Why Choose Us:</h3>
				<ul className="list-inside list-decimal mb-10">
					<li className="mb-3">
						<span className="font-semibold text-lg">Expertise:</span> Our team
						has years of experience in the corporate event planning industry. We
						understand the unique needs of businesses and can tailor our
						services to meet your specific goals.
					</li>
					<li className="mb-3">
						<span className="font-semibold text-lg">Tailored Solutions:</span>
						We believe that every corporate event is unique. Whether you're
						hosting a conference, product launch, team-building retreat, or
						awards gala, we'll customize our services to match your objectives
						and budget.
					</li>
					<li className="mb-3">
						<span className="font-semibold text-lg">Attention to Detail:</span>
						From venue selection to catering, audiovisual setup to
						entertainment, we leave no stone unturned. We meticulously plan
						every aspect of your event to ensure it runs flawlessly.
					</li>
					<li className="mb-3">
						<span className="font-semibold text-lg">Creative Ideas:</span>
						Our creative minds are always buzzing with innovative ideas. We'll
						work with you to incorporate creative and engaging elements into
						your event, making it stand out from the rest.
					</li>
					<li className="mb-3">
						<span className="font-semibold text-lg">
							Professional Partnerships:
						</span>
						We have a network of trusted vendors and partners, ensuring that you
						receive top-notch services, from floral arrangements to event
						photography.
					</li>
				</ul>
				<h3 className="text-xl font-semibold mb-3">Our Services:</h3>
				<ul className="list-inside list-disc">
					<li className="mb-3">
						<span className="font-semibold text-lg">Event Planning:</span> We
						take care of all the details, so you can focus on your business. Our
						event planning services cover everything from concept development to
						execution.
					</li>
					<li className="mb-3">
						<span className="font-semibold text-lg">Venue Selection:</span>
						We'll help you find the perfect venue that suits your event's size
						and style, whether it's a luxurious ballroom, a scenic outdoor
						space, or a state-of-the-art conference center.
					</li>
					<li className="mb-3">
						<span className="font-semibold text-lg">Logistics Management:</span>
						Our team will handle logistics such as transportation,
						accommodation, and on-site coordination, ensuring a seamless
						experience for your attendees.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
