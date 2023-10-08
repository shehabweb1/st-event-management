import React from "react";
import Banner from "../Banner/Banner";
import contactImg from "../../assets/contact.png";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
	return (
		<div>
			<Banner bannerImg={contactImg} bannerTitle="Contact Us" />
			<div className="my-10">
				<form className="lg:w-1/2 mx-auto">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 "
						>
							Full Name
						</label>
						<div className="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Enter your name"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 "
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Enter your email address"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium leading-6 "
						>
							Message
						</label>
						<div className="mt-2">
							<textarea
								id="message"
								name="message"
								required
								className="block  w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Enter your Message"
							></textarea>
						</div>
					</div>
					<button className="btn items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg mt-2 ms-auto block">
						<BsFillSendFill className="inline-block" /> Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
