import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const { createUser, loginWithGoogle } = useContext(AuthProviderContext);

	const navigate = useNavigate();

	const validatePassword = (inputPassword) => {
		if (inputPassword.length < 6) {
			setShowError("Must be is more than 6 characters");
		} else if (!/[A-Z]/.test(inputPassword)) {
			setShowError("Must be have a capital letter");
		} else if (!/[!@#$%^&*()_+=[\]{}|;:'",<.>/?\\]/.test(inputPassword)) {
			setShowError("Must be have a special character");
		} else {
			setShowError(null);
		}

		setIsFormValid(
			inputPassword.length < 6 &&
				!/[A-Z]/.test(inputPassword) &&
				!/[!@#$%^&*()_+=[\]{}|;:'",<.>/?\\]/.test(inputPassword)
		);
	};

	const handleChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		validatePassword(newPassword);
	};

	const handleCreateAccount = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		createUser(email, password)
			.then((result) => {
				navigate("/");
				Swal.fire(
					"Thank You!",
					"Your account has been created successful!",
					"success"
				);
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.message,
				});
			});
	};

	const handleJoinWithGoogle = () => {
		loginWithGoogle();
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<h1 className="text-center text-3xl font-semibold mb-10">
				Login your account
			</h1>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleCreateAccount}>
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
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								placeholder="Enter your name"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="photo"
							className="block text-sm font-medium leading-6 "
						>
							Profile Photo
						</label>
						<div className="mt-2">
							<input
								id="photo"
								name="photo"
								type="text"
								autoComplete="photo"
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								placeholder="Enter your photo"
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
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								placeholder="Enter your email address"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 "
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								value={password}
								onChange={handleChange}
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								placeholder="Enter your password"
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center">
							<input id="checkbox" name="checkbox" type="checkbox" required />
							<label
								htmlFor="checkbox"
								className="block ml-2 text-sm font-medium"
							>
								Are you accept?{" "}
								<a href="#" className="text-blue-600">
									Our Terms & Conditions
								</a>
							</label>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
							disabled={isFormValid}
						>
							Create An Account
						</button>
					</div>
				</form>

				<div className="my-5">
					<button onClick={handleJoinWithGoogle} className="btn">
						Google
					</button>
				</div>

				{<p className="text-red-600 my-5">{showError}</p>}

				<p className="mt-10 text-center text-sm text-gray-500">
					If you have an account? Please{" "}
					<Link
						to="/login"
						className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
