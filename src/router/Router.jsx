import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import AltLayout from "../layout/AltLayout";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import UserDashboardLayout from "../layout/UserDashboardLayout";

// Lazy load components
const ApiDocs = lazy(() => import("../components/ApiDocs"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Dashboard = lazy(() => import("../pages/Admin/Dashboard"));
const Pricing = lazy(() => import("../pages/Admin/Pricing"));
const Blogs = lazy(() => import("../pages/Blogs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Cookie = lazy(() => import("../pages/Cookie"));
const EmailValidation = lazy(() => import("../pages/EmailValidation"));
const Error = lazy(() => import("../pages/Error"));
const Faqs = lazy(() => import("../pages/Faqs"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const MakerAdminDashboard = lazy(() => import("../pages/MakerAdminDashboard"));
const Makers = lazy(() => import("../pages/Makers"));
const Plan = lazy(() => import("../pages/Plan"));
const RefundPolicy = lazy(() => import("../pages/RefundPolicy"));
const Register = lazy(() => import("../pages/Register"));
const SingleBlog = lazy(() => import("../pages/SingleBlog"));
const Terms = lazy(() => import("../pages/Terms"));
const SingleApi = lazy(() => import("../pages/User/SingleApi"));
const UserApi = lazy(() => import("../pages/User/UserApi"));
const UserDashboard = lazy(() => import("../pages/User/UserDashboard"));
const UserSettings = lazy(() => import("../pages/User/UserSettings"));
const UserStats = lazy(() => import("../pages/User/UserStats"));
const Policy = lazy(() => import("../pages/Policy"));
const BlogsPanel = lazy(() => import("../pages/Admin/BlogsPanel"));
const Settings = lazy(() => import("../pages/Admin/Settings"));
const Test = lazy(() => import("../pages/Test"));
const Maintenance = lazy(() => import("../pages/Admin/Maintenance"));
const TwoFector = lazy(() => import("../pages/TwoFector"));
const Users = lazy(() => import("../pages/Admin/Users"));
const Orders = lazy(() => import("../pages/Admin/Orders"));
const Success = lazy(() => import("../pages/Payment/Success"));
const Failed = lazy(() => import("../pages/Payment/Failed"));

// Router configuration with lazy-loaded components
export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/pricing", element: <Plan /> },
			{ path: "/api-docs", element: <ApiDocs /> },
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

	{ path: "/email-validation/:token", element: <EmailValidation /> },
	{ path: "/forget-password/:email/:token", element: <ForgetPassword /> },
	{ path: "/test", element: <Test /> },
	{ path: '*', element: <Error /> },
]);

// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout />,
// 		children: [
// 			{ path: "/", element: <Home /> },
// 			// { path: "/bulk-checker", element: <BulkChecker /> },
// 			{ path: "/pricing", element: <Plan /> },
// 			{ path: "/api-docs", element: <ApiDocs /> },
// 			// { path: "/account", element: <Account /> },
// 			{ path: "/faqs", element: <Faqs /> },
// 			{ path: "/contact-us", element: <ContactUs /> },
// 			{ path: "/about-us", element: <AboutUs /> },
// 			{ path: "/privacy-policy", element: <Policy /> },
// 			{ path: "/terms", element: <Terms /> },
// 			{ path: "/cookie", element: <Cookie /> },
// 			{ path: "/refund-policy", element: <RefundPolicy /> },
// 			{ path: "/blogs", element: <Blogs /> },
// 			{ path: "/blogs/:single", element: <SingleBlog /> },
// 			{ path: "/makers", element: <Makers /> },
// 			{ path: "/ad", element: <MakerAdminDashboard /> },
// 		],
// 	},
// 	{
// 		path: "/",
// 		element: <AltLayout />,
// 		children: [
// 			{ path: "/login", element: <Login /> },
// 			{ path: "/register", element: <Register /> },
// 			{ path: "/two-fector", element: <TwoFector /> },
// 		],
// 	},
// 	{
// 		path: "/admin",
// 		element: <AdminDashboardLayout />,
// 		children: [
// 			{ path: "dashboard", element: <Dashboard /> },
// 			{ path: "pricing", element: <Pricing /> },
// 			{ path: "blogs", element: <BlogsPanel /> },
// 			{ path: "users", element: <Users /> },
// 			{ path: "orders", element: <Orders /> },
// 			{ path: "settings", element: <Settings /> },
// 			{ path: "maintenance", element: <Maintenance /> },
// 		],
// 	},
// 	{
// 		path: "/user",
// 		element: <UserDashboardLayout />,
// 		children: [
// 			{ path: "checker", element: <UserDashboard /> },
// 			{ path: "stats", element: <UserStats /> },
// 			{ path: "api", element: <UserApi /> },
// 			{ path: "settings", element: <UserSettings /> },
// 			{ path: "single-api", element: <SingleApi /> }
// 		],
// 	},
// 	{ path: "/success", element: <Success /> },
// 	{ path: "/failed", element: <Failed /> },

// 	{
// 		path: "/email-validation/:token",
// 		element: <EmailValidation />
// 	},
// 	{
// 		path: "/forget-password/:email/:token",
// 		element: <ForgetPassword />
// 	},
// 	{
// 		path: "/test",
// 		element: <Test />
// 	},
// 	{
// 		path: '*',
// 		element: <Error />
// 	},

// ]);
