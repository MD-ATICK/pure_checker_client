import { createBrowserRouter } from "react-router-dom";
import ApiDocs from "../components/ApiDocs";
import AltLayout from "../layout/AltLayout";
import MainLayout from "../layout/MainLayout";
import UserDashboardLayout from "../layout/UserDashboardLayout";
import AboutUs from "../pages/AboutUs";
import Dashboard from '../pages/Admin/Dashboard';
import Pricing from "../pages/Admin/Pricing";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Cookie from "../pages/Cookie";
import EmailValidation from "../pages/EmailValidation";
import Error from "../pages/Error";
import Faqs from "../pages/Faqs";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MakerAdminDashboard from "../pages/MakerAdminDashboard";
import Makers from "../pages/Makers";
import Plan from "../pages/Plan";
import RefundPolicy from "../pages/RefundPolicy";
import Register from "../pages/Register";
import SingleBlog from "../pages/SingleBlog";
import Terms from "../pages/Terms";
import SingleApi from "../pages/User/SingleApi";
import UserApi from "../pages/User/UserApi";
import UserDashboard from "../pages/User/UserDashboard";
import UserSettings from "../pages/User/UserSettings";
import UserStats from "../pages/User/UserStats";
import AdminDashboardLayout from './../layout/AdminDashboardLayout';
import Policy from "../pages/Policy";
import BlogsPanel from "../pages/Admin/BlogsPanel";
import Settings from "../pages/Admin/Settings";
import Test from "../pages/Test";
import Maintenance from "../pages/Admin/Maintenance";
import TwoFector from "../pages/TwoFector";
import Users from "../pages/Admin/Users";
import Orders from "../pages/Admin/Orders";
import Success from "../pages/Payment/Success";
import Failed from "../pages/Payment/Failed";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			// { path: "/bulk-checker", element: <BulkChecker /> },
			{ path: "/pricing", element: <Plan /> },
			{ path: "/api-docs", element: <ApiDocs /> },
			// { path: "/account", element: <Account /> },
			{ path: "/faqs", element: <Faqs /> },
			{ path: "/contact-us", element: <ContactUs /> },
			{ path: "/about-us", element: <AboutUs /> },
			{ path: "/privacy-policy", element: <Policy /> },
			{ path: "/terms", element: <Terms /> },
			{ path: "/cookie", element: <Cookie /> },
			{ path: "/refund-policy", element: <RefundPolicy /> },
			{ path: "/blogs", element: <Blogs /> },
			{ path: "/blogs/:single", element: <SingleBlog /> },
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
			{ path: "/two-fector", element: <TwoFector /> },
		],
	},
	{
		path: "/admin",
		element: <AdminDashboardLayout />,
		children: [
			{ path: "dashboard", element: <Dashboard /> },
			{ path: "pricing", element: <Pricing /> },
			{ path: "blogs", element: <BlogsPanel /> },
			{ path: "users", element: <Users /> },
			{ path: "orders", element: <Orders /> },
			{ path: "settings", element: <Settings /> },
			{ path: "maintenance", element: <Maintenance /> },
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
	{ path: "/success", element: <Success /> },
	{ path: "/failed", element: <Failed /> },

	{
		path: "/email-validation/:token",
		element: <EmailValidation />
	},
	{
		path: "/forget-password/:email/:token",
		element: <ForgetPassword />
	},
	{
		path: "/test",
		element: <Test />
	},
	{
		path: '*',
		element: <Error />
	},

]);
