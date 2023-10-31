import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
	const { loading, loginUser, loginWithGoogle } =
		useContext(AuthProviderContext);

	const location = useLocation();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		loginUser(email, password)
			.then((result) => {
				if (result) {
					navigate(location?.state ? location.state : "/");
					Swal.fire("Thank You!", "Account Login successful!", "success");
				}
			})
			.catch((error) => {
				Swal.fire(error.message);
			});
	};
	const handleLoginWithGoogle = () => {
		loginWithGoogle()
			.then((result) => {
				if (result) {
					navigate(location?.state ? location.state : "/");
					Swal.fire(
						"Thank You!",
						"Your account has been created successful!",
						"success"
					);
				}
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<h1 className="text-center text-3xl font-semibold mb-10">
				Login your account
			</h1>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleLogin}>
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
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Enter your password"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
						>
							Login
						</button>
					</div>
				</form>

				<div className="my-10 flex gap-2 items-center">
					<p>Login With Google Account</p>
					<button
						onClick={handleLoginWithGoogle}
						className=" flex items-center gap-2 py-1 px-5 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white"
					>
						<FaGoogle /> Google
					</button>
				</div>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{" "}
					<Link
						to="/register"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					>
						Create an Account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
