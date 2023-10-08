import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Root from "../Root/Root";
import About from "../component/About/About";
import Services from "../component/Service/Services";
import ServiceDetails from "../component/Service/ServiceDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("./data.json"),
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/services",
				element: <Services />,
				loader: () => fetch("./data.json"),
			},
			{
				path: "/services/:id",
				element: <ServiceDetails />,
				loader: () => fetch("./data.json"),
			},
		],
	},
]);

export default router;