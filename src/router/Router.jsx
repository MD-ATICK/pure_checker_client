import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import BulkChecker from "../pages/BulkChecker";
import Plan from "../pages/Plan";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AltLayout from "../layout/AltLayout";
import Account from "../pages/Account";
import Makers from "../pages/Makers";
import MakerAdminDashboard from "../pages/MakerAdminDashboard";
import FourZeroFour from "../pages/FourZeroFour";
import Home from "../pages/Home";
import AdminDashboardLayout from './../layout/AdminDashboardLayout'
import Dashboard from '../pages/Admin/Dashboard'
import UserDashboardLayout from "../layout/UserDashboardLayout";
import UserDashboard from "../pages/User/UserDashboard";
import Pricing from "../pages/Admin/Pricing";
import UserSettings from "../pages/User/UserSettings";
import UserApi from "../pages/User/UserApi";
import UserStats from "../pages/User/UserStats";
import SingleApi from "../pages/User/SingleApi";
import ContactUs from "../pages/ContactUs";
import Faqs from "../pages/Faqs";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import RefundPolicy from "../pages/RefundPolicy";
import Cookie from "../pages/Cookie";
import ApiDocs from "../components/ApiDocs";

export const router = createBrowserRouter([

	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			// { path: "/bulk-checker", element: <BulkChecker /> },
			{ path: "/pricing", element: <Plan /> },
			{ path: "/api-docs", element: <ApiDocs /> },
			{ path: "/account", element: <Account /> },


			{ path: "/faqs", element: <Faqs /> },
			{ path: "/contact-us", element: <ContactUs /> },
			{ path: "/about-us", element: <AboutUs /> },
			{ path: "/privacy-policy", element: <PrivacyPolicy /> },
			{ path: "/terms", element: <Terms /> },
			{ path: "/cookie", element: <Cookie /> },
			{ path: "/refund-policy", element: <RefundPolicy /> },

			{ path: "/makers", element: <Makers /> },
			{ path: "/ad", element: <MakerAdminDashboard /> },
		],
	},
	{
		path: "/",
		element: <AltLayout />,
		children: [
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
		],
	},
	{
		path: "/admin",
		element: <AdminDashboardLayout />,
		children: [{ path: "dashboard", element: <Dashboard /> }
			, { path: "pricing", element: <Pricing /> }
		],
	},
	{
		path: "/user",
		element: <UserDashboardLayout />,
		children: [
			{ path: "checker", element: <UserDashboard /> },
			{ path: "stats", element: <UserStats /> },
			{ path: "api", element: <UserApi /> },
			{ path: "settings", element: <UserSettings /> },

			{ path: "single-api", element: <SingleApi /> }
		],
	},
	{
		path: '*',
		element: <FourZeroFour />
	}
]);
