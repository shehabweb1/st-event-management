import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
	const { user, logOut } = useContext(AuthProviderContext);
	const navigate = useNavigate();

	const navMenu = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/about">About</NavLink>
			</li>
			<li>
				<NavLink to="/services">Services</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact Us</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to="/booked">Booked</NavLink>
				</li>
			)}
		</>
	);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				navigate("/");
				Swal.fire(
					"Welcome!",
					"Your account has been Sign Out successful!",
					"success"
				);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const profile = user?.photoURL
		? user?.photoURL
		: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLlJS2C2KD-fRoOykz8e5luqOtFFpGo_QQ&usqp=CAU";

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navMenu}
					</ul>
				</div>
				<Link
					to="/"
					className="btn btn-ghost normal-case text-2xl text-blue-400"
				>
					<span className="text-blue-600 font-extrabold">ST.</span> Event
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navMenu}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<>
						<p>{user?.displayName && user.displayName}</p>
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src={profile} className="object-cover" />
							</div>
						</label>
						<button onClick={handleLogOut} className="btn">
							Log Out
						</button>
					</>
				) : (
					<>
						<Link to="/register" className="btn">
							Create An Account
						</Link>
						<Link to="/login" className="btn">
							Login
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
