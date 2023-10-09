import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Root from "../Root/Root";
import About from "../component/About/About";
import Services from "../component/Service/Services";
import ServiceDetails from "../component/Service/ServiceDetails";
import Booked from "../component/Booked/Booked";
import Contact from "../component/Contact/Contact";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("../data.json"),
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/services",
				element: <Services />,
				loader: () => fetch("../data.json"),
			},
			{
				path: "/services/:id",
				element: (
					<PrivateRoute>
						<ServiceDetails />
					</PrivateRoute>
				),
				loader: () => fetch("../data.json"),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/booked",
				element: (
					<PrivateRoute>
						<Booked />
					</PrivateRoute>
				),
				loader: () => fetch("../data.json"),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

export default router;
